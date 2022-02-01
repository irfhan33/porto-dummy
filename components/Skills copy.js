import SkillCard from "./SkillCard";
import SubTitle from "./SubTitle";
import Title from "./Title";

export default function Skills() {
  return (
    <>
      <section className="bg-gray-100 py-20" id="skills">
        <div className="container mx-auto px-4 ">
          <Title>Skill</Title>
          <SubTitle>Beberapa kemampuan saya</SubTitle>

          <div className="flex mt-14 flex-wrap sm:-mx-2 md:-mx-6 ">
            <div className="w-full sm:w-6/12 md:w-4/12 sm:px-2 md:px-6 xl:px-4">
              <SkillCard
                title="JavaScript"
                level="Expert"
                image="/javascript.svg"
              />
            </div>
            <div className="w-full sm:w-6/12 md:w-4/12 sm:px-2 md:px-6 xl:px-4">
              <SkillCard
                title="Node JS"
                level="Intermediate"
                image="/node.svg"
              />
            </div>
            <div className="w-full sm:w-6/12 md:w-4/12 sm:px-2 md:px-6 xl:px-4">
              <SkillCard title="React" level="Amatuer" image="/react.svg" />
            </div>
            <div className="w-full sm:w-6/12 md:w-4/12 sm:px-2 md:px-6 xl:px-4">
              <SkillCard title="Html" level="Expert" image="/html.svg" />
            </div>
            <div className="w-full sm:w-6/12 md:w-4/12 sm:px-2 md:px-6 xl:px-4">
              <SkillCard
                title="Tailwind CSS"
                level="Intermediate"
                image="/tailwind.svg"
              />
            </div>
            <div className="w-full sm:w-6/12 md:w-4/12 sm:px-2 md:px-6 xl:px-4">
              <SkillCard title="Play Game" level="Amatuer" image="/game.svg" />
            </div>
            <div className="w-full sm:w-6/12 md:w-4/12 sm:px-2 md:px-6 xl:px-4">
              <SkillCard
                title="Bootstrap"
                level="Expert"
                image="/bootstrap.svg"
              />
            </div>
            <div className="w-full sm:w-6/12 md:w-4/12 sm:px-2 md:px-6 xl:px-4">
              <SkillCard
                title="Php Storm"
                level="Intermediate"
                image="/phpstorm.svg"
              />
            </div>
            <div className=" w-full sm:w-6/12 block sm:hidden md:block md:w-4/12 md:px-6 xl:px-4">
              <SkillCard title="Database" level="Amatuer" image="/db.svg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
