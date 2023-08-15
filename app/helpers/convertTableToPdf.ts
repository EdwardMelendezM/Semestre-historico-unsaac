import { jsPDF } from "jspdf"
import 'jspdf-autotable'

/**
 * @param { string } tableid El id de la tabla
 * @param { string } format 
 * @param { string } filename El nombre del archivo con el que se va a descargar
 */
const convertTableToPdf = (tableReference:any, filename = 'document', format:any) => {
  const tableFormats = {
    1: 'striped',
    2: 'grid',
    3: 'plain'
  }

  // la tabla
  const table = tableReference.current

  const doc = new jsPDF({ orientation: "landscape" }) as any

  // automáticamente se genera la tabla
  
  doc.autoTable({
    html: table,
    theme: 'grid'
  })

  // se descarga el documento
  doc.save(filename + '.pdf')
}

export default convertTableToPdf