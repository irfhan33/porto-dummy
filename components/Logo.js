export default function Logo({ children }) {
  return (
    <>
      <div className="cursor-pointer uppercase text-[24px] font-semibold text-white tracking-widest">
        {children}
      </div>
    </>
  );
}
