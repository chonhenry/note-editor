"use client";

import { FcGoogle } from "react-icons/fc";

const LoginModal = () => {
  function handleLogin() {
    console.log("login");
  }

  return (
    <button
      className="absolute p-2 border end-0 top-[50px] w-[200px] text-center rounded-lg dark:border-secondary-light bg-white dark:bg-background-dark"
      onClick={handleLogin}
    >
      <FcGoogle className="inline mr-3 text-xl" />
      Login with Google
    </button>
  );
};

export default LoginModal;
