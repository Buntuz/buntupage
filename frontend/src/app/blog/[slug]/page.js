// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
const posts = {
  'introduction-to-computer-vision': {
    title: 'Introduction to Computer Vision in 2025',
    date: 'April 1, 2025',
    content: `
      <p>Computer Vision has evolved from academic curiosity to real-world necessity. From self-driving cars to medical imaging, it’s transforming industries.</p>
      <br/>
      <p>At its core, computer vision enables machines to "see" and interpret visual data — photos, videos, live streams — using deep learning models like CNNs and Transformers.</p>
      <br/>
      <h3 class="text-2xl font-semibold text-cyan-300 mt-6 mb-3">Key Applications</h3>
      <ul class="list-disc list-inside text-gray-300 space-y-2">
        <li>Facial recognition for security</li>
        <li>Defect detection in manufacturing</li>
        <li>Autonomous drones and robots</li>
        <li>Augmented Reality (AR) experiences</li>
      </ul>
      <br/>
      <p>With tools like YOLO, Segment Anything, and Stable Diffusion, building vision systems is more accessible than ever.</p>
    `,
  },
  'ai-for-startups': {
    title: 'How Startups Can Leverage AI Without a PhD',
    date: 'March 25, 2025',
    content: `
      <p>You don’t need a team of PhDs to use AI. Many startups succeed by focusing on <strong>applied AI</strong> — solving one problem well.</p>
      <br/>
      <p>Start with off-the-shelf models (Hugging Face, OpenAI, Google Vision), fine-tune them, and integrate via APIs.</p>
      <br/>
      <p>Focus on data quality, user feedback, and iteration — not just model accuracy.</p>
    `,
  },
  'ethical-ai': {
    title: 'Ethics in AI: Why It Matters Now',
    date: 'March 18, 2025',
    content: `
      <p>As AI becomes more powerful, ethical concerns grow: bias in hiring algorithms, deepfakes, surveillance.</p>
      <br/>
      <p>Responsible AI means transparency, fairness, and accountability. Always ask: Who does this help? Who could it harm?</p>
    `,
  },
};

export default function BlogPost({ params }) {
  const post = posts[params.slug];

  if (!post) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="text-cyan-400 text-sm hover:underline">&larr; Back to Blog</Link>
        <h1 className="text-4xl font-bold mt-4 mb-3">{post.title}</h1>
        <p className="text-gray-500 mb-8">{post.date}</p>
        <div
          className="prose prose-invert prose-cyan max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
}