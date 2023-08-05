'use client'

import { signOut, useSession } from "next-auth/react";
import { MainNav } from "./main-nav";
import Button from "@/app/components/Button";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Navbar = () => {

 

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <Button
            secondary
            onClick={() => 
            signOut()}>
            Cerrar sesion
          </Button>
        </div>
      </div>
    </div>
  )
}
 
export default Navbar;