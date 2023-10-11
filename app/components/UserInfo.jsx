"use client";

import SignInBtn from "./SignInBtn";
import { useSession } from "next-auth/react";

const UserInfo = () => {
  const { status, data: session } = useSession();

  if (status === "authenticated") {
    return <div>{JSON.stringify(session)}</div>;
  } else {
    return <SignInBtn />;
  }
};

export default UserInfo;
