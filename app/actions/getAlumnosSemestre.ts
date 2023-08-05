import prisma from "@/app/libs/prismadb"

const getAlumnosSemestre = async ()=>{

  const semestre = "2023-I"
  
  // const alumnosSemestre = await prisma.semestre.findMany({
  //   where:{
  //     name: semestre,
  //   },
  //   include:{
  //     user:true
  //   }
  // })

  return null
}

export default getAlumnosSemestre