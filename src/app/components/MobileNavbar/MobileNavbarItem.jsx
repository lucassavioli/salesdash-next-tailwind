import Link from "next/link";
export default function MobileNavbarItem({ title, href, active }) {
  return (
    <Link
      href={href}
      className={
        active
          ? "group flex items-center gap-2 rounded-lg bg-neutral-100 px-3 py-1.5 text-sm font-medium text-neutral-950"
          : "group flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium text-neutral-800 hover:bg-neutral-100 hover:text-neutral-950 active:bg-neutral-50"
      }
    >
      <span>{title}</span>
    </Link>
  );
}
