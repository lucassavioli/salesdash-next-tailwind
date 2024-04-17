import Link from "next/link";

export default function TableTitle({ title, description, children }) {
  return (
    <>
      <div>
        <h2 className="mb-0.5 font-semibold">{title}</h2>
        <h3 className="text-sm font-medium text-neutral-600">{description}</h3>
      </div>
      <div>
        {children}
      </div>
    </>
  );
}
