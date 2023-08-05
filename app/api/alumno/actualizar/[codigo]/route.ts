import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

export async function POST(
  request: Request,
  {
    params
  }:
    {
      params: { codigo: string }
    }
) {
  console.log("body")
  try {
    const { codigo } = params;
    const body = await request.json();
    const {
      name,
      image,
      role,
      titulos,
      grados,
      lugar ,
      area,
      cargo,
      fechaGrado,
      fechaCapacitacion,
      lugarCapacitacion,
      denominacioncapacitacion,
    } = body;


    const updatedUser = await prisma.user.update({
      where: {
        codigo: codigo, 
      },
      data: body, 
    });
    

    return new Response(JSON.stringify(updatedUser), {
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.log('[BILLBOARDS_GET]', error);
    return new Response('Internal Error', { status: 500 });
  }
}