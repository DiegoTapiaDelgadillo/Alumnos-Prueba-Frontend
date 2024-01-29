import React, { useState, useEffect } from "react";
import Titles from "../../components/titles";
import EditSvg from "../../components/editSvg";
import TrashSvg from "../../components/trashSvg";
import FormAlumnos from "../../components/formAlumnos";
import CreateSvg from "../../components/createSvg";
import FormEditAlumno from "../../components/formEditAlumno";

export default function AlumnosPage() {
  const [alumnos, setAlumnos] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalEditIsOpen, setModaEditlIsOpen] = useState(false);
  const [filteredId, setFilteredId] = useState("");
  const [filteredAlumno, setFilteredAlumno] = useState(null);
  const [editAlumnosFrom, setEditAlumnosFrom] = useState(false);

  useEffect(() => {
    //get
    fetch("http://localhost:3000/alumnos")
      .then((response) => response.json())
      .then((data) => setAlumnos(data))
      .catch((error) =>
        console.error("Error al obtener datos de la API:", error)
      );
  }, []);

  //delte
  const handleDeleteAlumno = (id) => {
    fetch(`http://localhost:3000/alumnos/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        setAlumnos((prevAlumnos) =>
          prevAlumnos.filter((alumno) => alumno.id_alumno !== id)
        );
      })
      .catch((error) => console.error("Error al eliminar alumno:", error));
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
      fetch(`http://localhost:3000/alumnos/${idToFilter}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("No se encontró un alumno con ese ID.");
          }
          return response.json();
        })
        .then((foundAlumno) => {
          setFilteredAlumno(foundAlumno);
        })
        .catch((error) => {
          setFilteredAlumno(null);
          alert(error.message);
        });
      setEditAlumnosFrom(true);
    } else {
      setFilteredAlumno(null);
      alert("Ingresa un ID válido.");
    }
  };

  return (
    <div className="px-4 sm:px-24 md:px-48 w-full py-24 h-screen">
      <div className="border rounded-3xl p-4 bg-white">
        <div className=" grid grid-cols-1 md:flex md:justify-between md:items-center">
          <Titles
            title={"Lista de alumnos"}
            body={"Aquí encontraras toda la lista de los alumnos registrados"}
          ></Titles>
          <div onClick={openModal}>
            <CreateSvg text={"Agregar Alumno"}></CreateSvg>
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
              placeholder="Ingresa el id del alumno"
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
            {filteredAlumno && (
              <div className="pb-4">
                <h2>Información del alumno filtrado:</h2>
                <p>ID: {filteredAlumno.id_alumno}</p>
                <p>Nombre: {filteredAlumno.nombre_alumno}</p>
                <p>Apellido: {filteredAlumno.apellido_alumno}</p>
                <p>Correo: {filteredAlumno.correo_alumno}</p>
                <p>Teléfono: {filteredAlumno.telefono_alumno}</p>
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
                <th className="p-2 text-start">Apellido</th>
                <th className="p-2 text-start">Correo</th>
                <th className="p-2 text-start">Teléfono</th>
                <th className="p-2 text-start">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {alumnos.map((alumno) => (
                <tr key={alumno.id_alumno} className="hover:bg-orange-50">
                  <td className="p-2">{alumno.id_alumno}</td>
                  <td className="p-2 ">{alumno.nombre_alumno}</td>
                  <td className="p-2 ">{alumno.apellido_alumno}</td>
                  <td className="p-2 ">{alumno.correo_alumno}</td>
                  <td className="p-2 ">{alumno.telefono_alumno}</td>

                  <td
                    className="p-2"
                    onClick={() => handleDeleteAlumno(alumno.id_alumno)}
                  >
                    <TrashSvg></TrashSvg>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={modalIsOpen ? "block" : "hidden"}>
          <FormAlumnos closeModal={closeModal}></FormAlumnos>
        </div>
        <div className=""></div>
        <div className={modalEditIsOpen ? "block" : "hidden"}>
          {filteredAlumno && (
            <FormEditAlumno
              closeModal={closeModalEdit}
              idAlumno={filteredAlumno.id_alumno}
              nombreAlmuno={filteredAlumno.nombre_alumno}
              apellidoAlumno={filteredAlumno.apellido_alumno}
              correoAlumno={filteredAlumno.correo_alumno}
              telefonoAlmuno={filteredAlumno.telefono_alumno}
            ></FormEditAlumno>
          )}
        </div>
      </div>
    </div>
  );
}
