import Link from "next/link";
import { IconBrandCodesandbox } from "@tabler/icons-react";
export default function NavbarLogo() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-1.5 text-lg font-bold tracking-wide text-neutral-900 hover:text-neutral-600"
    >
      <IconBrandCodesandbox
        size={24}
        className="inline-block text-neutral-950 transition group-hover:scale-110 group-active:scale-100"
      />
      <span>
        Sales<span className="font-normal">Dash</span>
      </span>
    </Link>
  );
}
