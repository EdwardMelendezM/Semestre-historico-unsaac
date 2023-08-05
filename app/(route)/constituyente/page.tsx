import prisma from "@/app/libs/prismadb"
import getCurrentUser from "@/app/actions/getCurrentUser";
import Heading from "../components/heading";
import UserConstituyente from "./components/UserConstituyente";


const Constituyentes = async () => {

  const currentUser = await getCurrentUser();
  
  console.log(currentUser)

  return (
    <div className="px-6 py-11">
      <Heading
        // Aqui tiene que ir el rol
        title={`Constituyente`}
        description="Acceso a cambiar tus datos personales"
      />
      <hr className="border-gray-300 mt-11 border-2" />

      {
        currentUser && <UserConstituyente currentUser={currentUser} />
      }

    </div>
  );
}

export default Constituyentes;