export default function AnimatrixStudio() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-zinc-800 backdrop-blur-xl bg-black/60 sticky top-0 z-50">
        <h1 className="text-2xl font-bold tracking-wide">
          Animatrix Studio
        </h1>

        <div className="flex gap-4">
          <button className="px-5 py-2 rounded-2xl bg-zinc-800 hover:bg-zinc-700 transition-all">
            Features
          </button>

          <button className="px-5 py-2 rounded-2xl bg-purple-600 hover:bg-purple-500 transition-all">
            Start Creating
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.2),transparent_60%)]" />

        <h2 className="relative text-6xl md:text-7xl font-black max-w-5xl leading-tight">
          Free Browser Based
          <span className="block text-purple-400">
            3D Animation Studio
          </span>
        </h2>

        <p className="relative mt-8 max-w-2xl text-zinc-400 text-lg leading-relaxed">
          Upload any 3D character, apply animations instantly, preview live in browser and create professional cinematic animations without expensive software.
        </p>

        <div className="relative mt-10 flex flex-wrap gap-5 justify-center">
          <button className="px-8 py-4 rounded-2xl bg-purple-600 hover:scale-105 transition-all text-lg font-semibold shadow-2xl shadow-purple-500/20">
            Upload Character
          </button>

          <button className="px-8 py-4 rounded-2xl border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 transition-all text-lg font-semibold">
            Explore Demo
          </button>
        </div>
      </section>

      {/* Fake 3D Viewer */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto rounded-[40px] overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl shadow-purple-900/20">
          <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800">
            <div>
              <h3 className="text-xl font-bold">Live 3D Preview</h3>
              <p className="text-zinc-400 text-sm">
                Upload GLB / GLTF / FBX characters
              </p>
            </div>

            <div className="flex gap-3">
              <button className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700">
                Walk
              </button>

              <button className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700">
                Run
              </button>

              <button className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700">
                Dance
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 min-h-[600px]">
            {/* Sidebar */}
            <div className="border-r border-zinc-800 p-6 bg-zinc-900/60">
              <h4 className="text-lg font-bold mb-6">Studio Tools</h4>

              <div className="space-y-4">
                <button className="w-full px-4 py-3 rounded-2xl bg-purple-600 hover:bg-purple-500 transition-all text-left">
                  Upload Character
                </button>

                <button className="w-full px-4 py-3 rounded-2xl bg-zinc-800 hover:bg-zinc-700 transition-all text-left">
                  Add Animation
                </button>

                <button className="w-full px-4 py-3 rounded-2xl bg-zinc-800 hover:bg-zinc-700 transition-all text-left">
                  Lighting Presets
                </button>

                <button className="w-full px-4 py-3 rounded-2xl bg-zinc-800 hover:bg-zinc-700 transition-all text-left">
                  Camera Controls
                </button>

                <button className="w-full px-4 py-3 rounded-2xl bg-zinc-800 hover:bg-zinc-700 transition-all text-left">
                  Export Video
                </button>
              </div>

              <div className="mt-10 rounded-3xl border border-zinc-700 bg-black/40 p-5">
                <h5 className="font-semibold mb-3">Supported Files</h5>

                <div className="flex flex-wrap gap-2 text-sm">
                  <span className="px-3 py-1 rounded-full bg-zinc-800">GLB</span>
                  <span className="px-3 py-1 rounded-full bg-zinc-800">GLTF</span>
                  <span className="px-3 py-1 rounded-full bg-zinc-800">FBX</span>
                  <span className="px-3 py-1 rounded-full bg-zinc-800">OBJ</span>
                </div>
              </div>
            </div>

            {/* Viewer Area */}
            <div className="lg:col-span-3 relative flex items-center justify-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-black overflow-hidden">
              <div className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl" />

              <div className="relative flex flex-col items-center">
                <div className="w-72 h-72 rounded-full border border-purple-500/30 bg-gradient-to-b from-zinc-800 to-zinc-950 flex items-center justify-center shadow-2xl shadow-purple-500/20 animate-pulse">
                  <div className="text-center">
                    <div className="text-8xl">🤖</div>
                    <p className="mt-4 text-zinc-300">
                      3D Character Viewer
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex gap-4 flex-wrap justify-center">
                  <button className="px-5 py-3 rounded-2xl bg-purple-600 hover:scale-105 transition-all">
                    ▶ Play Animation
                  </button>

                  <button className="px-5 py-3 rounded-2xl bg-zinc-800 hover:bg-zinc-700 transition-all">
                    ⏸ Pause
                  </button>

                  <button className="px-5 py-3 rounded-2xl bg-zinc-800 hover:bg-zinc-700 transition-all">
                    🔁 Loop
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-black">
              Powerful Animation Features
            </h3>

            <p className="mt-5 text-zinc-400 max-w-2xl mx-auto text-lg">
              Everything needed for cinematic browser-based 3D animation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              {
                title: '3D Character Upload',
                desc: 'Import GLB, GLTF, FBX and OBJ characters instantly.',
                icon: '📦',
              },
              {
                title: 'Animation System',
                desc: 'Apply walking, running, fighting and dancing animations.',
                icon: '🎬',
              },
              {
                title: 'Real-Time Rendering',
                desc: 'Live browser rendering with cinematic lighting.',
                icon: '💡',
              },
              {
                title: 'Video Export',
                desc: 'Export animations as MP4 and GIF formats.',
                icon: '📹',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group rounded-[32px] border border-zinc-800 bg-black/50 p-8 hover:border-purple-500/40 transition-all hover:-translate-y-2"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-all">
                  {item.icon}
                </div>

                <h4 className="text-2xl font-bold mb-4">
                  {item.title}
                </h4>

                <p className="text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center rounded-[40px] border border-purple-500/20 bg-gradient-to-b from-purple-900/20 to-black p-16 shadow-2xl shadow-purple-500/10">
          <h3 className="text-5xl font-black">
            Completely Free
          </h3>

          <p className="mt-6 text-zinc-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Use Animatrix Studio directly from GitHub and deploy on Vercel or Netlify without paying anything.
          </p>

          <div className="mt-10 text-7xl font-black text-purple-400">
            $0
          </div>

          <button className="mt-10 px-10 py-5 rounded-2xl bg-purple-600 hover:bg-purple-500 transition-all text-xl font-bold shadow-2xl shadow-purple-500/20">
            Start Building
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-10 px-6 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold">
              Animatrix Studio
            </h4>

            <p className="text-zinc-500 mt-2">
              Browser based 3D animation platform.
            </p>
          </div>

          <div className="flex gap-4 text-zinc-400">
            <button className="hover:text-white transition-all">
              GitHub
            </button>

            <button className="hover:text-white transition-all">
              Documentation
            </button>

            <button className="hover:text-white transition-all">
              Contact
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}
