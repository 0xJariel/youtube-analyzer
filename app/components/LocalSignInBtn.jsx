"use client";

import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

const LocalSignInBtn = () => {
  return (
    <button
      onClick={() => {
        signIn("google");
      }}
      className="btn"
    >
      <span className="">Sign in</span>
    </button>
  );
};

export default LocalSignInBtn;
