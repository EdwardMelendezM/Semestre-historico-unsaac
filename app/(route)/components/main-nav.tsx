'use client'

import { useParams, usePathname, useRouter } from "next/navigation"
import Link from "next/link";
import { cn } from "@/app/libs/utils";




export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {

  const pathname = usePathname();
  const params = useParams();
  const router = useRouter()

  const routes = [
    {
      href: `https://www.unsaac.edu.pe/`,
      label: 'Unsaac Oficial',
    },
    {
      href: `http://ccomputo.unsaac.edu.pe/`,
      label: 'Centro de computo ',
      active: pathname === `/${params.storeId}/billboards`
    },
    {
      href: `/administrador/historial`,
      label: 'Historial',
      active: pathname === `/${params.storeId}/billboards`
    }
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
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn('text-sm font-medium transition-colors hover:text-primary hover:opacity-80')}
        >
          {route.label}
        </Link>
      ))}

    </nav>
  )
}