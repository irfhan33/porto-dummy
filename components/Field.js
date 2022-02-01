export default function Field({ name, type, label }) {
  return (
    <>
      <label className="block font-semibold text-md mb-1" htmlFor={name}>
        {label}
      </label>
      {type === "text" ? (
        <input
          className="bg-transparent border-2 py-2 px-4 border-gray-600 w-full mb-3"
          type={type}
          name={name}
          id={name}
        />
      ) : (
        <textarea
          className="bg-transparent border-2 py-2 px-4 border-gray-600 w-full mb-3"
          type={type}
          name={name}
          id={name}
        />
      )}
    </>
  );
}
