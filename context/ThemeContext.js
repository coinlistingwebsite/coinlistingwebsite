"use client";

import { createContext, useState, useEffect } from "react";
export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("corporate");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedTheme = localStorage.getItem("theme") || "corporate";
    setTheme(storedTheme);
  }, []);

  if (!isMounted)
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center pt-20">
        <br />
        <br />
        <br />
        <br />
        <br />
        <span className="loading loading-ball loading-lg"></span>
      </div>
    );

  const changeTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
