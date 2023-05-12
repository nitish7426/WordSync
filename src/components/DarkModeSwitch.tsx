import { useTheme } from "next-themes";
import { BiSun, BiMoon } from "react-icons/bi";

const DarkModeSwitch = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className="relative h-6 w-6"
      onClick={() => setTheme(theme == "light" ? "dark" : "light")}
    >
      <BiSun
        className={`absolute top-0 left-0 ${
          theme == "dark" ? " opacity-100" : " opacity-0 rotate-180"
        } transition-all duration-300`}
        size={25}
      />
      <BiMoon
        className={`absolute top-0 left-0 ${
          theme == "dark" ? " opacity-0 -rotate-180" : " opacity-100"
        } transition-all duration-300`}
        size={25}
      />
    </button>
  );
};

export default DarkModeSwitch;
