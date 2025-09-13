import { Sub } from "@radix-ui/react-dropdown-menu";

/**
 * Dropdown menu sub
 * This component contains the dropdown menu sub component.
 * @returns JSX.Element
 */
export function DropdownMenuSub({
  ...props
}: React.ComponentProps<typeof Sub>) {
  return <Sub data-slot="dropdown-menu-sub" {...props} />;
}
