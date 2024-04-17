"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";

const LoginPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="mb-2">Login</h1>
      <hr />

      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          className="py-2 pl-2 rounded mb-4 focus:outline-none"
          id="email"
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Email"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="password">Password</label>
        <input
          className="py-2 pl-2 rounded mb-4 focus:outline-none"
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Password"
        />
      </div>

      <button
        onClick={onLogin}
        className="py-2 px-4 border border-gray-300 rounded mb-4 hover:border-sky-500 hover:text-sky-500"
      >
        Login
      </button>
      <span>
        Don&apos;t have an account?
        <Link href="/signup" className="text-sky-500 hover:text-sky-700">
          {" "}
          Sign Up here
        </Link>
      </span>
    </div>
  );
};

export default LoginPage;
