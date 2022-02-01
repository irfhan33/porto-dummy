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

          <div className="flex mt-14 flex-wrap sm:-mx-2 md:-mx-6 lg:-mx-8 ">
            <SkillCard
              title="JavaScript"
              level="Expert"
              image="/javascript.svg"
            />
            <SkillCard title="Node JS" level="Intermediate" image="/node.svg" />
            <SkillCard title="React" level="Amatuer" image="/react.svg" />
            <SkillCard title="Html" level="Expert" image="/html.svg" />
            <SkillCard
              title="Tailwind CSS"
              level="Intermediate"
              image="/tailwind.svg"
            />
            <SkillCard title="Play Game" level="Amatuer" image="/game.svg" />
            <SkillCard
              title="Bootstrap"
              level="Expert"
              image="/bootstrap.svg"
            />
            <SkillCard
              title="Php Storm"
              level="Intermediate"
              image="/phpstorm.svg"
            />
            <SkillCard
              className="sm:hidden md:block"
              title="Database"
              level="Amatuer"
              image="/db.svg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
