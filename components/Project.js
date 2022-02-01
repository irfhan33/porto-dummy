import ProjectItem from "./ProjectItem";
import SubTitle from "./SubTitle";
import Title from "./Title";

export default function Project() {
  return (
    <>
      <section className="py-20 px-4" id="projects">
        <div className="container mx-auto ">
          <Title>Projects</Title>
          <SubTitle>Beberapa project buatan saya</SubTitle>
          <div className="sm:flex mt-14 -mx-4 flex-wrap">
            <div className="sm:w-6/12 sm:px-4 px-6 pb-4">
              <ProjectItem
                title="Finance App design Dark theme"
                category="Web Development"
                image="/dribble1.jpg"
              />
            </div>
            <div className="sm:w-6/12 sm:px-4 px-6 pb-4">
              <ProjectItem
                title="Money App Exploration"
                category="UI Design"
                image="/dribble2.jpg"
              />
            </div>
            <div className="sm:w-6/12 sm:px-4 px-6 pb-4">
              <ProjectItem
                title="Momatu Web Redesign Concept"
                category="Web Development"
                image="/dribble3.jpg"
              />
            </div>
            <div className="sm:w-6/12 sm:px-4 px-6 pb-4">
              <ProjectItem
                title="Booking Service Mobile Website"
                category="UI Design"
                image="/dribble4.jpg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
