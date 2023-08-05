'use client'
import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";



interface UpdateUserProps{
  currentUser:any
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
        titulo: currentUser?.titulo || "",
        grado: currentUser?.grado || "",
        lugar: currentUser?.lugar ||"",
        area: currentUser?.area ||"",
        cargo: currentUser?.cargo ||"",
        fechaGrado: currentUser?.fechaGrado ||"",
        fechaCapacitacion: currentUser?.fechaCapacitacion ||"",
        lugarCapacitacion: currentUser?.lugarCapacitacion ||"",
        denominacioncapacitacion: currentUser?.denominacioncapacitacion ||"",
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
        className="mt-6 grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4  w-3/4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          id="name"
          label="Nombre"
          type="text"
          register={register}
          errors={errors}
          disabled={isLoading}
        />

        <Input
          id="titulo"
          label="Titulo"
          type="text"
          register={register}
          errors={errors}
          disabled={isLoading}
        />
        <Input
          id="grado"
          label="Grado"
          type="text"
          register={register}
          errors={errors}
          disabled={isLoading}
        />
        <Input
          id="lugar"
          label="lugar"
          type="text"
          register={register}
          errors={errors}
          disabled={isLoading}

        />
        <Input
          id="area"
          label="Area"
          type="text"
          register={register}
          errors={errors}
          disabled={isLoading}

        />
        <Input
          id="cargo"
          label="Cargo"
          type="text"
          register={register}
          errors={errors}
          disabled={isLoading}

        />
        <Input
          id="fechaGrado"
          label="Fecha de grado"
          type="text"
          register={register}
          errors={errors}
          disabled={isLoading}

        />
        <Input
          id="fechaCapacitacion"
          label="Fecha de ultima capacitacion"
          type="text"
          register={register}
          errors={errors}
          disabled={isLoading}

        />
        <Input
          id="denominacionCapacitacion"
          label="Denominaicon de ultima capacitacion"
          type="text"
          register={register}
          errors={errors}
          disabled={isLoading}

        />
        <div>
          <Button
            disabled={isLoading}
            fullWidth
            type="submit"
          >
            Entrar
          </Button>
        </div>
      </form>
    </div>
  );
}

export default UpdateUser;