  import getCurrentUser from "@/app/actions/getCurrentUser";
  import Heading from "../components/heading";
  import Informes from "./components/Informes";
  import SearchUser from "./components/SearchUser";
  import getAlumnosSemestre from "@/app/actions/getAlumnosSemestre";
  import getEgresadosSemestre from "@/app/actions/getEgresadosSemestre";
  import getGraduadosSemestre from "@/app/actions/getGraduadosSemestre";
  import getAlumnos from "@/app/actions/getAlumnos";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";




  const DashboardAdmin = async () => {

    const currentUser = await getCurrentUser();

    const alumnosSemestre = await getAlumnosSemestre();
    const egresadosSemestre = await getEgresadosSemestre()
    const graduadosSemestre = await getGraduadosSemestre()

    const alumnos = await getAlumnos()

    if (!currentUser){
      <ClientOnly>
        <EmptyState
          title="No autorizado"
          subtitle="Por favor, inicie sesion"
        />
      </ClientOnly>
    }

    return (
      <ClientOnly>
        <div className="px-6 py-11">

          <Heading
            title={`${currentUser?.typeRole}`}
            description="Acceso a buscar y consultar informacion de los constituyentes, y tambien informes"
          />
          <hr className="border-gray-400 mt-11" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
            <Informes
              alumnosSemestre={alumnosSemestre}
              egresadosSemestre={egresadosSemestre}
              graduadosSemestre={graduadosSemestre}
            />
            <SearchUser role={currentUser?.role} data={alumnos} />
          </div>
          


        </div>
      </ClientOnly>
    );
  }

  export default DashboardAdmin;