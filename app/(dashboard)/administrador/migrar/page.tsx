import Heading from "@/app/components/Heading";
import prismadb  from "@/app/libs/prismadb"
import InputFile from "./components/InputFile";
import getCurrentUser from "@/app/actions/getCurrentUser";
import EmptyState from "@/app/components/EmptyState";
import InputFileDocente from "./components/InputFileDocente";


const ConstituyentePage = async ()=> {

  const currentUser = await getCurrentUser();
  if (currentUser?.role !== "admin") {
    return (
    <EmptyState
      title="No tienes accesso a migrar"
      subtitle="Solo administradores pueden usar esto"
    />)
  }
  
  return (
    <>
    
      <div className="flex-col mt-6">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <Heading
            title="Migrar base de datos"
          />
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2 items-center justify-center">
            <InputFile title="Migrar Alumnos" />
            <InputFile title="Migrar Alumnos por semestre" />
            <InputFile title="Migrar Matriculados" />
            <InputFile title="Migrar Integrantes de comite de criterio" />
            <InputFileDocente />

          </div>

        </div>
      </div>
    </>
    
  );
}

export default ConstituyentePage;