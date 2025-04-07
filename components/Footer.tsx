import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-12 w-full px-16 mt-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className='bg-black flex items-center justify-start h-full'>
            <Link href={'/'}>
                <Image src="/logo-bw.png" alt="logo" width={250} height={250} />
            </Link>                         
        </div>


            <div>
                <h3 className="text-2xl text-[#BE830E] font-semibold mb-4">ANUISA</h3>
                <ul className="space-y-2 text-xl">
                <li><Link href="/" className="hover:text-gray-300 transition">Talents</Link></li>
                <li><Link href="/events" className="hover:text-gray-300 transition">Highlights</Link></li>
                <li><Link href="/aboutus" className="hover:text-gray-300 transition">About Us</Link></li>                
                </ul>
            </div>
          
          
          
            <div>
                <h3 className="text-2xl text-[#BE830E] font-semibold mb-4">Connect</h3>
                <ul className="flex space-x-6 text-xl">
                  <li>
                    <Link href="https://www.facebook.com/ppiaanu/" className="hover:text-gray-300 transition">
                      <Image src="/icons8-facebook-240.svg" alt="Facebook logo" width={50} height={50} />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com/ppiaanu/" className="hover:text-gray-300 transition">
                      <Image src="/icons8-instagram.svg" alt="Instagram logo" width={50} height={50} />
                    </Link>
                  </li>
                  <li className="flex justify-center items-center">
                    <Link href="https://www.linkedin.com/company/ppia-anu-anuisa/" className="hover:text-gray-300 transition">
                      <Image src="/icons8-linkedin.svg" alt="LinkedIn logo" width={45} height={45} />
                    </Link>
                  </li>
                  <li className="flex justify-center items-center pl-2">
                    <a
                      href="mailto:anu@ppi-australia.org"
                      className="flex items-center justify-center hover:text-gray-300 transition"
                    >
                      <Image
                        src="/email.svg"
                        alt="Email icon"
                        width={50}
                        height={50}
                      />
                    </a>
                  </li>
                </ul>
            </div>
        </div>

        <div className="border-t border-[#BE830E] mt-8 pt-8 flex flex-col justify-between items-start">
            <div className="text-2xl text-[#BE830E] font-medium pb-4">
                Acknowledgement of Country
            </div>
            <div className="text-xl text-white">
                The Australian National University Indonesian Students&apos; Association acknowledges, celebrates and pays our respects to the Ngunnawal and Ngambri people of the Canberra region and to all First Nations Australians on whose traditional lands we meet and work, and whose cultures are among the oldest continuing cultures in human history.
            </div>
          
        </div>
        
        <div className="border-t border-[#BE830E] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
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