import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function GET(
  request: Request,
) {
  try {
    const body = await request.json();
    const {
      message,
      image,
      conversationId
    } = body;
    return NextResponse.json(body)
  }catch (error) {
    console.log(error, 'ERROR_MESSAGES')
    return new NextResponse('Error', { status: 500 });
  }
}