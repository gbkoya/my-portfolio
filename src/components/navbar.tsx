export default function Navbar() {
  return (
    <nav className="bg-foreground dark:bg-background border-b border-black/[.08] dark:border-white/[.145]">
      <div className="container mx-auto px-4 py-2 flex justify-between">
        <a href="/" className="text-2xl font-bold">
          <span className="text-white">A</span>
          <span className="text-[#5383e4]">G</span>
        </a>
        <ul className="flex items-center space-x-4">
          <li>
            <a href="/about" className="text-base text-background dark:text-foreground hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="/projects" className="text-base text-background dark:text-foreground hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="/contact" className="text-base text-background dark:text-foreground hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
