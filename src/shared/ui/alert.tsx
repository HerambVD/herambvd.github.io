/** Inline error message shown above a form. */
export default function Alert({ message }: { message: string }) {
  return (
    <div role="alert" className="mb-4 border-l-4 border-red-600">
      <p className="px-2 pb-1 text-red-600 opacity-80">Error</p>
      <p className="bg-red-600/20 p-4 text-sm">{message}</p>
    </div>
  );
}
