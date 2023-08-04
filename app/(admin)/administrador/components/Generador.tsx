
import Select from "./Select";

interface GeneradorProsp{
  label:string
  type:"  "
}

const Generador: React.FC<GeneradorProsp> = ({
  label
}) => {
  return ( 
    <>
      <div>
        {label}
      </div>
      <Select />
    </>
   );
}
 
export default Generador;