import { redirect } from "next/navigation"
import getCurrentUser from "../actions/getCurrentUser"

export default async function SetupLayout({
  children
}:{
  children:React.ReactNode
}){
  const currentUser = await getCurrentUser()

  if(!currentUser){
    redirect("/login")
  }

  if(currentUser && currentUser.role==="admin"){
    redirect("/administrador")
  }

  if (currentUser && currentUser.role === "user") {
    redirect("/constituyente")
  }


  return (
    <>
    {children}
    </>
  )

}