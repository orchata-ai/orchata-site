/**
 * Logo
 * This component contains the logo and its variants
 * for the main landing page hero section.
 * It also hanles the light and dark mode variants via classes.
 * @returns JSX.Element
 */
export function Logo() {
  return (
    <>
      <img src="/logo.svg" alt="Orchata Logo" className="h-12 md:hidden" />
      <img
        src="/orchata-logo-dark.svg"
        alt="Orchata Logo"
        className="hidden md:dark:block h-12"
      />
      <img
        src="/orchata-logo-light.svg"
        alt="Orchata Logo"
        className="hidden md:block dark:hidden h-12"
      />
    </>
  );
}
