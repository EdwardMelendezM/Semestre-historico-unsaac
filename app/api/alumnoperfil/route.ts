import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

export async function GET(
  request: Request,
) {
  try {
    const body = await request.json();
    const {
      codigo, 
    } = body;

    const alumno = await prisma.user.findFirst(
      
      {
        where:{
          codigo
        }
      }
    )

    return NextResponse.json(alumno)
  } catch (error) {
    console.log(error, 'ERROR_MESSAGES')
    return new NextResponse('Error', { status: 400 });
  }
}