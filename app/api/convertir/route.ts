import prisma from "@/app/libs/prismadb";
import xlsx from 'xlsx';

interface UserExcelData {
  name: string;
  titulo: string;
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const archivo = formData.get('archivo');

    if (!archivo) {
      throw new Error('No se encontró el archivo en el FormData');
    }
    
    const workbook = xlsx.read(archivo);
    console.log(workbook)
    const hoja = workbook.Sheets['Hoja 1'];

    if (!hoja) {
      return { mensaje:'No se encontró la hoja "Hoja 1" en el archivo XLSX'};
    }

    const datosJson = xlsx.utils.sheet_to_json<UserExcelData>(hoja);

    if (!datosJson || datosJson.length === 0) {
      return { mensaje:'No se encontraron datos válidos en el archivo XLSX'};
    }

    for (const dato of datosJson) {
      if (!dato.name || !dato.titulo) {
        return { mensaje:'Los datos del archivo XLSX son inválidos'};
      }

      await prisma.user.create({
        data: {
          name: dato.name,
          titulos: dato.titulo,
        },
      });
    }

    return { mensaje: 'Datos guardados correctamente en la base de datos' };
  } catch (error) {
    console.error('Error al procesar el archivo XLSX:', error);
    return { mensaje:'Error al procesar el archivo XLSX'};
  } 
}
