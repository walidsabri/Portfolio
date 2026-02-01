import { createContext, useState, useEffect } from "react";

export const themeContext = createContext({
  theme: "",
  handleSetTheme: () => {},
});

const THEME_STORAGE_KEY = "portfolio-theme";

export function ThemeCtxProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Load theme from localStorage on initialization
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    return savedTheme || "dark";
  });

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  function handleSetTheme() {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  const ctxValue = {
    theme,
    handleSetTheme,
  };

  return (
    <themeContext.Provider value={ctxValue}>{children}</themeContext.Provider>
  );
}
