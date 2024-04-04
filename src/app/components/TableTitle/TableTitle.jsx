export default function TableTitle({ title, description, btnName }) {
  return (
    <>
      <div>
        <h2 className="mb-0.5 font-semibold">{title}</h2>
        <h3 className="text-sm font-medium text-neutral-600">{description}</h3>
      </div>
      <div>
        <a
          href="#"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-neutral-800 hover:border-neutral-300 hover:text-neutral-950 active:border-neutral-200"
        >
          {btnName}
        </a>
      </div>
    </>
  );
}
