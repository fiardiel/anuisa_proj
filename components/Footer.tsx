import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-12 w-full px-16 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className='bg-black flex items-center justify-start'>
            <div className='bg-white flex items-center justify-center p-8'>
                <Link href={'/'}>
                    <Image src="/logo.png" alt="logo" width={125} height={125} />
                </Link>
            </div>                
        </div>


            <div>
                <h3 className="text-xl font-medium mb-4">ANUISA</h3>
                <ul className="space-y-2">
                <li><Link href="/" className="hover:text-gray-300 transition">Home</Link></li>
                <li><Link href="/aboutus" className="hover:text-gray-300 transition">About Us</Link></li>
                <li><Link href="/events" className="hover:text-gray-300 transition">Highlights</Link></li>
                </ul>
            </div>
          
          
          
            <div>
                <h3 className="text-xl font-medium mb-4">Socials</h3>
                <ul className="space-y-2">
                    <li><Link href="https://www.facebook.com/ppiaanu/" className="hover:text-gray-300 transition">Facebook</Link></li>
                    <li><Link href="https://www.instagram.com/ppiaanu/" className="hover:text-gray-300 transition">Instagram</Link></li>
                    <li><Link href="https://www.linkedin.com/company/ppia-anu-anuisa/" className="hover:text-gray-300 transition">LinkedIn</Link></li>              
                </ul>
            </div>
          
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col justify-between items-start">
            <div className="text-xl text-white font-medium pb-4">
                Acknowledgement of Country
            </div>
            <div className="text-l text-white">
                The Australian National University acknowledges, celebrates and pays our respects to the Ngunnawal and Ngambri people of the Canberra region and to all First Nations Australians on whose traditional lands we meet and work, and whose cultures are among the oldest continuing cultures in human history.
            </div>
          
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400">
            © {currentYear} ANUISA. All rights reserved.
          </div>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* Add any additional links or icons here */}
          </div>
        </div>
    </footer>
  );
};

export default Footer;