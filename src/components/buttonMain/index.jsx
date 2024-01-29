import { Link } from "react-router-dom";
export default function ButtonMain({ text, rute }) {
  return (
    <Link to={rute}>
      <button className=" w-full xl:w-auto px-8 py-2 bg-orange-500 rounded shadow-md hover:bg-orange-500/50 ease-in-out duration-300 cursor-pointer text-white">
        {text}
      </button>
    </Link>
  );
}
