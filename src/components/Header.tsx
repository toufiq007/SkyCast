import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/theme-context";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <header className="sticky z-50 top-0 bg-background/90 backdrop-blur py-3 border-b supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold font-sans">
          {theme === "dark" ? (
            <span className="text-white"> <span className="uppercase font-bold">klimate</span></span>
          ) : (
            <span className="text-black">Klimate</span>
          )}
        </Link>
        <div>
          {/* search */}
          {/* theme toggle */}

          <div onClick={()=> setTheme(isDark ? "light" : "dark")} className={`flex items-center  transition-transform duration-500 cursor-pointer ${isDark  ? 'rotate-180' : 'rotate-0'}`}>
            {isDark ? (
              <Sun className="h-6 w-6 text-orange-300 rotate-0 transition-all" />
            ) : (
              <Moon className="h-6 w-6 text-blue-400 rotate-0 transition-all" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
