import { BsSearch } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { CiCirclePlus } from "react-icons/ci";
import { MdOutlineExplore } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";

import Link from "next/link";


const Header = () => {
    return (
          <header className="w-full h-16 flex items-center justify-around bg-white shadow-md">
            <Link href="/">
            <div className="text-xl font-semibold tracking-wider">Instagram</div>
            </Link>
            <div className="flex bg-gray-100 focus:border-gray-400 rounded-lg px-2 items-center">
              <label htmlFor="search">
                <BsSearch className="text-sm text-gray-400" />
              </label>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search"
                className="bg-gray-100  px-2 py-1 placeholder:text-sm hover:bg-transparent focus:bg-transparent outline-none w-full rounded-sm  transition"
              />
            </div>
            <div className="flex text-3xl space-x-8 items-center justify-center p-2">
              <AiOutlineHome className="hover:bg-gray-200 rounded p-1 cursor-pointer" size={35}/>
              <RiMessengerLine className="hover:bg-gray-200 rounded p-1 cursor-pointer" size={35}/>
              <CiCirclePlus className="hover:bg-gray-200 rounded p-1 cursor-pointer" size={35}/>
              <MdOutlineExplore className="hover:bg-gray-200 rounded p-1 cursor-pointer" size={35}/>
              <CiHeart className="hover:bg-gray-200 rounded p-1 cursor-pointer" size={35}/>
              <FaRegUserCircle className="hover:bg-gray-200 rounded p-1 cursor-pointer" size={30}/>
              <button className="bg-[#0095F6] text-sm py-1 h-4/5 px-4 rounded font-semibold text-white transform transition">Logout</button>
            </div>
          </header>
      );
}
export default Header;