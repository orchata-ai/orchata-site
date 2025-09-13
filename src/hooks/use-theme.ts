import { useContext } from "react";
import { ThemeProviderContext } from "@/context/theme-context";

/**
 * Use theme
 * This hook is used to get the theme and set the theme
 * for the site.
 * @returns ThemeProviderState
 */
export function useTheme() {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
}
