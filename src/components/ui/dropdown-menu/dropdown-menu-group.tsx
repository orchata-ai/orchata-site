import { Group } from "@radix-ui/react-dropdown-menu";

/**
 * Dropdown menu group
 * This component contains the dropdown menu group component.
 * @returns JSX.Element
 */
export function DropdownMenuGroup({
  ...props
}: React.ComponentProps<typeof Group>) {
  return <Group data-slot="dropdown-menu-group" {...props} />;
}
