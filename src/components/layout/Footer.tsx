import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Contact
            </h3>
            <p>Hotoro, Kano State, Nigeria</p>
            <p>Phone: +234-800-000-0000</p>
            <p>Email: info@expertisehub.org</p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/marketing/about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/marketing/programs"
                  className="hover:text-primary transition-colors"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/marketing/impact"
                  className="hover:text-primary transition-colors"
                >
                  Impact
                </Link>
              </li>
              <li>
                <Link
                  href="/marketing/get-involved"
                  className="hover:text-primary transition-colors"
                >
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & copyright */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              {/* placeholder icons, could use lucide-react or actual svg later */}
              <a
                href="#"
                className="text-gray-500 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                FB
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                TW
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                IG
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Expertise Hub Empowerment
              Foundation. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
