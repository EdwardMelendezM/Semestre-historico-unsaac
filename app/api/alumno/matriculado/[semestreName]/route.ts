import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";


export async function GET(
  request: Request,
  {
    params
  }:
    {
      params: { semestreName: string }
    }
) {

  try {
    const alumnos = await prisma.user.findMany();

    const matriculados = alumnos
      .filter((alumno) => alumno.matriculado === "1" && alumno.codigo !== null)
      .map((alumno) => [alumno.codigo!,alumno.name!]); 
      console.log(matriculados)
      const newSemestre = await prisma.semestre.update({
        where: { name: params.semestreName },
        data: {
          name: params.semestreName,
        },
      });
  
    return NextResponse.json(matriculados);
  } catch (error) {
    console.log('[BILLBOARDS_GET]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}   