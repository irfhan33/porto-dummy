export default function ContactItem({ image, title, value }) {
  return (
    <>
      <div className="flex items-center my-6">
        <img src={image} alt="" className="w-8" />
        <div className="ml-3">
          <p className="font-semibold text-sm">{title}</p>
          <h1 className="font-semibold text-md">{value}</h1>
        </div>
      </div>
    </>
  );
}
