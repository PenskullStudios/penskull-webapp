"use client";
import Button from "./Button";
import { useAuth } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const { userId } = useAuth();
  const pathname = usePathname();
  const hideNavbar =
    pathname.startsWith("/sign-in") || pathname.startsWith("/sign-up");

  return (
    <>
      {!hideNavbar && (
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link href={"/"} className="btn btn-ghost text-xl">
              Penskull
            </Link>
          </div>
          <div className="flex-none gap-2">
            {userId !== null ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <Button info="Sign In" link="/sign-in" />
            )}
          </div>
        </div>
      )}
    </>
  );
}
