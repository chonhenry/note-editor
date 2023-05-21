"use client";

import { FcGoogle } from "react-icons/fc";
import { useSession, signIn, signOut } from "next-auth/react";

const LoginModal = () => {
  const { data: session, status } = useSession();

  function handleLogin() {
    // console.log("login");
    // console.log(session);
    // console.log(status);
    if (!session) signIn();
  }

  function handleLogout() {
    if (session) signOut();
  }

  return (
    <>
      {session ? (
        <button
          className="absolute p-2 border end-0 top-[50px] w-[200px] text-center rounded-lg dark:border-secondary-light bg-white dark:bg-background-dark"
          onClick={handleLogout}
        >
          <FcGoogle className="inline mr-3 text-xl" />
          log out
        </button>
      ) : (
        <button
          className="absolute p-2 border end-0 top-[50px] w-[200px] text-center rounded-lg dark:border-secondary-light bg-white dark:bg-background-dark"
          onClick={handleLogin}
        >
          <FcGoogle className="inline mr-3 text-xl" />
          Login with Google
        </button>
      )}
    </>
  );
};

export default LoginModal;
