"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";

function UserInfo() {
  const { user } = useUser();

  return (
    <>
      <SignedOut>
        <SignInButton className="bg-blue-500 hover:opacity-90 rounded-lg text-white font-semibold px-5 py-3" />
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </>
  );
}

export default UserInfo;
