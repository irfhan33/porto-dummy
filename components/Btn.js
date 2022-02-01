export default function Btn({ children, variant, className }) {
  const variants = {
    outline:
      "text-yellow-500 border border-yellow-500 hover:text-white hover:bg-yellow-500 rounded-full",
    fill: "text-white bg-yellow-500 hover:bg-yellow-600 hover:text-black rounded-full",
    black: "text-white bg-black rounded-none",
  };

  const pickedVariant = variants[variant];

  return (
    <>
      <a
        className={`${className} transition-all duration-200 inline-block text-[18px] ${pickedVariant} cursor-pointer font-semibold text-md py-[10px] px-[40px]`}
      >
        {children}
      </a>
    </>
  );
}
