import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";
const Navbar = () => {
  const {cart}= useSelector(store=>store.reducer);
  return (
    <div>
      <div className="flex items-center justify-between px-8 py-2 ">
        <div className="flex items-center gap-5">
          <RxHamburgerMenu className="text-2xl text-gray-600" />
          <AiOutlineSearch className="text-2xl text-gray-600" />
        </div>
        <div>
         <Link to={'/'}>
         <img
          className=" aspect-video object-contain w-[7rem]"
            src="https://drinkjimmys.com/cdn/shop/files/Logo-3_1.png?v=1662467080&width=165"
            alt=""
          />
         </Link>
        </div>
       <Link to="/cart">
       <div className="flex items-center gap-5">
          <svg
            className="w-5 text-gray-600 font-extralight "
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            fill="none"
            viewBox="0 0 18 19"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 4.5a3 3 0 116 0 3 3 0 01-6 0zm3-4a4 4 0 100 8 4 4 0 000-8zm5.58 12.15c1.12.82 1.83 2.24 1.91 4.85H1.51c.08-2.6.79-4.03 1.9-4.85C4.66 11.75 6.5 11.5 9 11.5s4.35.26 5.58 1.15zM9 10.5c-2.5 0-4.65.24-6.17 1.35C1.27 12.98.5 14.93.5 18v.5h17V18c0-3.07-.77-5.02-2.33-6.15-1.52-1.1-3.67-1.35-6.17-1.35z"
              fill="currentColor"
            ></path>
          </svg>
         <div className="relative">
         <svg className="w-12" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
  <path d="m15.75 11.8h-3.16l-.77 11.6a5 5 0 0 0 4.99 5.34h7.38a5 5 0 0 0 4.99-5.33l-.78-11.61zm0 1h-2.22l-.71 10.67a4 4 0 0 0 3.99 4.27h7.38a4 4 0 0 0 4-4.27l-.72-10.67h-2.22v.63a4.75 4.75 0 1 1 -9.5 0zm8.5 0h-7.5v.63a3.75 3.75 0 1 0 7.5 0z" fill="currentColor" fill-rule="evenodd"></path>
</svg>
{cart.length>0&&<span className="absolute bottom-2 right-2 w-4 h-4 rounded-full text-white flex items-center justify-center text-xs bg-[#08255F]">{cart.length}</span>}
         </div>
            </div></Link>
      </div>
    </div>
  );
};

export default Navbar;
