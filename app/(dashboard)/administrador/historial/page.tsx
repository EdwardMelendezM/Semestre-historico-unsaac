import Heading from "@/app/components/Heading";
import SearchHistorial from "./components/SearchHistorial";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { redirect } from "next/navigation";


const ConstituyentePage = async ()=> {
  
  const currentUser = await getCurrentUser();

  if(!currentUser){
    redirect("/login")
  }
  
  return (
    <>
      {/* <hr className=" mt-6 border-2 border-gray-500 opacity-50" /> */}
      <div className="flex-col mt-6">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <Heading
            title="Historial"
          />
          <SearchHistorial />
        </div>
      </div>
    </>
    
  );
}

export default ConstituyentePage;