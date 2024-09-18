"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname from next/navigation
import bankLOGO from '../../public/assests/Icons/logo.png'
import { sidebarLinks } from '@/constants';

const SideBar = ({ user }: SiderbarProps) => {
  const pathname = usePathname(); // Get the current pathname

  return (
    <section className="sticky left-0 top-0 flex h-screen w-[80px] sm:w-[250px] flex-col justify-start bg-gradient-to-b from-green-800 to-green-700 text-white shadow-lg p-6">
      
      {/* Logo Section */}
      <nav className="flex flex-col items-center mb-6">
        <Link href="/" className="cursor-pointer flex items-center gap-2">
          <Image
            src={bankLOGO}
            width={40}
            height={40}
            alt="Bank Logo"
            className="rounded-full"
          />
        </Link>
        <Link href='/' className="mt-4 text-lg font-semibold hidden sm:block">BankApp</Link>
      
      </nav>

      {/* Navigation Links */}
      <div className="flex flex-col gap-6">
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route; // Check if the current route is active

          return (
            <Link
              className={`flex items-center gap-3 px-4 py-2 text-white rounded-md transition-all duration-200
              ${isActive ? 'bg-gray-900 font-bold shadow-lg' : 'hover:bg-blue-700 hover:shadow-md'}`}
              href={item.route}
              key={item.label}
            >
              <div className="flex items-center gap-3">
                {/* Icon */}
                <Image src={item.imgURL} width={20} height={20} alt={item.label} />

                {/* Label (hidden on small screens) */}
                <span className="text-lg hidden sm:block">{item.label}</span>
              </div>
            </Link>
          );
        })}
        user
      </div>
      footer
    </section>
  );
};

export default SideBar;
