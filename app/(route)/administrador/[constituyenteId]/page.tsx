import prismadb  from "@/app/libs/prismadb"


const ConstituyentePage = async ({
  params
}: {
  params: { constituyenteId: string }
}) => {

  // const constituyente = await prismadb.users.findUnique({
  //   where: {
  //     id: params.constituyenteId
  //   }
  // });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        Usuario
      </div>
    </div>
  );
}

export default ConstituyentePage;