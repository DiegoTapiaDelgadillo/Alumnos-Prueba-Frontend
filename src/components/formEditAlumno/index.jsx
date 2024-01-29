import CloseSvg from "../closeSvg";
import Titles from "../titles";
import { useEffect, useState } from "react";
export default function FormEditAlumno({
  closeModal,
  idAlumno,
  nombreAlmuno,
  apellidoAlumno,
  correoAlumno,
  telefonoAlmuno,
}) {
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  //PATCH

  const handleSubmitEdit = async (e) => {
    e.preventDefault();

    const data = {
      id: id,
      nombre_alumno: nombre,
      apellido_alumno: apellido,
      correo_alumno: correo,
      telefono_alumno: telefono,
    };

    try {
      const response = await fetch(`http://localhost:3000/alumnos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Solicitud POST exitosa");
      } else {
        console.error("Error en la solicitud POST");
      }
    } catch (error) {
      console.error("Error en la solicitud POST:", error);
    }
  };

  return (
    <div className=" fixed top-0 left-0 w-full h-full bg-transparent flex justify-center items-center z-50 p-2">
      <div className="border bg-white w-full md:w-2/4 h-auto shadow-2xl rounded-3xl p-8">
        <div className="flex justify-end" onClick={closeModal}>
          <CloseSvg></CloseSvg>
        </div>
        <Titles
          title={"Editar alumno"}
          body={"Ingresa los siguientes datos para editar a un alumno"}
        ></Titles>
        <div className="py-4">
          <form onSubmit={handleSubmitEdit}>
            <p className=" text-neutral-500 py-1">Id</p>
            <input
              type="text"
              className="border border-black w-full rounded-xl py-2 px-2 shadow"
              value={id}
              placeholder={idAlumno}
              onChange={(e) => setId(e.target.value)}
            />
            <p className=" text-neutral-500 py-1">Nombre</p>
            <input
              type="text"
              className="border border-black w-full rounded-xl py-2 px-2 shadow"
              value={nombre}
              placeholder={nombreAlmuno}
              onChange={(e) => setNombre(e.target.value)}
            />
            <p className=" text-neutral-500 py-1">Apellidos</p>
            <input
              type="text"
              className="border border-black w-full rounded-xl py-2 px-2 shadow"
              value={apellido}
              placeholder={apellidoAlumno}
              onChange={(e) => setApellido(e.target.value)}
            />
            <p className=" text-neutral-500 py-1">Correo electrónico</p>
            <input
              type="email"
              className="border border-black w-full rounded-xl py-2 px-2 shadow"
              value={correo}
              placeholder={correoAlumno}
              onChange={(e) => setCorreo(e.target.value)}
            />
            <p className=" text-neutral-500 py-1">Teléfono</p>
            <input
              type="text"
              className="border border-black w-full rounded-xl py-2 px-2 shadow"
              value={telefono}
              placeholder={telefonoAlmuno}
              onChange={(e) => setTelefono(e.target.value)}
            />
            <div className="pt-4">
              <button
                type="submit"
                className="bg-orange-500 w-full rounded-3xl shadow-3xl border border-orange-700 p-4 text-white hover:bg-orange-500/50 ease-in-out duration-300"
                onClick={closeModal}
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
