'use client'

import { useParams, usePathname, useRouter } from "next/navigation"
import Link from "next/link";
import { cn } from "@/app/libs/utils";


interface MainNavProps{
  role: string | undefined | null
  className:any
}

export function MainNav({
  className,
  role,
  ...props
}: MainNavProps ) {

  
  const router = useRouter()

  const routesAdmin = [
    {
      href: `https://www.unsaac.edu.pe/`,
      label: 'Unsaac Oficial',
    },
    {
      href: `http://ccomputo.unsaac.edu.pe/`,
      label: 'Centro de computo ',
    },
    {
      href: `/administrador/historial`,
      label: 'Historial',

    },
    {
      href: `/administrador/migrar`,
      label: 'Migrar base de datos',
    }
  ]

  const routesUser = [
    {
      href: `https://www.unsaac.edu.pe/`,
      label: 'Unsaac Oficial',
    },
    {
      href: `http://ccomputo.unsaac.edu.pe/`,
      label: 'Centro de computo ',
    },
  ]

  return (
    <nav
      className={cn('flex items-center space-x-4 lg:space-x-6', className)}
    >
      <img
        src="images/unsaacPlaceholder.jpg"
        alt="Logo unsaac"
        className="hidden sm:block rounded-2xl h-16 pt-3 hover:cursor-pointer hover:opacity-80 transition"
        onClick={() => router.push("/")}
      />

      
      {role==="admin"&& routesAdmin.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(`text-sm font-medium transition-colors hover:text-primary hover:opacity-80 text-center`)}
        >
          {route.label}
        </Link>
      ))}

      {role === "user" && routesUser.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(`text-sm font-medium transition-colors hover:text-primary hover:opacity-80 text-center`)}
        >
          {route.label}
        </Link>
      ))}

    </nav>
  )
}