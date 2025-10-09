export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-200 bg-black/80">
      <div className="animate-spin h-16 w-16 border-4 border-t-transparent border-white rounded-full mb-4"></div>
      <p className="text-lg">Loading products...</p>
    </div>
  );
}
