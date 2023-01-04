'use client'

import Link from "next/link";
import { UserAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { signIn } = UserAuth();
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      try {
        await signIn(email, password);
        router.push("/");
      } catch (e) {
        setError(e.message);
        console.log(e.message);
      }
    };
    return (
        <div>
             <div className="bg-white h-screen w-screen">
      <div className="w-full flex items-center justify-between py-4 px-2 lg:px-40 absolute z-[100]">
        <Link href="/">
          <img
            className="cursor-pointer mt-1"
            src="https://static.crunchyroll.com/cr-spa-registration/assets/img/logo/cr_logo.png"
            alt="img"
          />
        </Link>
      </div>
      <div>
        <h1 className="flex justify-center pt-40 text-3xl mb-6">Log In</h1>
        <form onSubmit={handleSubmit} className="flex items-center flex-col">
          <div className="relative z-0 w-[90%] sm:w-[50%] lg:w-[25%] mb-6 group">
            <input
              type="email"
              name="email"
              className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer mb-2"
              placeholder=" "
              required
              autoomplete="on"
              maxLength="255"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email or Username
            </label>
          </div>
          <div className="relative z-0 w-[90%] sm:w-[50%] lg:w-[25%] mb-8 group">
            <input
              type="password"
              name="password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
              placeholder=" "
              required
              autoComplete="on"
              maxLength="255"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              htmlFor="password"
              className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <button className="px-0 py-2 lg:w-[27%] w-[80%] bg-orange-500 sm:text-md text:xs cursor-pointer hover:bg-orange-300">
            LOG IN
          </button>
        </form>
        <p className="text-gray-500 text-center text-sm mt-7">
          FORGOT PASSWORD?
        </p>
        <p className="text-lg text-center mt-4">
          No Account?
          <Link href="/signup">
            <span className="text-orange-500 cursor-pointer"> Create One</span>
          </Link>
        </p>
      </div>
    </div>
    </div>
    )
  }