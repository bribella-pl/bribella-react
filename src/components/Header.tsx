type HeaderProps = {
  title: string;
};

function Header(props: HeaderProps) {
  return (
    <div
      className="
        bg-bribella-blue
        w-full
        text-bribella-orange text-center
        "
    >
      <h1 className="text-5xl lg:text-8xl m-4 tracking-wide p-10 font-[Corinthia] ">
        {props.title}
      </h1>
    </div>
  );
}

export default Header;
