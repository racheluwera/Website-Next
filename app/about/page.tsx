
export const dynamic = "force-dynamic";

export default async function AboutPage() {

  const res = await fetch("https://jsonplaceholder.typicode.com/users/1",{
    cache:"no-store",
  });
  const author = await res.json();
  return (
       <section className="max-w-2xl mx-auto py-16">
      <h1 className="text-3xl font-bold mb-6 text-center">About the Author</h1>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-2">{author.name}</h2>
        <p className="text-gray-700 mb-2">
          <span className="font-medium">Username:</span> {author.username}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-medium">Email:</span> {author.email}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-medium">Phone:</span> {author.phone}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-medium">Website:</span>{" "}
          <a
            href={`https://${author.website}`}
            className="text-blue-600 hover:underline"
            target="_blank"
          >
            {author.website}
          </a>
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Company:</span>{" "}
          {author.company?.name}
        </p>
      </div>
    </section>
  );
}