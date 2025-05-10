import ScrollUpButton from "../ScrollUpButton";

function Footer() {
  return (
    <footer className="relative bg-bribella-blue text-bribella-white text-center p-10 mt-auto">
      <div className="text-xs lg:text-sm">
        <div className="px-[30px] text-pretty">
          &copy; {new Date().getFullYear()} Bribella*PL – Hodowla kotów
          brytyjskich
        </div>
        <div className="flex justify-center p-5 pb-0">
          <a
            href="https://www.facebook.com/BribellaPL"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:scale-110 transition-transform"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-bribella-orange w-8 h-8"
            >
              <title>Odwiedź fanpage Bribella*PL</title>
              <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
            </svg>
          </a>
        </div>
      </div>
      <ScrollUpButton />
    </footer>
  );
}

export default Footer;
