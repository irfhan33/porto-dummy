export default function Title({ children, left }) {
  let className = "";
  if (!left ? (className = "text-center") : (className = "text-left"));
  return (
    <>
      <h1 className={`font-mono ${className} font-semibold text-2xl`}>
        {children}
      </h1>
    </>
  );
}
