import Titles from "../titles";
import ButtonMain from "../buttonMain";
export default function Card({ title, body, image, rute }) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 bg-white border rounded-3xl shadow-2xl p-12">
      <div className="flex items-center">
        <div>
          <Titles title={title} body={body}></Titles>
          <div className="py-8">
            <ButtonMain rute={rute} text={"Visitar"}></ButtonMain>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center md:justify-end">
        <img src={image} alt="" className="w-3/4" />
      </div>
    </div>
  );
}
