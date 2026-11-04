/** Small circular loading indicator. */
export default function Spinner() {
  return (
    <div role="status" className="flex justify-center">
      <span className="h-8 w-8 rounded-full border-4 border-gray-200 border-t-blue-600 animate-spin dark:border-gray-600 dark:border-t-blue-600" />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
