import { cn } from "@/lib/utils";

/**
 * Dropdown menu shortcut
 * This component contains the dropdown menu shortcut component.
 * @returns JSX.Element
 */
export function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  );
}
