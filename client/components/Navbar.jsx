import React, { useEffect } from "react";
import HeroImage from "/public/images/hero-tc-logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const { user, logout } = useAuth();
  useEffect(() => {
    console.log('USER', user)
  }, [user])
  const handleLogOut = async() => {
    await logout();
    router.push("/login");
  }
  return (
    <>
      <nav className="fixed top-0 z-10 flex h-[92px] w-full items-center justify-between bg-blue-primary px-8 shadow-md shadow-blue-light/20">
        <div role="navigation" aria-label=""></div>
        <div className="mr-auto">
          <Link href="/">
            <a className="flex items-center">
              <Image
                src={HeroImage}
                objectFit="contain"
                width={169}
                height={69}
                alt="Tide Cleaners logo"
              />
            </a>
          </Link>
        </div>
        <div className="ml-auto hidden space-x-7 text-base md:block">
          <Link href="/">
            <a className="nav-link">Find a Truck</a>
          </Link>
          <Link href="/">
            <a className="nav-link">View Plans</a>
          </Link>
          {user ? (
            <Link
              onClick={handleLogOut}
              href="/login"
            >
              <a className="nav-link">Logout</a>
            </Link>
          ) : (
            <>
              <Link href="/register/who-are-you">
                <a className="nav-link rounded-[4px] bg-orange-primary px-4 py-4 hover:bg-orange-dark hover:text-white hover:decoration-transparent">
                  Register
                </a>
              </Link>
              <Link href="/login">
                <a className="nav-link">Login</a>
              </Link>
            </>
          )}
        </div>
      </nav>
      {/* Spacer for the restfixed position nav */}
      <div className="h-[92px]"></div>
    </>
  );
};

export default Navbar;
