import React from "react";

const Header = () => {
  return (
    <div className="w-full py-8 flex justify-around items-center border-b border-b-slate-400 h-[60px]">
      <div className="w-32">
        <img src="logo.png" sizes="full" />
      </div>

      <div className="flex gap-10 items-center">
        <a className="" href="/">
          Home
        </a>
        <a className="" href="/">
          Articles
        </a>
        <a className="" href="/login">
          Sign in
        </a>
        <a
          className="font-bold bg-black text-white px-4 py-2 rounded-[32px]"
          href="/login"
        >
          Get started
        </a>
      </div>
    </div>
  );
};

export default Header;
