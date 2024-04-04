import NavbarItem from "./NavbarItem";
import { useSearchParams } from "next/navigation";
import itemsMenu from "@/app/utils/navbar-menu-data";

export default function NavbarMenu() {
  const url = useSearchParams();

  return (
    <nav className="hidden items-center gap-2 lg:flex">
      {itemsMenu.map((item) => (
        <NavbarItem
          key={item.title}
          title={item.title}
          href={item.href}
          active={url.pathname === item.href}
        />
      ))}
    </nav>
  );
}
