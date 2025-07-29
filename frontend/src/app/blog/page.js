// app/blog/page.tsx
import Link from 'next/link';
const posts = [
  {
    slug: "introduction-to-computer-vision",
    title: "Introduction to Computer Vision in 2025",
    excerpt: "A beginner-friendly guide to object detection, image classification, and real-world applications.",
    date: "2025-04-01",
  },
  {
    slug: "ai-for-startups",
    title: "How Startups Can Leverage AI Without a PhD",
    excerpt: "Practical strategies for small teams to integrate AI without huge budgets or data science teams.",
    date: "2025-03-25",
  },
  {
    slug: "ethical-ai",
    title: "Ethics in AI: Why It Matters Now",
    excerpt: "Bias, transparency, and accountability in machine learning systems — a must-read for developers.",
    date: "2025-03-18",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-400">AI Blog</h1>
        <p className="text-gray-400 mb-12">Insights, tutorials, and news from the world of AI and vision.</p>

        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border-b border-gray-800 pb-6 hover:border-orange-500 transition-colors"
            >
              <Link href={`/blog/${post.slug}`} className="hover:text-cyan-300 transition-colors">
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              </Link>
              <p className="text-gray-400 mb-3">{post.excerpt}</p>
              <time className="text-sm text-gray-500">{post.date}</time>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}