export default function ChartHeaderWrapper({ title, description, children }) {
  return (
    <>
      <dl className="px-6 pt-6">
        <dt className="text-2xl font-bold">{title}</dt>
        <dd className="text-sm font-medium text-slate-500">{description}</dd>
      </dl>
      <div className="-m-2">{children}</div>
    </>
  );
}
