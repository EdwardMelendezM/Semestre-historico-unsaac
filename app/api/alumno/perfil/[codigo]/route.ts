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

    const alumno = await prisma.user.findMany({
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
export async function update(
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

    // Obtener los datos para actualizar desde el cuerpo de la solicitud (JSON)
    const body = await request.json();
    const {
      name,
      email,
      area
    } = body;
    console.log(body)


    const updatedUser = await prisma.user.update({
      where: {
        codigo: codigo, // Aquí pasamos el código del usuario que queremos actualizar
      },
      data: body, // Utilizamos los datos obtenidos del JSON para actualizar el registro
    });
    

    return new Response(JSON.stringify(updatedUser), {
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.log('[BILLBOARDS_GET]', error);
    return new Response('Internal Error', { status: 500 });
  }
}
