import { Portal } from "@radix-ui/react-dropdown-menu";

/**
 * Dropdown menu portal
 * This component contains the dropdown menu portal component.
 * @returns JSX.Element
 */
export function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof Portal>) {
  return <Portal data-slot="dropdown-menu-portal" {...props} />;
}
