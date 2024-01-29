import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="grid xl:flex px-4 sm:px-24 md:px-48 justify-between py-12 bg-orange-700">
      <div>
        <p className="text-white">
          © 2020 Your Company, Inc. All rights reserved.
        </p>
      </div>
      <div className="pt-4 xl:p-0 grid xl:flex">
        <Link to={"/"}>
          <p className="px-4 text-white hover:text-white/50 cursor-pointer ease-in-out duration-300">
            Inicio
          </p>
        </Link>
        <Link to={"alumnos"}>
          <p className="px-4 text-white hover:text-white/50 cursor-pointer ease-in-out duration-300">
            Alumnos
          </p>
        </Link>
        <Link to={"materias"}>
          <p className="px-4 text-white hover:text-white/50 cursor-pointer ease-in-out duration-300">
            Materias
          </p>
        </Link>
      </div>
    </footer>
  );
}
