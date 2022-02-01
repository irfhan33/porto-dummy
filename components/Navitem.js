export default function Navitem({ children, className, href }) {
  const addClassName = className;
  return (
    <>
      <li>
        <a
          href={href}
          className={`cursor-pointer hover:text-white tracking-wide  ${addClassName}`}
        >
          {children}
        </a>
      </li>
    </>
  );
}
