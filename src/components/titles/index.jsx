export default function Titles({ title, body }) {
  return (
    <div>
      <h1 className=" text-4xl text-orange-500 font-bold ">{title}</h1>
      <p className="py-1 text-black text-xl">{body}</p>
    </div>
  );
}
