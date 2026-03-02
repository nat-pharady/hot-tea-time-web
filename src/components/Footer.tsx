export default function Footer() {
  return (
    <footer className="bg-[#bc3215] text-white py-16 md:py-24 px-8 md:px-14">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        {/* Brand */}
        <div className="md:col-span-4">
          <h3 className="text-2xl font-light tracking-tight mb-4">Hot Tea Time Club</h3>
          <p className="text-sm font-light leading-relaxed opacity-50 max-w-xs">
            Premium fiction for sophisticated palates. Read boldly. Sip slowly. Spill everything.
          </p>
        </div>

        {/* Explore */}
        <div className="md:col-span-2 md:col-start-6">
          <h4 className="text-xs font-medium uppercase tracking-widest opacity-40 mb-6">Explore</h4>
          <ul className="text-sm font-light space-y-3 opacity-60">
            <li><a href="#stories" className="hover:opacity-100 transition-opacity">Browse Stories</a></li>
            <li><a href="#stories" className="hover:opacity-100 transition-opacity">New Releases</a></li>
            <li><a href="#marketplace" className="hover:opacity-100 transition-opacity">The Marketplace</a></li>
            <li><a href="#features" className="hover:opacity-100 transition-opacity">Join an Adventure</a></li>
          </ul>
        </div>

        {/* Create */}
        <div className="md:col-span-2">
          <h4 className="text-xs font-medium uppercase tracking-widest opacity-40 mb-6">Create</h4>
          <ul className="text-sm font-light space-y-3 opacity-60">
            <li><a href="#marketplace" className="hover:opacity-100 transition-opacity">Write a Story</a></li>
            <li><a href="#marketplace" className="hover:opacity-100 transition-opacity">Share with Community</a></li>
            <li><a href="#marketplace" className="hover:opacity-100 transition-opacity">List in Marketplace</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Brew Your Own</a></li>
          </ul>
        </div>

        {/* Company */}
        <div className="md:col-span-2">
          <h4 className="text-xs font-medium uppercase tracking-widest opacity-40 mb-6">Company</h4>
          <ul className="text-sm font-light space-y-3 opacity-60">
            <li><a href="#" className="hover:opacity-100 transition-opacity">About Us</a></li>
            <li><a href="#membership" className="hover:opacity-100 transition-opacity">Membership</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Press</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs font-light opacity-30">
          &copy; 2025 Hot Tea Time Club. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-xs font-light opacity-30">
          <a href="#" className="hover:opacity-60 transition-opacity">Privacy</a>
          <a href="#" className="hover:opacity-60 transition-opacity">Terms</a>
          <a href="#" className="hover:opacity-60 transition-opacity">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
