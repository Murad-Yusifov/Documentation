"use client";
import { GrLanguage } from "react-icons/gr";
import { useAppContext } from "../context/Context";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const { theme, setTheme, language, setLanguage } = useAppContext();
  const navBar =
    language === "az"
      ? ["xidmətlər", "texnologiyalar", "portfel", "əlaqə"]
      : language === "rus"
      ? ["услуги", "технологии", "портфолио", "контакт"]
      : language === "tr"
      ? ["hizmetler", "teknolojiler", "portföy", "iletişim"]
      : ["services", "technologies", "portfolio", "contact"];


  return (
    <header
      className={`w-full flex justify-center ${
        theme ? "*:text-dark" : "*:text-light"
      }`}
    >
      <div
        className={`${
          styles.content
        } w-[95%] sm:w-[90%] md:w-4/5 xl:w-3/4 flex flex-wrap md:flex-nowrap justify-between items-center rounded-[18px] border-2 ${
          theme
            ? "bg-light text-dark border-dark"
            : "bg-dark text-light border-light"
        }`}
        style={{ padding: "15px", margin: "10px" }}
      >
        {/* Logo / Title */}
        <div className="mb-4 md:mb-0 w-full md:w-auto text-center md:text-left">
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">
            {language==="rus"? "Мурад Юсифов":"Murad Yusifov"}
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="w-full md:w-auto mb-4 md:mb-0">
          <ul className="hidden sm:flex justify-center md:justify-around gap-4">
            {navBar.map((item, index) => (
              <li key={index} className="cursor-pointer hover:underline">
                {item}
              </li>
            ))}
          </ul>
        </nav>

        {/* Language & Theme */}
        <div className="w-full md:w-auto flex justify-center md:justify-end items-center gap-4 flex-wrap sm:flex-nowrap">
          <div className="flex items-center gap-2">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className={`rounded px-2 py-1 text-sm border ${
                theme
                  ? "bg-light text-dark border-dark"
                  : "bg-dark text-light border-light"
              }`}
            >
              <option value="en">En</option>
              <option value="az">Az</option>
              <option value="rus">Rus</option>
              <option value="tr">Tr</option>
            </select>
            <GrLanguage className="text-xl" />
          </div>

          {/* Theme Toggle Button */}
          <div className={styles.btnContainer}>
            <button
              onClick={() => setTheme(!theme)}
              className={`border-2 px-4 py-2 rounded-lg text-sm sm:text-base transition duration-300 cursor-pointer ${
                theme
                  ? "bg-light text-dark border-dark"
                  : "bg-transparent text-dark border-darkMode hover:bg-lightMode "
              } ${styles.btn}`}
            >
              {theme ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
