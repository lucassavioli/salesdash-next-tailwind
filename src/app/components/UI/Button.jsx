import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";

export default function Button({ title, href }) {
  return (
    <td className="p-3 text-end font-medium">
      <Link
        href={href}
        className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-neutral-800 hover:border-neutral-300 hover:text-neutral-950 active:border-neutral-200"
      >
        <span>{title}</span>
        <IconChevronRight
          size={16}
          className="hi-mini hi-arrow-right inline-block h-5 w-5 text-neutral-400 group-hover:text-blue-600 group-active:translate-x-0.5"
        />
      </Link>
    </td>
  );
}
