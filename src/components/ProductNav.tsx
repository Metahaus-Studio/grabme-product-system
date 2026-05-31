export function ProductNav() {
  return (
    <section className="sticky top-0 z-50 border-b border-white/10 bg-black/80 px-6 py-4 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <a href="/" className="hover:text-[#7AC943]">
          <div>
            <p className="text-sm font-black">GRABME Product System</p>
            <p className="text-xs text-white/40">
              Internal UX + MVP planning
            </p>
          </div>
        </a>

        <nav className="hidden gap-5 text-sm text-white/70 md:flex">
          <a href="/passenger" className="hover:text-white">
            Passenger
          </a>

          <a href="/driver" className="hover:text-white">
            Driver
          </a>

          <a href="/admin" className="hover:text-white">
            Admin
          </a>

          <a href="/flow-map" className="hover:text-white">
            Flow Map
          </a>

          <a href="/mvp-scope" className="hover:text-white">
            MVP Scope
          </a>

          <a href="/architecture" className="hover:text-white">
            Architecture
          </a>

          <a href="/app-showcase" className="hover:text-white">
           App Showcase
        </a>

        </nav>
      </div>
    </section>
  );
}