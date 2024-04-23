import MobileNavbarItem from "./MobileNavbarItem";
import itemsMenu from "@/app/utils/navbar-menu-data";

export default function MobileNavbar() {
  return (
    <div className="lg:hidden">
      <nav className="flex flex-col gap-2 border-t border-neutral-200 py-4">
        {itemsMenu.map((item) => (
          <MobileNavbarItem
            key={item.title}
            title={item.title}
            href={item.href}
          />
        ))}
      </nav>
    </div>
  );
}
