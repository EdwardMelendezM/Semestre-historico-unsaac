import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";


export async function POST(
  request: Request,
  {
    params
  }:
    {
      params: { name: string }
    }
) {


  try {
    const { alumnosCodigo } = await request.json()

    const createSemestre = await prisma.semestre.create({
      data:{
        name:params.name,
        alumnosCodigo
      }
    })
    
    return NextResponse.json(createSemestre)

  } catch (error) {
    console.log('[BILLBOARDS_GET]', error);
    return new NextResponse('Internal Error', { status: 500 })
  }
}
export async function GET(
  request: Request,
  {
    params
  }:
    {
      params: { name: string }
    }
) {
  try {
    const { alumnosCodigo } = await request.json()
    const semestrealumnos = await prisma.semestre.findMany();
    const alumno = await prisma.user.findMany();
    for(let i=0;i<semestrealumnos.length-1;i++){
      if (semestrealumnos[i].alumnosCodigo 
    }


    
    return NextResponse.json(alumnos)

  } catch (error) {
    console.log('[BILLBOARDS_GET]', error);
    return new NextResponse('Internal Error', { status: 500 })
  }



}

