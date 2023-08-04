import getCurrentUser from "@/app/actions/getCurrentUser";
import Heading from "../components/heading";
import Informes from "./components/Informes";
import SearchUser from "./components/SearchUser";


const DashboardAdmin = () => {

  const currentUser = getCurrentUser();
  console.log(currentUser)

  return (
    <div className="px-6 py-11">
      <Heading
      // Aqui tiene que ir el rol
        title={`Administrador`}
        description="Acceso a buscar y consultar informacion de los constituyentes"
      />

      <Informes />

      <hr className="border-gray-300 mt-11 border-2" />
      <SearchUser />
      
    </div>
  );
}

export default DashboardAdmin;