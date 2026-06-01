'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
ArrowUp,
Heart,
Mail,
MapPin,
Phone,
} from 'lucide-react'

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const quickLinks = [
{ label: 'Home', path: '/' },
{ label: 'About Us', path: '/about' },
{ label: 'Our Impact', path: '/impact' },
{ label: 'News & Stories', path: '/news' },
{ label: 'Get Involved', path: '/get-involved' },
{ label: 'Contact Us', path: '/contact' },
{ label: 'Donate', path: '/donate' },
]

const programmes = [
'Feeding Programmes',
'Education Support',
'Youth Skills Training',
'Community Partnerships',
'Medical Outreach',
'Prison Outreach',
'Ramadan Outreach',
'School Outreach',
]

const socialLinks = [
{ icon: FaFacebook, label: 'Facebook', href: '#' },
{ icon: FaTwitter, label: 'Twitter', href: '#' },
{ icon: FaInstagram, label: 'Instagram', href: '#' },
{ icon: FaLinkedin, label: 'LinkedIn', href: '#' },
]

export default function Footer() {
const scrollToTop = () => {
window.scrollTo({ top: 0, behavior: 'smooth' })
}

return ( <footer className="bg-ytm-dark dark:bg-black text-white">
{/* CTA Banner */} <div className="bg-gradient-to-r from-ytm-blue via-ytm-green to-ytm-teal py-16"> <div className="section-padding text-center">
<motion.div
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
> <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
Be Part of the Change </h2> <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
Every contribution, big or small, helps us create lasting impact in Nigerian communities.
Join us in building a brighter tomorrow. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link
             href="/donate"
             className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-ytm-blue rounded-full font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-xl"
           > <Heart className="w-5 h-5" />
Donate Now </Link> <Link
             href="/get-involved"
             className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-ytm-blue transition-all duration-300"
           >
Get Involved </Link> </div>
</motion.div> </div> </div>

```
  {/* Main Footer */}
  <div className="section-padding py-16">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      
      {/* Brand */}
      <div>
        <Link href="/" className="inline-block mb-6">
          <img
            src="/images/YTM_MAIN_LOGO_FULL_COLOR.png"
            alt="Your Tomorrow Foundation"
            className="h-16 w-auto brightness-0 invert"
          />
        </Link>

        <p className="text-white/70 text-sm leading-relaxed mb-6">
          Unlocking human potential through education and nourishment while building
          sustainable communities across Nigeria.
        </p>

        <div className="space-y-2 mb-6">
          <div className="text-xs uppercase tracking-wider text-ytm-green font-semibold">
            Registered Non-Profit Organisation
          </div>

          <div className="text-sm text-white/60">
            Established 2024 • Nigeria
          </div>
        </div>

        <div className="flex gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-ytm-green hover:text-ytm-dark hover:scale-110 transition-all duration-300"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Links */}
      <div>
        <h3 className="text-lg font-semibold mb-6 text-ytm-green">Quick Links</h3>
        <ul className="space-y-3">
          {quickLinks.map((link) => (
            <li key={link.path}>
              <Link href={link.path} className="text-white/70 hover:text-ytm-green text-sm">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Programmes */}
      <div>
        <h3 className="text-lg font-semibold mb-6 text-ytm-green">Our Programmes</h3>
        <ul className="space-y-3">
          {programmes.map((prog) => (
            <li key={prog}>
              <Link href="/impact" className="text-white/70 hover:text-ytm-green text-sm">
                {prog}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-lg font-semibold mb-6 text-ytm-green">Contact Information</h3>

        <div className="space-y-4 text-sm text-white/70">
          <div className="flex gap-3">
            <MapPin className="w-5 h-5 text-ytm-green" />
            <span>Abuja & Lagos, Nigeria</span>
          </div>

          <div className="flex gap-3">
            <Mail className="w-5 h-5 text-ytm-green" />
            <span>info@yourtomorrowfoundation.org</span>
          </div>

          <div className="flex gap-3">
            <Phone className="w-5 h-5 text-ytm-green" />
            <span>+234 905 910 5800</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom */}
  <div className="border-t border-white/10 py-6">
    <div className="section-padding flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
      <p>© {new Date().getFullYear()} Your Tomorrow Foundation. All Rights Reserved.</p>

      <button
        onClick={scrollToTop}
        className="w-10 h-10 rounded-full bg-ytm-blue flex items-center justify-center hover:bg-ytm-green transition"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  </div>
</footer>


)
}
