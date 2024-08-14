"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "@/lib/constants";
import { ChevronRight } from "lucide-react";

const LeftSideBar = () => {
  const pathname = usePathname();

  return (
    <div className="h-screen left-0 top-0 sticky pt- pb-5  flex flex-col gap-16 bg-white shadow-sm border max-lg:hidden">
      <div className="pt-10 pl-5">

      <Image src="/logo.png" alt="logo" width={200} height={100}  />
      </div>
      {/* <div className="pl-4 bg-blue-500 py-2">


      <h1 className="text-2xl font-extrabold text-white">ElectroElite Admin</h1>
      </div> */}

      <div className="flex flex-col justify-between  h-full ">


      <div className="flex flex-col gap-2">
        {navLinks.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            className={`flex gap-4 text-lg pl-5 pr-28  py-2 rounded-lg  hover:bg-blue-500 hover:text-white ${
              pathname === link.url ? "bg-blue-500 text-white " : "text-grey-200"
            }`}
            >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {link.icon} {link.label}
              </div>
             
       
            </div>
          </Link>
        ))}
      </div>

      <div className="flex gap-4 text-lg  items-center pl-5 select-none">
        <UserButton />
        <p >Edit Profile</p>
      </div>
            </div>
    </div>
  );
};

export default LeftSideBar;
