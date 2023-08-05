import getCurrentUser from "@/app/actions/getCurrentUser";
import Heading from "../components/heading";
import Informes from "./components/Informes";
import SearchUser from "./components/SearchUser";
import getAlumnosSemestre from "@/app/actions/getAlumnosSemestre";



const DashboardAdmin = async () => {

  const currentUser = await getCurrentUser();
  const alumnosSemestre = await getAlumnosSemestre();

  console.log(alumnosSemestre)
  
  return (
    <div className="px-6 py-11">
      <Heading
      // Aqui tiene que ir el rol
        title={`${currentUser?.typeRole}`}
        description="Acceso a buscar y consultar informacion de los constituyentes, y tambien informes"
      />

      <Informes />

      <hr className="border-gray-300 mt-11 border-2" />
      <SearchUser role={currentUser?.role} />
      
    </div>
  );
}

export default DashboardAdmin;