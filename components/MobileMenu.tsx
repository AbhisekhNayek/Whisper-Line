import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-gradient-to-br from-black/70 to-green-900/60 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Menu content */}
      <div className="fixed right-0 top-0 h-full w-64 bg-gradient-to-br from-green-400 to-green-600 p-6 shadow-xl">
        <div className="flex flex-col space-y-6">
          {/* Close Button */}
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="p-2 text-gray-300 hover:text-white transition-colors"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-4">
            <Link
              href="/submit-report"
              className="text-sm font-medium text-white transition-transform duration-300 hover:scale-105 hover:bg-white/20 rounded-lg px-3 py-2"
              onClick={onClose}
            >
              Submit Report
            </Link>
            <Link
              href="/track-report"
              className="text-sm font-medium text-white transition-transform duration-300 hover:scale-105 hover:bg-white/20 rounded-lg px-3 py-2"
              onClick={onClose}
            >
              Track Report
            </Link>
            <Link
              href="/how-it-works"
              className="text-sm font-medium text-white transition-transform duration-300 hover:scale-105 hover:bg-white/20 rounded-lg px-3 py-2"
              onClick={onClose}
            >
              How It Works
            </Link>
            <Link
              href="/resources"
              className="text-sm font-medium text-white transition-transform duration-300 hover:scale-105 hover:bg-white/20 rounded-lg px-3 py-2"
              onClick={onClose}
            >
              Resources
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-white transition-transform duration-300 hover:scale-105 hover:bg-white/20 rounded-lg px-3 py-2"
              onClick={onClose}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
