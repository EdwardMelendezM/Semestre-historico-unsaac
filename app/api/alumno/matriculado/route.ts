import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";


export async function GET(
  request: Request,
) {


  try {

    const alumno = await prisma.user.findMany()
    console.log(alumno[1])
    var l = []
    for (let i=0;i<=(alumno.length-1);i++){
     console.log(alumno[i])
     if (alumno[i].matriculado ==="1"){
       var m=l.push(alumno[i])
      }
    }
    return NextResponse.json(l)
  }catch (error) {
    console.log('[BILLBOARDS_GET]', error);
    return new NextResponse('Internal Error', { status: 500 })
  }
}