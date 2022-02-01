export default function ProjectItem({ image, title, category }) {
  return (
    <>
      <div className="text-center">
        <img src={image} className="rounded-lg w-full" alt="project 1" />
        <h1 className=" font-semibold text-xl mt-2">{title}</h1>
        <p>{category}</p>
      </div>
    </>
  );
}
