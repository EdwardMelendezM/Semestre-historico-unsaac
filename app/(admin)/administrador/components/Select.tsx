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

const Select: React.FC = () => {
  const [state, setState] = useState<State>({
    options: [],
    selectedOption: '',
  });

  useEffect(() => {
    // axios.get<Option[]>('/api/semestre')
    //   .then((response) => {
    //     setState((prev) => ({ ...prev, options: response.data }));
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching data:', error);
    //   });
  }, []);

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
        onClick={()=>{}}
      >
        Generar
      </Button>
    </div>
  );
};

export default Select;
