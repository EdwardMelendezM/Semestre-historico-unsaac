import prisma from "@/app/libs/prismadb";
import getSession from "./getSession";

const getCurrentUser = async () => {
  try {
    //Obtenemos la session
    const session = await getSession();

    //Verificamos si existe el usuario de session
    if (!session?.user?.email) {
      console.log("ERROR Session de usuario")
      console.log(session)
      return null;
    }
    
    console.log("Session de usuario")
    console.log(session)
    //Buscamos el actual usuario
    const currentUser = await prisma.user.findFirst({
      where: {
        codigo: session.user.email as string
      }
    });

    if (!currentUser) {
      return null;
    }

    return currentUser;
  } catch (error: any) {
    return null;
  }
};

export default getCurrentUser;