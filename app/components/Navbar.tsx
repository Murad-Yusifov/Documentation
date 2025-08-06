"use client"
import { GrLanguage } from "react-icons/gr";
import { useAppContext } from "../context/Context";
import styles from "./Navbar.module.scss";
const Navbar = () => {

  const navBar = ["services", "thechnologies", "portfolio", "contact"];

  const { theme, setTheme, language, setLanguage} =useAppContext();


  return (
    <header className={`w-full flex justify-center  ${theme===true? " *:text-black": "*:text-white"} `}>
      <div className={`${styles.content} w-3/4 flex justify-between items-center bg-black text-white rounded-[18px] border-2 ${theme===true? "bg-white text-black": ""}`} style={{padding:"15px", margin:"10px"}}>
        <div className="">
        <h1>Murad Yusifov</h1>
      </div>
      <nav>
        <ul className="w-1/3 flex justify-around gap-2">
          {navBar.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </nav>

      <div className="flex  w-1/4 justify-around items-center">
        <div className="flex items-center justify-center gap-2">
          <select
          value={language}
          onChange={(e)=> setLanguage(e.target.value)}
          className={`${theme===true? "*:bg-white *:text-black":"*:bg-black *:text-white"}`}>
            
            <option value="en">En</option>
            <option value="az">Az</option>
            <option value="rus">Rus</option>
            <option value="tr">Tr</option>
          </select>

          <GrLanguage />
        </div>
       <div className={styles.btnContainer}>
         <button
        onClick={()=>setTheme(!theme)}
        className={`bg-transparent border-2 border-white text-lack px-4 py-2 rounded-lg ${theme===false? "bg-white text-black border-black": ""}  ${styles.btn}`}
        >
          {theme ===true? "Light Mode" : "Dark Mode"}

        </button>
       </div>
      </div>
      </div>
    </header>
  );
};

export default Navbar;
