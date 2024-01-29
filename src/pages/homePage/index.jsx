import Titles from "../../components/titles";
import Materias from "./img/teacher-isometric.svg";
import Card from "../../components/card";
import Alumnos from "./img/school-isometric.svg";
export default function HomePage() {
  return (
    <>
      <div className="px-4 sm:px-24 md:px-48 py-24">
        <div className=" pb-12">
          <Card
            title={"Alumnos"}
            body={
              "Descubre un mundo de posibilidades en nuestro apartado dedicado a los alumnos"
            }
            image={Alumnos}
            rute={"alumnos"}
          ></Card>
        </div>
        <div>
          <Card
            title={"Materias"}
            body={
              "Explora el fascinante mundo de las materias en nuestro sistema educativo"
            }
            image={Materias}
            rute={"materias"}
          ></Card>
        </div>
      </div>
    </>
  );
}
