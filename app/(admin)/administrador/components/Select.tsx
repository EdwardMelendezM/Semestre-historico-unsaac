'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@/app/components/Button';

interface Option {
  id: number;
  name: string;
}

interface State {
  options: Option[];
  selectedOption: string;
}

interface SelectProps{
  type: "ALUMNOS" | "ALUMNOS_EGRESADOS" | "ALUMNOS_GRADUADO"
}

const Select: React.FC<SelectProps> = ({type}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState<State>({
    options: [
      {
        id:1,
        name:"2023-I"
      },
      {
        id: 2,
        name: "2022-II"
      },
      {
        id: 3,
        name: "2022-I"
      },
  ],
    selectedOption: '',
  });

  // API DE DESCARGAR
  const downloadFile= async ()=>{
    setIsLoading(true)
    if (type ==="ALUMNOS"){
      const file = await axios.get('/api/semestreALumno')
        .then((response) => {

        })
        .catch((error) => {
          console.error('Error, no existe este archivo:', error);
        })
        .finally(() => {
          setIsLoading(false)
        })
    } else if (type === "ALUMNOS_EGRESADOS"){
      const file = await axios.get('/api/semestreEgresado')
        .then((response) => {

        })
        .catch((error) => {
          console.error('Error, no existe este archivo:', error);
        })
        .finally(() => {
          setIsLoading(false)
        })
    } else if (type === "ALUMNOS_GRADUADO") {
      const file = await axios.get('/api/semestreGraduado')
        .then((response) => {

        })
        .catch((error) => {
          console.error('Error, no existe este archivo:', error);
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
   
  }

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setState((prev) => ({ ...prev, selectedOption: event.target.value }));
  };

  return (
    <div className=' mt-2 font-sans text-sm flex flex-col gap-y-2'>
      
      <select
        id="selectOption"
        value={state.selectedOption}
        onChange={handleSelectChange}
        className="block w-full mt-1 rounded-md border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border-2 "
      >
        <option value="">Seleccionar semestre</option>
        {state.options.map((option) => (
          <option key={option.id} value={option.id.toString()}>
            {option.name}
          </option>
        ))}
      </select>
      <Button
        disabled={isLoading}
        onClick={()=>{}}
      >
        Generar
      </Button>
    </div>
  );
};

export default Select;
