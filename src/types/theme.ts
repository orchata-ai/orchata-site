/**
 * Theme
 * This type is used to define the theme for the site.
 */
export type Theme = "dark" | "light" | "system";

/**
 * Theme provider state
 * This type is used to define the state for the theme provider.
 */
export type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

/**
 * Theme provider props
 * This type is used to define the props for the theme provider.
 */
export type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};
