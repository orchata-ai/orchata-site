import { GithubIcon } from "./github-icon";
import { HuggingfaceIcon } from "./huggingface-icon";
import { Logo } from "./logo";
import { ModeToggle } from "./mode-toggle";

/**
 * Header
 * This component contains the header and its components
 * for the site.
 * @returns JSX.Element
 */
export function Header() {
  return (
    <header className="bg-background text-foreground h-20 flex items-center justify-between px-8">
      <div>
        <Logo />
      </div>
      <div className="flex items-center gap-4">
        <GithubIcon />
        <HuggingfaceIcon />
        <ModeToggle />
      </div>
    </header>
  );
}
