export default function Portfolio() {
  const featured = [
    { name: 'Swift 2026 Course', tech: 'Swift, SwiftUI, mdBook', url: 'https://durellwilson.github.io/swift-2026-course/', desc: 'Complete Swift & Apple Platforms guide with 25+ chapters', icon: '📱', live: true },
    { name: 'DevRel Hub', tech: 'Next.js, TypeScript, Tailwind', url: 'https://durellwilson.github.io/devrel-hub/', desc: 'Developer relations platform with AI assistant', icon: '🤖', live: true },
    { name: 'SwiftUI DevRel Kit', tech: 'SwiftUI, Swift Package', url: 'https://github.com/durellwilson/swiftui-devrel-kit', desc: 'Beautiful components for developer relations', icon: '🎨', live: false },
  ];

  const projects = [
    { name: 'SwiftData Pro Scaffold', tech: 'SwiftData, CloudKit', url: 'https://github.com/durellwilson/swiftdata-pro-scaffold', desc: 'Advanced SwiftData patterns with CloudKit sync', icon: '💾' },
    { name: 'CoreML + CreateML Kit', tech: 'CoreML, Vision, Python', url: 'https://github.com/durellwilson/coreml-createml-kit', desc: 'Machine learning toolkit for iOS', icon: '🧠' },
    { name: 'Swift TDD Framework', tech: 'XCTest, Swift', url: 'https://github.com/durellwilson/swift-tdd-framework', desc: 'Test-driven development utilities', icon: '🧪' },
    { name: 'App Intents Pro', tech: 'App Intents, Siri', url: 'https://github.com/durellwilson/appintents-pro', desc: 'Siri & Shortcuts integration framework', icon: '🎤' },
    { name: 'Swift Security Toolkit', tech: 'Security, Keychain', url: 'https://github.com/durellwilson/swift-security-toolkit', desc: 'Production security utilities', icon: '🔒' },
    { name: 'Apple Full-Stack Template', tech: 'iOS 18+, macOS 15+', url: 'https://github.com/durellwilson/apple-fullstack-template', desc: 'Complete app template with best practices', icon: '📦' },
    { name: 'Swift Learning Path', tech: 'Swift, Curriculum', url: 'https://github.com/durellwilson/swift-learning-path', desc: 'Complete curriculum with 10 projects', icon: '🎓' },
    { name: 'Apple Ecosystem Starter', tech: 'All Apple Frameworks', url: 'https://github.com/durellwilson/apple-ecosystem-starter', desc: 'Comprehensive Apple platform starter', icon: '🍎' },
    { name: 'AI Recipe Generator', tech: 'SwiftUI, AI', url: 'https://github.com/durellwilson/ai-recipe-generator', desc: 'Generate recipes from ingredients using AI', icon: '🍳' },
  ];

  const skills = [
    { category: 'iOS/macOS', items: ['Swift', 'SwiftUI', 'SwiftData', 'CoreML', 'Xcode', 'UIKit', 'Combine'], icon: '📱' },
    { category: 'Web', items: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind', 'HTML/CSS', 'JavaScript'], icon: '🌐' },
    { category: 'AI/ML', items: ['CoreML', 'CreateML', 'Python', 'TensorFlow', 'Vision', 'NLP', 'PyTorch'], icon: '🤖' },
    { category: 'Backend', items: ['MongoDB', 'Express', 'REST APIs', 'GraphQL', 'PostgreSQL', 'Firebase', 'Supabase'], icon: '⚙️' },
    { category: 'DevOps', items: ['Git', 'GitHub Actions', 'Docker', 'CI/CD', 'AWS', 'Vercel', 'Netlify'], icon: '🚀' },
    { category: 'Tools', items: ['VS Code', 'Xcode', 'Figma', 'Postman', 'Terminal', 'Linear', 'Notion'], icon: '🛠️' },
  ];

  const experience = [
    { role: 'Full-Stack Developer', company: 'Freelance', period: '2023 - Present', desc: 'Building iOS apps, web platforms, and AI-powered solutions for clients worldwide' },
    { role: 'iOS Developer', company: 'Detroit Swift Community', period: '2022 - Present', desc: 'Leading Swift education initiatives and creating open-source frameworks' },
    { role: 'AI/ML Engineer', company: 'Independent Projects', period: '2023 - Present', desc: 'Developing CoreML models and AI-powered applications' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      <nav className="border-b border-purple-500/20 bg-black/40 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Durell Wilson
          </h1>
          <div className="flex gap-6">
            <a href="https://github.com/durellwilson" target="_blank" className="text-purple-300 hover:text-purple-100 transition">GitHub</a>
            <a href="https://durellwilson.contra.com" target="_blank" className="text-purple-300 hover:text-purple-100 transition">Contra</a>
            <a href="https://durellwilson.github.io/devrel-hub/" target="_blank" className="text-purple-300 hover:text-purple-100 transition">DevRel Hub</a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <span className="text-purple-300 font-semibold text-sm tracking-wide">🚀 FULL-STACK DEVELOPER & AI ENGINEER</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent leading-tight">
            Building the Future
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Swift/SwiftUI • Python • AI/ML • MERN Stack • iOS Development • Full-Stack Engineering
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="https://github.com/durellwilson" target="_blank" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all">
              View GitHub
            </a>
            <a href="https://durellwilson.contra.com" target="_blank" className="border-2 border-purple-500/50 text-purple-300 px-8 py-4 rounded-full font-semibold hover:border-purple-400 hover:bg-purple-500/10 transition-all">
              Hire Me
            </a>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-white">🌟 Featured Projects</h3>
            <p className="text-gray-400 text-lg">Live production applications</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all border border-purple-500/20 hover:border-purple-500/50 group relative"
              >
                {project.live && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-500/30">
                    ● LIVE
                  </div>
                )}
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{project.icon}</div>
                <h4 className="text-2xl font-bold mb-3 text-white">{project.name}</h4>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.desc}</p>
                <div className="text-sm text-purple-300 bg-purple-500/10 px-4 py-2 rounded-lg border border-purple-500/20">
                  {project.tech}
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-white">📦 All Projects</h3>
            <p className="text-gray-400 text-lg">Open-source frameworks and tools</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl hover:shadow-purple-500/10 transition-all border border-gray-700 hover:border-purple-500/50 group"
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">{project.icon}</div>
                <h4 className="text-xl font-bold mb-2 text-white">{project.name}</h4>
                <p className="text-gray-400 text-sm mb-3 leading-relaxed">{project.desc}</p>
                <div className="text-xs text-purple-300 bg-purple-500/10 px-3 py-1 rounded-lg border border-purple-500/20 inline-block">
                  {project.tech}
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-white">💼 Experience</h3>
            <p className="text-gray-400 text-lg">Building impactful solutions</p>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {experience.map((exp) => (
              <div
                key={exp.role}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 shadow-lg border border-purple-500/20"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-2xl font-bold text-white">{exp.role}</h4>
                    <p className="text-purple-300 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 text-sm">{exp.period}</span>
                </div>
                <p className="text-gray-400 leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-white">🛠️ Tech Stack</h3>
            <p className="text-gray-400 text-lg">Full-stack expertise across multiple platforms</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.category}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 shadow-lg border border-purple-500/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">{skill.icon}</div>
                  <h4 className="text-xl font-bold text-white">{skill.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-white">📊 GitHub Stats</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 text-center border border-purple-500/20">
              <div className="text-5xl font-bold text-purple-400 mb-2">24+</div>
              <p className="text-gray-400">Repositories</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 text-center border border-purple-500/20">
              <div className="text-5xl font-bold text-pink-400 mb-2">3</div>
              <p className="text-gray-400">Live Projects</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 text-center border border-purple-500/20">
              <div className="text-5xl font-bold text-purple-400 mb-2">∞</div>
              <p className="text-gray-400">Lines of Code</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white text-center shadow-2xl">
          <h3 className="text-4xl font-bold mb-4">Let's Build Something Amazing</h3>
          <p className="text-xl mb-8 opacity-90">
            Available for freelance projects, consulting, and full-time opportunities
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="https://durellwilson.contra.com" target="_blank" className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg">
              Get in Touch
            </a>
            <a href="https://github.com/durellwilson" target="_blank" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all">
              View All Projects
            </a>
          </div>
        </div>
      </div>

      <footer className="border-t border-purple-500/20 bg-black/40 backdrop-blur-xl mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-gray-400">
          <p className="text-lg">© 2025 Durell Wilson. Built with Next.js & Tailwind CSS.</p>
          <p className="text-sm mt-2 text-gray-500">Swift • Python • AI/ML • MERN Stack • Full-Stack Development</p>
        </div>
      </footer>
    </main>
  );
}
