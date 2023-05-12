import DarkModeSwitch from "./DarkModeSwitch";
import { TiArrowSync } from "react-icons/ti";

const Header = () => {
  return (
    <header className="h-16 w-full flex items-center justify-between px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-xl font-semibold flex items-center">
        Word
        <TiArrowSync size={25} />
        Sync
      </div>
      <DarkModeSwitch />
    </header>
  );
};

export default Header;
