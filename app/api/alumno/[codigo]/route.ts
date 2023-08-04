import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";


export async function GET(
  request: Request,
  {
    params
  }:
    {
      params: { codigo: string }
    }
) {


  try {

    const alumno = await prisma.user.findFirst({
      where: {
        codigo:params.codigo
      }
    })
    
    return NextResponse.json(alumno)

  } catch (error) {
    console.log('[BILLBOARDS_GET]', error);
    return new NextResponse('Internal Error', { status: 500 })
  }
}