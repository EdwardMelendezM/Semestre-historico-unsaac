import Heading from "@/app/components/Heading";
import prismadb  from "@/app/libs/prismadb"
import InputFile from "./components/InputFile";


const ConstituyentePage = async ()=> {
  
  return (
    <>
      {/* <hr className=" mt-6 border-2 border-gray-500 opacity-50" /> */}
      <div className="flex-col mt-6">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <Heading
            title="Migrar base de datos"
          />
          <InputFile />
        </div>
      </div>
    </>
    
  );
}

export default ConstituyentePage;