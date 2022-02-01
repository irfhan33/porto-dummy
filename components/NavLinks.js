import Navitem from "./Navitem";

export default function NavLinks({ dir }) {
  const dirs = {
    horizontal:
      "justify-center text-[18px] space-x-[10px] md:space-x-[40px] text-opacity-60",
    vertical: "flex-col text-xl font-semibold space-y-6",
  };

  const pickedDir = dirs[dir];
  return (
    <>
      <ul className={`flex transition text-white font-regular ${pickedDir}`}>
        <Navitem href="#profile">Profile</Navitem>
        <Navitem href="#skills">Skills</Navitem>
        <Navitem href="#projects">Projects</Navitem>
        <Navitem href="#contact">Contact</Navitem>
      </ul>
    </>
  );
}
