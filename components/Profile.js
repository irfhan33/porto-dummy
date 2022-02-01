import SubTitle from "./SubTitle";
import Title from "./Title";

export default function Profile() {
  return (
    <>
      <div className="container mx-auto py-20 px-10 sm:px-0" id="profile">
        <div className="py-10">
          <Title>Profile</Title>
          <SubTitle>Mengenal saya secara singkat</SubTitle>
        </div>
        <div className="sm:flex xl:w-8/12 lg:w-10/12  w-full mx-auto sm:items-start xl:items-center">
          <div className="sm:w-6/12">
            <img
              src="/profile.png"
              alt="Profile Pict"
              className="w-[80%] mx-auto pb-4 sm:pb-0"
            />
          </div>
          <div className="sm:w-6/12 text-lg font-normal text-gray-600 leading-relaxed">
            <p className="mb-3">
              Aliquam blandit leo lorem, nec vehicula mi accumsan posuere. Duis
              condimentum ornare ante a posuere. Aliquam sem magna, sodales quis
              congue vel, congue nec nisi. Aenean nec lorem et dolor aliquet
              ullamcorper eu at sapien. Sed pretium mauris dui. Phasellus mollis
              accumsan tempus. Proin laoreet hendrerit ligula, id lacinia eros.
              Aenean consequat, felis eu malesuada lobortis, augue nisl faucibus
              ligula, id viverra mi erat at nisl. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Maecenas ac aliquet eros.
            </p>
            <p>
              Aliquam a fringilla metus. Fusce ut tortor ut sem sagittis
              convallis. Morbi et augue sed nisl fermentum dictum eget ut nisl.
              Mauris ut dolor posuere augue porta lobortis nec sed lacus.
              Curabitur dignissim ac lorem in tempor. Morbi id dui quis ex
              malesuada mattis. Suspendisse potenti. Nulla euismod diam ut risus
              mollis, id vehicula nulla dictum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
