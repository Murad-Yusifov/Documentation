"use client"
import { useAppContext } from "../context/Context";
import styles from "./Navbar.module.scss";
const Navbar = () => {

  const navBar = ["services", "thechnologies", "portfolio", "contact"];

  const { theme, setTheme, language, setLanguage} =useAppContext();


  return (
    <header className={`w-full flex justify-center `}>
      <div className={`${styles.content} w-3/4 flex justify-between bg-black text-white rounded-[18px] border-2`} style={{padding:"15px", margin:"10px"}}>
        <div className="">
        <h1>Murad Yusifov</h1>
      </div>
      <nav>
        <ul className="flex justify-around gap-2">
          {navBar.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </nav>
      </div>
    </header>
  );
};

export default Navbar;
