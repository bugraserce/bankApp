// components/NavMenu.tsx
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Image from 'next/image';
import bankLOGO from '../../public/assests/Icons/logo.png'; // Importing the bank logo
import { Button } from './button';
import { Mail } from "lucide-react"


export default function NavMenu() {
  return (
    <NavigationMenu.Root className="relative z-10">
      <NavigationMenu.List className="flex items-center gap-6 bg-gradient-to-r from-green-900 to-green-800 p-4 shadow-md text-white">

        {/* Logo on the left */}
        <Link href="/">
          <Image src={bankLOGO} alt="Bank Logo" width={50} height={50} className="cursor-pointer" />
        </Link>

        {/* Menu Items */}
        <div className="flex-1 flex items-center gap-6">
          {/* Menu Item 1 */}
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded hover:bg-blue-700 transition-all">
              Products
              <ChevronDownIcon className="w-4 h-4" />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="absolute top-full mt-2 w-48 bg-white text-gray-700 shadow-md rounded-lg p-4">
              <ul className="space-y-2">
                <li>
                  <Link href="/products/1" className="text-sm hover:text-blue-600 hover:underline">
                    Savings Account
                  </Link>
                </li>
                <li>
                  <Link href="/products/2" className="text-sm hover:text-blue-600 hover:underline">
                    Credit Card
                  </Link>
                </li>
                <li>
                  <Link href="/products/3" className="text-sm hover:text-blue-600 hover:underline">
                    Loans
                  </Link>
                </li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          {/* Menu Item 2 */}
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded hover:bg-blue-700 transition-all">
              Company
              <ChevronDownIcon className="w-4 h-4" />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="absolute top-full mt-2 w-48 text-gray-700 shadow-md rounded-lg p-4 bg-orange-200">
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm hover:text-blue-600 hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm hover:text-blue-600 hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-sm hover:text-blue-600 hover:underline">
                    Careers
                  </Link>
                </li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        </div>

        {/* Button on the right */}
        <Link href="/register">
          <button className="ml-auto px-6 py-2 bg-green-500 text-black font-semibold text-xl rounded-full hover:bg-green-700 transition-colors">
            Be a Customer
          </button>
        </Link>

        <Link href="/login">
          <Button>
            <Mail className="mr-2 h-4 w-4" /> Login with Email
          </Button>
        </Link>

      </NavigationMenu.List>

      {/* Viewport for the dropdown */}
      <NavigationMenu.Viewport className="absolute top-full left-0 w-full mt-2 bg-white shadow-md rounded-lg" />
    </NavigationMenu.Root>
  );
}
