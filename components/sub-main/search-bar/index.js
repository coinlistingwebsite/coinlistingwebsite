// components/SearchBar.jsx
import React, { useState, useEffect, useContext, useRef } from "react";
import { CryptoDataContext } from "@/context/CryptoDataContext";
import debounce from "lodash/debounce";
import Link from "next/link";
import { ThemeContext } from "@/context/ThemeContext";

const SearchBar = () => {
  const { dbTokens = [], loading: contextLoading } =
    useContext(CryptoDataContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const abortControllerRef = useRef(null);
  const searchTermRef = useRef(searchTerm);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    searchTermRef.current = searchTerm;
  }, [searchTerm]);

  const debouncedSearch = useRef(
    debounce(async (query) => {
      if (query.length < 2) return [];

      // Cancel previous request
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      // Create new abort controller for this request
      abortControllerRef.current = new AbortController();

      setIsLoading(true);
      try {
        const response = await fetch(`/api/search-tokens?query=${query}`, {
          signal: abortControllerRef.current.signal,
        });
        const data = await response.json();
        // Only return results if this is still the current search term
        if (searchTermRef.current === query) {
          return data.results || [];
        }
        return [];
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Request was cancelled");
        } else {
          console.error("Error fetching search results:", error);
        }
        return [];
      } finally {
        setIsLoading(false);
      }
    }, 200) // Reduced debounce time
  ).current;

  useEffect(() => {
    const handleSearch = async () => {
      // Clear results immediately if search term is too short
      if (searchTerm.length < 2) {
        setResults([]);
        setShowDropdown(false);
        return;
      }

      // Search in context tokens immediately
      const contextResults =
        !contextLoading && Array.isArray(dbTokens) && dbTokens.length > 0
          ? dbTokens
              .filter((token) =>
                token?.project_name
                  ?.toLowerCase()
                  .includes(searchTerm.toLowerCase())
              )
              .map((token) => ({
                id: token.request_id,
                name: token.project_name,
                logo: token.logo,
                symbol: token.symbol,
                source: "context",
              }))
          : [];

      // Set immediate results from context
      setResults(contextResults);
      setShowDropdown(true);

      // Get database results
      const dbResults = await debouncedSearch(searchTerm);

      // Only update if this is still the current search term
      if (searchTermRef.current === searchTerm) {
        const dbMappedResults = (dbResults || []).map((result) => ({
          ...result,
          source: "database",
        }));

        // Combine and deduplicate results
        const combinedResults = [...contextResults, ...dbMappedResults];
        const uniqueResults = Array.from(
          new Map(combinedResults.map((item) => [item.id, item])).values()
        );

        setResults(uniqueResults.slice(0, 10));
        setShowDropdown(uniqueResults.length > 0);
      }
    };

    handleSearch();

    // Cleanup function
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [searchTerm, dbTokens, contextLoading]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full max-w-xs" ref={dropdownRef}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search tokens..."
        className="input input-bordered w-full max-w-xs"
      />

      {showDropdown && results.length > 0 && (
        <div
          className={`absolute z-10 w-full mt-1 ${
            theme === "light"
              ? "shadow-[0_4px_10px_rgba(0,0,0,0.2)] border-black bg-white"
              : " border-gray-400 border bg-gray-900"
          } rounded-md shadow-lg max-h-60 overflow-auto`}
        >
          {results.map((result) => (
            <Link
              href={`/currencies/${result.name}/${result.id}`}
              key={`${result.id}-${result.source}`}
              className="px-4 py-2 hover:underline cursor-pointer flex items-center font-medium shadow-sm"
              onClick={() => {
                setShowDropdown(false);
                setSearchTerm("");
              }}
            >
              <div className="avatar">
                <div className="mask mask-squircle w-8 h-8 mr-2 bg-gray-200 flex items-center justify-center">
                  {result.logo ? (
                    <img
                      src={result.logo}
                      alt=""
                      className="object-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentElement.classList.add("bg-gray-200");
                      }}
                    />
                  ) : (
                    <span className="text-gray-400 text-sm">
                      {result.name?.charAt(0)?.toUpperCase() || "?"}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm capitalize">{result.name}</span>
                {result.symbol && (
                  <span className="text-xs text-gray-500">{result.symbol}</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}

      {isLoading && (
        <div className="absolute right-3 top-3">
          <span className="loading loading-spinner loading-sm"></span>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
