'use client'
import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import ItemUser from "./ItemUser";

const UserConstituyente = () => {

  const session = useSession() || null
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {
      errors
    } } = useForm<FieldValues>({
      defaultValues: {
        titulo:"",
        grado:"",
        lugar:"",
        area:"",
        cargo:"",
        fechaGrado:"",
        fechaCapacitacion:"",
        lugarCapacitacion:"",
        denominacioncapacitacion:"",
      }
    })


  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (!data.email || !data.password) return
    setIsLoading(true)
    try {
      setIsLoading(true)
      await axios.patch(`/api/users`, data)
      router.refresh()
      router.push(`/api/users`)
      toast.success("Actualizado correctamente")
    } catch (error) {
      toast.error('Something went wrong')
    } finally {
      setIsLoading(false)
    }

  }

  return ( 
    <div className="mt-11 px-8 py-6 grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col gap-y-4 items-center justify-center">
        <div className="relative">
          <Image
            src="/images/placeholder.jpg"
            alt="placeholbeder"
            width={"244"}
            height={"244"}
            className="rounded-full"
          />
          <Image
            src="/images/edit.svg"
            alt="placeholbeder"
            width={"48"}
            height={"48"}
            className="rounded-full bg-slate-400 p-2 absolute bottom-0 right-0 hover:cursor-pointer hover:bg-slate-300 transition"
          />
        </div>
        
        <Button
          disabled={isLoading}
          onClick={() => router.push("/constituyente/11231232")}
        >
          Editar
        </Button>
      </div>  
      <div className="flex items-start justify-start gap-y-4 rounded-xl bg-gray-300 flex-col px-11 py-6">
        <div className="mt-8 text-gray-700 font-bold text-xl ">
          Datos personales
        </div>
        <ItemUser label="Nombre" text="Juan" />
        <ItemUser label="Codigo" text="171717" />
        <ItemUser label="Rol" text="Alumno" />
        <ItemUser label="Titulo" text="Ing software" />
        <ItemUser label="Lugar" text="Conferencia XII" />
        <ItemUser label="Area" text="Inteligencia Artificial" />
        <ItemUser label="Cargo" text="Informador" />
        <ItemUser label="Fecha de grado" text="8 de Marzo 2023" />
        <ItemUser label="Lugar Capacitacion" text="Unsaac" />
        <ItemUser label="Denominacion de capacitacion" text="Info IA" />
        <ItemUser label="Semestre" text="2022-II" />

      </div>
    </div>
   );
}
 
export default UserConstituyente;