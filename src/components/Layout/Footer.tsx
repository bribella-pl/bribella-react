import ScrollUpButton from "../ScrollUpButton";

function Footer() {
  return (
    <footer className="relative bg-bribella-blue text-bribella-white text-center p-15  mt-auto">
      <div className="text-xs lg:text-sm">
        &copy; {new Date().getFullYear()} Bribella*PL – Hodowla kotów
        brytyjskich
      </div>
      <ScrollUpButton />
    </footer>
  );
}

export default Footer;
