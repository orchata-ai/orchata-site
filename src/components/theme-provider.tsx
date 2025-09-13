import { ThemeProviderContext } from "@/context/theme-context";
import type { Theme, ThemeProviderProps } from "@/types/theme";
import { useEffect, useState } from "react";

/**
 * Theme provider
 * This component contains the theme provider and its components
 * for the site.
 * @returns JSX.Element
 */
export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "orchata-ai-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
