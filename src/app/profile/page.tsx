"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const router = useRouter();
  const [data, setData] = useState("nothing");
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data._id);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p>Profile page</p>
      <h2>
        {data === "nothing" ? (
          "No Details"
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </h2>
      <hr />
      <button
        onClick={logout}
        className="py-2 px-4 border border-gray-300 rounded mb-4 hover:border-sky-500 hover:text-sky-500"
      >
        Logout
      </button>
      <button
        onClick={getUserDetails}
        className="py-2 px-4 border border-gray-300 rounded mb-4 hover:border-sky-500 hover:text-sky-500"
      >
        Get User Details
      </button>
    </div>
  );
};

export default ProfilePage;
