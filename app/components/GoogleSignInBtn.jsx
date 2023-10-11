"use client";

import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

const GoogleSignInBtn = () => {
  return (
    <button
      onClick={() => {
        signIn("google");
      }}
      className="flex btn gap-8"
    >
      <Image src="/google-logo.png" alt="google logo" height={30} width={30} />
      <span className="= text-black">Sign in with Google</span>
    </button>
  );
};

export default GoogleSignInBtn;
