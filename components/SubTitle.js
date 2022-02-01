export default function SubTitle({ children, left }) {
  let className = "";
  if (!left ? (className = "text-center") : (className = "text-left"));
  return (
    <>
      <p className={`text-gray-600 ${className} text-lg font-normal`}>
        {children}
      </p>
    </>
  );
}
