export default function SearchBar() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 start-0 my-px ms-px flex w-10 items-center justify-center rounded-l-lg text-neutral-500">
        <svg
          className="hi-mini hi-magnifying-glass inline-block h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search everything.."
        className="block w-full rounded-lg border border-neutral-200 py-2 pe-3 ps-10 leading-6 placeholder-neutral-500 focus:border-neutral-500 focus:ring focus:ring-neutral-500 focus:ring-opacity-25"
      />
    </div>
  );
}
