"use client";

import { delay } from "@/lib/validations/validations";
import { createContext, useState, useEffect } from "react";
export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [isMounted, setIsMounted] = useState(false);

  const delayFunc = async () => {
    // Delay the function
    for (let p = 0; p < 3; p++) {
      await delay(2000);
    }
  };

  useEffect(() => {
    delayFunc();

    setTimeout(() => {
      setIsMounted(true);
    }, 4000);

  //  const storedTheme = localStorage.getItem("theme") || "corporate";
  //  setTheme(storedTheme);
  }, []);

  if (!isMounted)
    return (
      <div className="w-full mx-auto max-w-[1300px] min-h-[50vh] flex justify-center">
        <span className="loading loading-spinner loading-lg"></span>
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
