export default function CreateSvg({ text }) {
  return (
    <div className="flex justify-between border border-green-500 bg-green-100 rounded-3xl p-2 hover: cursor-pointer hover:bg-green-500 ease-in-out duration-300">
      <p className="px-2">{text}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </div>
  );
}
