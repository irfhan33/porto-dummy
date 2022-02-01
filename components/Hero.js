import Btn from "./Btn";

export default function Hero() {
  return (
    <>
      <div className="text-center">
        <h1 className="lg:mt-12 md:mt-10 mt-1 sm:mt-6 mb-4 font-mono text-white text-2xl sm:text-3xl xl:text-4xl font-semibold text-center xl:w-8/12 lg:w-9/12 md:w-11/12 mx-auto leading-relaxed">
          Saya seorang front-end engineer, back-end engineer, dan juga UI
          designer
        </h1>
        <p className="text-gray-50 text-opacity-80 text-center w-8/12 font-normal text-md sm:text-lg xl:w-4/12 md:w-6/12 lg:w-5/12 mx-auto leading-relaxed">
          Sejak 13 tahun saya memulai programming. Sejak 3 tahun memulai UI
          design.
        </p>
        <Btn variant="fill" className="mt-10">
          Pelajari
        </Btn>
      </div>
    </>
  );
}
