import CloseSvg from "../closeSvg";
import Titles from "../titles";
import { useEffect, useState } from "react";
export default function FormEditMaterias({
  closeModal,
  idMateria,
  nombreMateria,
}) {
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  //PATCH

  const handleSubmitEdit = async (e) => {
    e.preventDefault();

    const data = {
      id_materiad: id,
      nombre_materia: nombre,
    };

    try {
      const response = await fetch(`http://localhost:3000/materias/${id}`, {
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
          title={"Editar materia"}
          body={"Ingresa los siguientes datos para editar una materia"}
        ></Titles>
        <div className="py-4">
          <form onSubmit={handleSubmitEdit}>
            <p className=" text-neutral-500 py-1">Id</p>
            <input
              type="text"
              className="border border-black w-full rounded-xl py-2 px-2 shadow"
              value={id}
              placeholder={idMateria}
              onChange={(e) => setId(e.target.value)}
            />
            <p className=" text-neutral-500 py-1">Nombre</p>
            <input
              type="text"
              className="border border-black w-full rounded-xl py-2 px-2 shadow"
              value={nombre}
              placeholder={nombreMateria}
              onChange={(e) => setNombre(e.target.value)}
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
