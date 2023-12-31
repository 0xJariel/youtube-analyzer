"use client";
import Link from "next/link";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { status } = useSession();
  return (
    <nav className="flex p-4 justify-between items-center shadow-md">
      <Link href={"/"} className="font-bold text-lg text-blue-700">
        Logo
      </Link>
      {status === "authenticated" ? (
        <button
          onClick={() => {
            signOut();
          }}
          className="bg-slate-900 text-white px-6 py-2 rounded-md"
        >
          Sign Out
        </button>
      ) : (
        <button
          onClick={() => {
            signIn("google");
          }}
          className="bg-slate-900 text-white px-6 py-2 rounded-md"
        >
          Sign In
        </button>
      )}
    </nav>
  );
};

export default Navbar;
