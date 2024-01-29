import React, { useState, useEffect } from "react";
import Titles from "../../components/titles";
import TrashSvg from "../../components/trashSvg";
import CreateSvg from "../../components/createSvg";
import FormMaterias from "../../components/formMaterias";
import FormEditMaterias from "../../components/formEditMaterias";

export default function AlumnosPage() {
  const [materias, setMaterias] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalEditIsOpen, setModaEditlIsOpen] = useState(false);
  const [filteredId, setFilteredId] = useState("");
  const [filteredMaterias, setFilteredMaterias] = useState(null);
  const [editAlumnosFrom, setEditMateriasFrom] = useState(false);

  useEffect(() => {
    //get
    fetch("http://localhost:3000/materias")
      .then((response) => response.json())
      .then((data) => setMaterias(data))
      .catch((error) =>
        console.error("Error al obtener datos de la API:", error)
      );
  }, []);

  //delte
  const handleDeleteAlumno = (id) => {
    fetch(`http://localhost:3000/materias/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        setMaterias((prevMaterias) =>
          prevMaterias.filter((materias) => materias.id_materia !== id)
        );
      })
      .catch((error) => console.error("Error al eliminar la materia:", error));
  };

  //Modal
  const openModal = () => {
    setModalIsOpen(true);
    console.log(modalIsOpen);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    console.log(modalIsOpen);
  };

  const openModalEdit = () => {
    setModaEditlIsOpen(true);
    console.log(modalEditIsOpen);
  };

  const closeModalEdit = () => {
    setModaEditlIsOpen(false);
    console.log(modalEditIsOpen);
  };

  //GET ONE

  const handleFilter = () => {
    const idToFilter = parseInt(filteredId, 10);

    if (!isNaN(idToFilter)) {
      fetch(`http://localhost:3000/materias/${idToFilter}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("No se encontró un alumno con ese ID.");
          }
          return response.json();
        })
        .then((foundAlumno) => {
          setFilteredMaterias(foundAlumno);
        })
        .catch((error) => {
          setFilteredMaterias(null);
          alert(error.message);
        });
      setEditMateriasFrom(true);
    } else {
      setFilteredMaterias(null);
      alert("Ingresa un ID válido.");
    }
  };

  return (
    <div className="px-4 sm:px-24 md:px-48 w-full py-24 h-screen ">
      <div className="border rounded-3xl p-4 bg-white">
        <div className=" grid grid-cols-1 md:flex md:justify-between md:items-center">
          <Titles
            title={"Lista de materias"}
            body={"Aquí encontraras toda la lista de las materias registradas"}
          ></Titles>
          <div onClick={openModal}>
            <CreateSvg text={"Agregar Materia"}></CreateSvg>
          </div>
        </div>

        <div className="flex items-end py-4 w-full">
          <div className="w-full">
            <p className=" text-neutral-500 p-1">Filtrar por id</p>
            <input
              type="text"
              value={filteredId}
              onChange={(e) => setFilteredId(e.target.value)}
              className="w-full border border-black rounded-2xl shadow p-2"
              placeholder="Ingresa el id de la meteria"
            />
          </div>
          <div className="px-2">
            <button
              onClick={handleFilter}
              className="border border-orange-500 p-2 rounded shadow bg-orange-500 text-white"
            >
              Filtrar
            </button>
          </div>
        </div>

        <div className="flex justify-between">
          <div>
            {filteredMaterias && (
              <div className="pb-4">
                <h2>Información del alumno filtrado:</h2>
                <p>ID: {filteredMaterias.id_materia}</p>
                <p>Nombre: {filteredMaterias.nombre_materia}</p>
              </div>
            )}
          </div>
          <div
            onClick={openModalEdit}
            className={editAlumnosFrom ? "block" : "hidden"}
          >
            <CreateSvg text={"Editar Alumno"}></CreateSvg>
          </div>
        </div>

        <div className=" overflow-x-auto h-96">
          <table className="w-full table-auto">
            <thead>
              <tr className=" bg-orange-200">
                <th className="p-2 text-start">Id</th>
                <th className="p-2 text-start">Nombre</th>
                <th className="p-2 text-start">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {materias.map((materia) => (
                <tr key={materia.id_materia} className="hover:bg-orange-50">
                  <td className="p-2">{materia.id_materia}</td>
                  <td className="p-2 ">{materia.nombre_materia}</td>

                  <td
                    className="p-2"
                    onClick={() => handleDeleteAlumno(materia.id_materia)}
                  >
                    <TrashSvg></TrashSvg>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={modalIsOpen ? "block" : "hidden"}>
          <FormMaterias closeModal={closeModal}></FormMaterias>
        </div>
        <div className=""></div>
        <div className={modalEditIsOpen ? "block" : "hidden"}>
          {filteredMaterias && (
            <FormEditMaterias
              closeModal={closeModalEdit}
              idMateria={filteredMaterias.id_materia}
              nombreMateria={filteredMaterias.nombre_materia}
            ></FormEditMaterias>
          )}
        </div>
      </div>
    </div>
  );
}
