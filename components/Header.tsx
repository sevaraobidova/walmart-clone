"use client";
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  LayoutGrid,
  Grid2X2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FormEvent } from "react";

export default function Header() {
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.input.value;
    router.push(`/search?q=${input}`);
  };
  return (
    <header className="flex bg-walmart px-10 py-7 space-x-5 items-center flex-col md:flex-row">
      <Link href="/" className="mb-5 md:mb-0">
        <Image
          src="http://links.papareact.com/yur"
          alt="logo"
          width={150}
          height={150}
        />
      </Link>
      <form
        className="flex rounded-full bg-white w-full items-center flex-1"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="input"
          placeholder="Search everything"
          className="flex-1 px-4 rounded-l-full outline-none placeholder:text-sm text-black"
        />
        <button type="submit">
          <Search className="rounded-full h-10 p-2 w-10 bg-yellow-400 cursor-pointer" />
        </button>
      </form>
      <div className="flex space-x-5 p-5 mt-5 md:mt-0">
        <Link
          href="/"
          className="hidden  lg:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <Grid2X2 size={20} />
          <p>Departments</p>
        </Link>
        <Link
          href="/"
          className="hidden  lg:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <LayoutGrid size={20} />
          <p>Services</p>
        </Link>
        <Link
          href="/"
          className="hidden  lg:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <Heart size={20} />
          <p className="text-xs font-extralight ">Reorder</p>
          <p>My Items</p>
        </Link>
        <Link
          href="/"
          className="hidden  lg:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <User size={20} />
          <p className="text-xs font-extralight ">Sign In</p>
          <p>Account</p>
        </Link>
        <Link
          href="/basket"
          className="hidden  lg:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <ShoppingCart size={20} />
          <p className="text-xs font-extralight ">No Item</p>
          <p>$0.00</p>
        </Link>
      </div>
    </header>
  );
}
