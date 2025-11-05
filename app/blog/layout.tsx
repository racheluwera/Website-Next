import Link from "next/link";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = ["Tech", "Lifestyle", "Education"];

  return (
    <section className="flex gap-8">
      <aside className="w-60 bg-white shadow rounded-lg p-4 h-fit sticky top-6">
        <h2 className="text-lg font-semibold mb-3">Categories</h2>
        <ul className="space-y-2 text-gray-700">
          {categories.map((category) => (
<li key={category}>
        <Link href={`/blog/category/${category.toLowerCase()}`} className="hover:text-blue-600 transition-colors">{category}</Link></li>
          ))}
        </ul>
      </aside>
      <div className="flex-1">{children}</div>
    </section>
  );
}
