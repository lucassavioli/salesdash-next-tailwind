import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";

export default function ButtonTable({ title, href}) {
  return (
    <td class="p-3 text-end font-medium">
      <Link
        href={href}
        class="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-neutral-800 hover:border-neutral-300 hover:text-neutral-950 active:border-neutral-200"
      >
        <span>View</span>
        <IconChevronRight
          size={16}
          class="hi-mini hi-arrow-right inline-block h-5 w-5 text-neutral-400 group-hover:text-blue-600 group-active:translate-x-0.5"
        />
      </Link>
    </td>
  );
}
