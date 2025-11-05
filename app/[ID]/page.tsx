import Link from "next/link";

export const revalidate = 60; // Rebuild this page every 60 seconds (ISR)

export default async function BlogPostPage({
  params,
}: {
  params: { id: string };
}) {
  // Fetch a single post (ISR)
  const postRes = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    {
      next: { revalidate: 60 },
    }
  );
  const post = await postRes.json();

  // Fetch the author of that post (mock API uses userId)
  const authorRes = await fetch(
    `https://jsonplaceholder.typicode.com/users/${post.userId}`,
    {
      next: { revalidate: 60 },
    }
  );
  const author = await authorRes.json();

  return (
    <article className="max-w-2xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 leading-relaxed mb-6">{post.body}</p>

      <div className="border-t pt-4 mt-6 text-sm text-gray-600">
        <p>
          <span className="font-semibold">Author:</span> {author.name}
        </p>
        <p>
          <span className="font-semibold">Email:</span>{" "}
          <a
            href={`mailto:${author.email}`}
            className="text-blue-600 hover:underline"
          >
            {author.email}
          </a>
        </p>
      </div>

      <div className="mt-8">
        <Link
          href="/blog"
          className="text-blue-600 hover:underline text-sm font-medium"
        >
          ← Back to Blog
        </Link>
      </div>
    </article>
  );
}
