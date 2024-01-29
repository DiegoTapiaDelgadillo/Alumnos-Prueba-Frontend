import { Link } from "react-router-dom";
import HomeSvg from "../homeSvg";
export default function Navbar() {
  return (
    <nav className="px-4 sm:px-24 md:px-48 w-full fixed">
      <div className="justify-between flex bg-orange-700 w-full py-4 border border-orange-700 rounded-3xl shadow-2xl">
        <div className="px-4">
          <Link to={"/"}>
            <HomeSvg></HomeSvg>
          </Link>
        </div>
        <div className="flex items-center">
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
      </div>
    </nav>
  );
}
