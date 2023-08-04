
import Select from "./Select";

interface GeneradorProsp{
  label:string
  type: "ALUMNOS" | "ALUMNOS_EGRESADOS" | "ALUMNOS_GRADUADO"
}

const Generador: React.FC<GeneradorProsp> = ({
  label,
  type
}) => {
  return ( 
    <>
      <div>
        {label}
      </div>
      <Select type={type}/>
    </>
   );
}
 
export default Generador;