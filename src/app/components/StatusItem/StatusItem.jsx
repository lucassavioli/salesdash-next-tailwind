export default function StatusItem({ value, label, description, children }) {
  return (
    <a
      href="#"
      className="flex flex-col rounded-lg border border-neutral-200 bg-white hover:border-neutral-300 active:border-neutral-200"
    >
      <div className="flex grow items-center justify-between p-5">
        <dl>
          <dt className="text-2xl font-bold">{value}</dt>
          <dd className="text-sm font-medium text-neutral-500">{label}</dd>
        </dl>
        <div className="flex items-center text-sm font-medium text-emerald-500">
          {children}
        </div>
      </div>
      <div className="border-t border-neutral-100 px-5 py-3 text-xs font-medium text-orange-500">
        {description}
      </div>
    </a>
  );
}
