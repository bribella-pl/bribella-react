type HeaderProps = {
  title: string;
  className?: string;
};

function Header(props: HeaderProps) {
  return (
    <h1
      className={`
        w-full
        text-center 
        text-5xl lg:text-8xl 
        tracking-wide 
        p-10 
        font-[Corinthia] 
        ${props.className ? props.className : ""}`}
    >
      {props.title}
    </h1>
  );
}

export default Header;
