'use client'
import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import { User } from "@prisma/client";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { format } from 'date-fns'



interface UpdateUserProps{
  currentUser:User | undefined | null
}

const UpdateUser: React.FC<UpdateUserProps> = ({ currentUser }) => {

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
        titulos: currentUser?.titulos || "",
        grados: currentUser?.grados || "",
        lugar: currentUser?.lugar ||"",
        area: currentUser?.area ||"",
        cargo: currentUser?.cargo ||"",
        fechaGrado: currentUser?.fechaGrado ||null,
        fechaCapacitacion: currentUser?.fechaCapacitacion || null,
        lugarCapacitacion: currentUser?.lugarCapacitacion ||"",
        denominacioncapacitacion: currentUser?.denominacioncapacitacion ||"",
      }
    })


  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true)
    console.log(data)
    try {
      setIsLoading(true)
      await axios.post(`/api/alumno/actualizar/${currentUser?.codigo}`, {
        ...data,
        fechaGrado: new Date(data.fechaGrado),
        fechaCapacitacion: new Date(data.fechaCapacitacion)
      })
      router.refresh()
      router.push(`/constituyente`)
      toast.success("Actualizado correctamente")
    } catch (error) {
      toast.error('Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    console.log(session?.status)
    if (session?.status !== 'authenticated') {
      router.push('/')
    }
  }, [session?.status, router])

  return (
    <div className="mt-11 px-8 py-6 flex flex-col gap-y-4 items-center justify-center">
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
      <div className="text-gray-700 font-semibold text-xl mt-4">
        Datos personales
      </div>
      <form
        className="mt-6 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid  items-center justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4  w-3/4 gap-y-3  px-11 py-1 mx-auto ">
          <Input
            id="name"
            label="Nombre"
            type="text"
            register={register}
            errors={errors}
            disabled={isLoading}
            value={currentUser?.name}
          />

          <Input
            id="titulos"
            label="Titulo"
            type="text"
            register={register}
            errors={errors}
            disabled={isLoading}
            value={currentUser?.titulos}
          />
          <Input
            id="grados"
            label="Grado"
            type="text"
            register={register}
            errors={errors}
            disabled={isLoading}
            value={currentUser?.grados}
          />
          <Input
            id="lugarCapacitacion"
            label="lugar"
            type="text"
            register={register}
            errors={errors}
            disabled={isLoading}
            value={currentUser?.lugar}
          />
          <Input
            id="area"
            label="Area"
            type="text"
            register={register}
            errors={errors}
            disabled={isLoading}
            value={currentUser?.area}
          />
          <Input
            id="cargo"
            label="Cargo"
            type="text"
            register={register}
            errors={errors}
            disabled={isLoading}
            value={currentUser?.cargo}
          />
          <Input
            id="fechaGrado"
            label="Fecha de grado"
            type="datetime-local"
            register={register}
            errors={errors}
            disabled={isLoading}
            value={currentUser?.fechaGrado}
          />
          <Input
            id="fechaCapacitacion"
            label="Fecha de ultima capacitacion"
            type="datetime-local"
            register={register}
            errors={errors}
            disabled={isLoading}
            value={currentUser?.fechaCapacitacion}
          />
          <Input
            id="denominacioncapacitacion"
            label="Denominaicon de ultima capacitacion"
            type="text"
            register={register}
            errors={errors}
            disabled={isLoading}
            value={currentUser?.denominacioncapacitacion}
          />
        </div>
         
        <div className="mt-11 px-11">
          <Button
            disabled={isLoading}
            fullWidth
            type="submit"
          >
            Actualizar
          </Button>
        </div>
      </form>
    </div>
  );
}

export default UpdateUser;