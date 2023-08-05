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