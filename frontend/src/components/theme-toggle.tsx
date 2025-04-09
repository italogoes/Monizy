import { useTheme } from "../contexts/Theme";
import { LuSun, LuMoon } from "react-icons/lu";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="w-8 p-2 border rounded-lg cursor-pointer hover:bg-secondary">
      {theme === "dark" ? <LuSun/> : <LuMoon/>}
    </button>
  );
}
