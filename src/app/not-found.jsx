export default function NotFound() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-gray-100">
      <div className="container mx-auto space-y-16 px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
        <div className="text-center">          
          <h2 className="mb-4 text-4xl font-black text-black dark:text-white">
            Page Not Found
          </h2>
          <h3 className="mx-auto text-xl font-medium leading-relaxed text-gray-700 dark:text-gray-300 lg:w-2/3">
            It seems you have clicked on a link that doesn't exist.
          </h3>
        </div>
      </div>
    </div>
  );
}
