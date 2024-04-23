import React from "react";
import { IconUserCircle, IconLogout, IconSettings } from "@tabler/icons-react";

const UserDropdownItem = React.forwardRef(({ title, icon }, ref) => {
  function selectIcon(icon) {
    switch (icon) {
      case "user":
        return (
          <IconUserCircle className="inline-block h-5 w-5 flex-none opacity-25 group-hover:opacity-50" />
        );
      case "logout":
        return (
          <IconLogout className="inline-block h-5 w-5 flex-none opacity-25 group-hover:opacity-50" />
        );
      case "settings":
        return (
          <IconSettings className="inline-block h-5 w-5 flex-none opacity-25 group-hover:opacity-50" />
        );
    }
  }
  return (
    <a
      ref={ref}
      href="#"
      role="menuitem"
      className="group flex items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-sm font-medium text-slate-700 hover:bg-neutral-100 hover:text-neutral-950"
    > 
      {selectIcon(icon)}
      <span className="grow">{title}</span>
    </a>
  );
});

export default UserDropdownItem;
