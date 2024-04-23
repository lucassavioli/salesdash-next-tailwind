export default function TableHeader({ title }) {
  return (
    <th className="min-w-[140px] px-3 py-2 text-start text-sm font-semibold uppercase tracking-wider text-neutral-700">
      {title}
    </th>
  );
}
