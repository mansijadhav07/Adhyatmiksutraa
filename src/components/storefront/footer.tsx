import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import LogoMark from "@/app/assets/logo.png";

export function Footer() {
  return (
    <footer>
      <div className="bg-[#f5f3ff] py-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1 flex flex-col items-center">
              <div className="relative h-36 w-48 mb-3">
                <Image src="/assets/footer_logo.png" alt="Adhyatmik Sutraa logo" fill sizes="192px" className="object-contain object-center" />
              </div>
              <div className="flex items-center justify-center gap-2">
                <a href="https://www.instagram.com/adhyatmiksutraa/" target="_blank" rel="noopener noreferrer" className="h-8 w-8 rounded-full bg-[#7c3aed]/10 hover:bg-[#7c3aed] text-[#7c3aed] hover:text-white flex items-center justify-center transition-all duration-300">
                  <Instagram className="h-3.5 w-3.5" />
                </a>
                <a href="https://www.facebook.com/adhyatmiksutra" target="_blank" rel="noopener noreferrer" className="h-8 w-8 rounded-full bg-[#7c3aed]/10 hover:bg-[#7c3aed] text-[#7c3aed] hover:text-white flex items-center justify-center transition-all duration-300">
                  <Facebook className="h-3.5 w-3.5" />
                </a>
                <a href="https://www.youtube.com/@adhyatmiksutraabysonali" target="_blank" rel="noopener noreferrer" className="h-8 w-8 rounded-full bg-[#7c3aed]/10 hover:bg-[#7c3aed] text-[#7c3aed] hover:text-white flex items-center justify-center transition-all duration-300">
                  <Youtube className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm uppercase tracking-[0.2em] text-[#4c1d95] font-semibold mb-3" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { label: "Shop", href: "/shop" },
                  { label: "Blogs", href: "/blogs"},
                  { label: "About", href: "/about" },
                  { label: "Courses", href: "/courses" },
                  { label: "Consultation", href: "/booking" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-xs text-[#7c3aed]/90 hover:text-[#7c3aed] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help */}
            <div>
              <h4 className="text-sm uppercase tracking-[0.2em] text-[#4c1d95] font-semibold mb-3" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>Help</h4>
              <ul className="space-y-2">
                {[
                  { label: "Contact Us", href: "/contact" },
                  { label: "Privacy Policy", href: "/privacy-policy" },
                  { label: "Return & Refund", href: "/refund-policy" },
                  { label: "Terms of Service", href: "/terms" },
                  { label: "Disclaimer", href: "/disclaimer" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-xs text-[#7c3aed]/90 hover:text-[#7c3aed] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm uppercase tracking-[0.2em] text-[#4c1d95] font-semibold mb-3" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-[#f59e0b] flex-shrink-0" />
                  <span className="text-xs text-[#7c3aed]/90">adhyatmiksutraaonline@gmail.com</span>
                </li>
                <li className="flex flex-col gap-1 justify-start">
                  <div className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-[#f59e0b] flex-shrink-0" />
                    <span className="text-xs text-[#7c3aed]/90">+91 78712 89207</span>
                  </div>
                  <div className="flex items-center gap-2 pl-5.5" style={{ paddingLeft: "22px" }}>
                    <span className="text-xs text-[#7c3aed]/90">+91 86089 20776</span>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-[#f59e0b] flex-shrink-0" />
                  <span className="text-xs text-[#7c3aed]/90">India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#2d0a6b] py-3">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-1 mb-2">
            <p className="text-[11px] text-white/70 tracking-wider">&copy; {new Date().getFullYear()} Adhyatmik Sutraa. All rights reserved.</p>
            <p className="text-[11px] text-white/50 tracking-wider">Spiritual Healing & Awakening 🇮🇳</p>
          </div>
          <div className="h-px bg-white/20 w-full" />
        </div>
      </div>
    </footer>
  );
}
