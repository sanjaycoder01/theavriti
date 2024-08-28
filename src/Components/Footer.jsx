function Footer() {
  return (
    <footer className="mt-[5vw]">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <span className="ml-3 text-xl">Avriti</span>
        </a>
        <p className="text-sm text-gray-200 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2024 Freelance
          <a
            href=""
            className="text-gray-200 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            Service Provider
          </a>
        </p>
        <span className="inline-flex items-center sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            href="https://github.com/mt8951"
            className="text-gray-200 github text-xl"
          >
            <i className="ri-github-line"></i>
          </a>

          <a
            href="https://www.instagram.com/itz_tanveer_37?igsh=YTQ4bHRuZGN3cDRj"
            className="instagram ml-3 text-gray-200 text-xl"
          >
            <i className="ri-instagram-line"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mohammadtanveer89/"
            className="ml-3 text-gray-200 text-xl"
          >
            <i className="ri-linkedin-fill"></i>
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
