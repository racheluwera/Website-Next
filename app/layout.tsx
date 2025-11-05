import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'My Website',
  description: 'Built with Next.js App Router',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
       <html lang="en">
      <body className="flex min-h-screen flex-col bg-gray-500 text-gray-900">
        <header className="bg-white shadow-md">
          <nav className="container mx-auto flex items-center justify-between px-6 py-4">
            <h1 className="text-xl text-red font-bold">My Website</h1>
            <ul className="flex gap-6 text-gray-700">
              <li><Link href="/" className="hover:text-blue-600 transition-colors"> Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-600 transition-colors">About </Link></li>
              <li><Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link></li>
            </ul>
          </nav>
        </header>

        
        <main className="flex-grow container mx-auto px-6 py-10">
          {children}
        </main>

        
        <footer className="bg-gray-100 py-6 mt-10 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} My Website. All rights reserved.
        </footer>
      </body>
    </html>
  );
}