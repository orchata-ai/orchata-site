import { Trigger } from "@radix-ui/react-dropdown-menu";
/**
 * Dropdown menu trigger
 * This component contains the dropdown menu trigger component.
 * @returns JSX.Element
 */
export function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof Trigger>) {
  return <Trigger data-slot="dropdown-menu-trigger" {...props} />;
}
