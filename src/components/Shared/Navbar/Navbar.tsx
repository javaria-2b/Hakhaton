import Link from "next/link";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { ShoppingCartIcon } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between bg-white mt-8">
      
      <div className="hidden xl:flex space-x-4 ml-4 gap-8">
      <Link href="/" passHref>
          <Image src="/logo.webp" alt="Logo" width={150} height={200} />
        </Link>
      </div>
      <div className=" space-x-4 ml-4 gap-8 hidden xl:block">
        <Link className="text-black" href="/female">
          Female
        </Link>
        <Link className="text-black" href="/male">
          Male
        </Link>
        <Link className="text-black" href="/kids">
          Kids
        </Link>
        <Link className="text-black" href="/">
          All Products
        </Link>
      </div>

      <div className="hidden xl:block w-full md:w-[300px] lg:w-[40%] relative">
        <input
          className="border-gray-200 border p-2 px-4 rounded-lg w-full"
          type="text"
          placeholder="Enter any product name..."
        />
        <BsSearch
          className="absolute right-0 top-0 mr-3 mt-3 text-gray-400"
          size={20}
        />
      </div>

      <div className="hidden xl:flex relative bg-gray-200 rounded-full px-3 py-3">
        <ShoppingCartIcon size={20} />
        <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
          0
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
