import React from "react";
import GoogleSignInBtn from "./GoogleSignInBtn";
import SpotifySignInBtn from "./SpotifySignInBtn";
import LocalSignInBtn from "./LocalSignInBtn";

const SignInForm = () => {
  return (
    <div className="grid mx-auto max-w-sm bg-slate-600 rounded-md ">
      <div className="grid p-6 gap-2">
        <div className="font-bold text-xl center">Sign in to your account</div>

        <div>
          <label
            for="example3"
            class="mb-1 block text-sm font-medium text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*']"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="you@email.com"
            className="input input-bordered input-md w-full "
          />

          <p class="mt-1 text-sm text-red-500">This is a error message.</p>
        </div>

        <div>
          <div>
            <label
              for="example3"
              class="mb-1 block text-sm font-medium text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*']"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••••"
              className="input input-bordered input-md w-full "
            />
            <p class="mt-1 text-sm text-red-500">This is a error message.</p>
          </div>
        </div>

        <div className="flex justify-between">
          <label htmlFor="" className="flex gap-2">
            <input type="checkbox" name="" id="" />
            <div> Remember Me</div>
          </label>
          <div>Forgot Password</div>
        </div>

        <LocalSignInBtn />

        <div className="grid grid-cols-10">
          <div className="divider col-span-4"></div>
          <div className="flex items-center col-span-2 mx-auto  ">Or</div>
          <div className="divider col-span-4"></div>
        </div>

        <div className="grid gap-3">
          <GoogleSignInBtn />
          <SpotifySignInBtn />
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
