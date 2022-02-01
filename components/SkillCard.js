export default function SkillCard({ title, level, image, className }) {
  return (
    <>
      <div
        className={`${className} w-full sm:w-6/12 md:w-4/12 sm:px-2 md:px-6 xl:px-8`}
      >
        <div className="flex bg-white rounded-lg p-3 items-center shadow-skill mb-6">
          <img
            src={`${image}`}
            className="h-12 w-12 rounded-full mr-4"
            alt=""
          />
          <div className="">
            <h1 className="font-semibold text-lg">{title}</h1>
            <p className="text-gray-500 font-semibold">{level}</p>
          </div>
        </div>
      </div>
    </>
  );
}
