export default function Blog() {
  const posts = [
    {
      title: "Building iOS Apps with AI in 2026",
      date: "2025-11-20",
      excerpt: "How I integrate CoreML and AI agents into production iOS apps",
      slug: "ios-ai-2026",
      tags: ["Swift", "AI", "CoreML"]
    },
    {
      title: "From Callbacks to Async/Await",
      date: "2025-11-15",
      excerpt: "Modern Swift concurrency patterns that changed how I write code",
      slug: "swift-concurrency",
      tags: ["Swift", "Async", "Concurrency"]
    },
    {
      title: "SwiftUI Performance Optimization",
      date: "2025-11-10",
      excerpt: "Techniques for building smooth, 60fps SwiftUI interfaces",
      slug: "swiftui-performance",
      tags: ["SwiftUI", "Performance", "iOS"]
    },
    {
      title: "Type-Safe Networking in Swift",
      date: "2025-11-05",
      excerpt: "Building a robust networking layer with modern Swift features",
      slug: "type-safe-networking",
      tags: ["Swift", "Networking", "Architecture"]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      <nav className="border-b border-purple-500/20 bg-black/40 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/portfolio" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Durell Wilson
          </a>
          <div className="flex gap-6">
            <a href="/portfolio" className="text-purple-300 hover:text-purple-100 transition">Home</a>
            <a href="/portfolio/blog" className="text-purple-100 font-semibold">Blog</a>
            <a href="https://github.com/durellwilson" target="_blank" className="text-purple-300 hover:text-purple-100 transition">GitHub</a>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <span className="text-purple-300 font-semibold text-sm tracking-wide">📝 TECHNICAL BLOG</span>
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent leading-tight">
            Thoughts on Swift & iOS
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Deep dives into Swift, SwiftUI, and modern iOS development
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl border border-purple-500/20 hover:border-purple-500/50 transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <time className="text-sm text-purple-400">{post.date}</time>
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <h2 className="text-3xl font-bold mb-4 text-white group-hover:text-purple-300 transition">
                {post.title}
              </h2>
              
              <p className="text-gray-400 leading-relaxed mb-6">
                {post.excerpt}
              </p>
              
              <a
                href={`/portfolio/blog/${post.slug}`}
                className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold transition"
              >
                Read more →
              </a>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500">More posts coming soon...</p>
        </div>
      </div>

      <footer className="border-t border-purple-500/20 bg-black/40 backdrop-blur-xl mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-gray-400">
          <p className="text-lg">© 2025 Durell Wilson. Built with Next.js & Tailwind CSS.</p>
        </div>
      </footer>
    </main>
  );
}
