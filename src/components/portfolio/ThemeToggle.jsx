import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`p-2 text-muted-foreground hover:text-primary transition-colors focus-ring rounded-md ${className}`}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
