"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";

const SignupPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="mb-2">Signup</h1>
      <hr />

      <div className="flex flex-col">
        <label htmlFor="username">Username</label>
        <input
          className="py-2 pl-2 rounded mb-4 focus:outline-none"
          id="username"
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="Username"
        />
      </div>

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
        <label htmlFor="assword">Password</label>
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
        onClick={onSignup}
        className="py-2 px-4 border border-gray-300 rounded mb-4 hover:border-sky-500 hover:text-sky-500"
      >
        Sign Up
      </button>
      <span>
        Already have an account?
        <Link href="/login" className="text-sky-500 hover:text-sky-700">
          {" "}
          Login here
        </Link>
      </span>
    </div>
  );
};

export default SignupPage;
