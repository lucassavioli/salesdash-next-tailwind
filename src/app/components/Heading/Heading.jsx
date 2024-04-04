import SearchBar from "./SearchBar";
export default function Heading({ title, subtitle }) {
  return (
    <div className="container mx-auto px-4 pt-6 lg:px-8 lg:pt-8 xl:max-w-7xl">
      <div className="flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-start">
        <div className="grow">
          <h1 className="mb-1 text-xl font-bold">{title}</h1>
          <h2 className="text-sm font-medium text-neutral-500">{subtitle}</h2>
        </div>
        <div className="flex flex-none items-center justify-center gap-2 rounded sm:justify-end">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
