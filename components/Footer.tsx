import Link from 'next/link'
// import { Mail, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">CryptoCoin</h3>
            <p className="mb-4">
              Empowering the future of finance through secure, fast, and decentralized cryptocurrency solutions.
            </p>
            <p>&copy; {new Date().getFullYear()} CryptoCoin. All rights reserved.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link href="#features" className="hover:text-yellow-400 transition-colors">Features</Link></li>
              <li><Link href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              {/* <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                <a href="mailto:info@cryptocoin.com" className="hover:text-yellow-400 transition-colors">info@cryptocoin.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                <a href="tel:+1234567890" className="hover:text-yellow-400 transition-colors">+1 (234) 567-890</a>
              </li> */}
            </ul>
            <div className="mt-4">
              <h5 className="text-lg font-semibold mb-2">Follow Us</h5>
              <div className="flex space-x-4">
                {/* Add social media icons/links here */}
                <a href="#" className="hover:text-yellow-400 transition-colors">Twitter</a>
                <a href="#" className="hover:text-yellow-400 transition-colors">Facebook</a>
                <a href="#" className="hover:text-yellow-400 transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

