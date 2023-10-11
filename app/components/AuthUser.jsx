"use client";

import GoogleSignInBtn from "./GoogleSignInBtn";
import { useSession } from "next-auth/react";
import Image from "next/image";

const UserInfo = () => {
  const { status, data: session } = useSession();

  if (status === "authenticated") {
    return (
      <div>
        {/* look for image stored in databse, if not found display generic */}
        <Image
          src={session?.user?.image}
          alt="user image"
          width={40}
          height={40}
        />
        <div>
          Name: <span>{session?.user?.name}</span>
          <span>{JSON.stringify(session.user.image)}</span>
        </div>
        <div>
          Email: <span>{session?.user?.email}</span>
        </div>
      </div>
    );
  }
};

export default UserInfo;
