import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

export async function POST(
  request: Request
) {

  try {
    
    const body = await request.json()
    const { codigo,name,role,matriculado,estado}= body;

    const alumno = await prisma.user.create({
      data:{
        codigo,name,role,matriculado
      }
    })

    return NextResponse.json(alumno)


  } catch (error) {
    console.log('[BILLBOARDS_GET]', error);
    return new NextResponse('Internal Error', { status: 500 })
  }
}