import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsLight(document.documentElement.classList.contains("light"));
  }, []);

  function toggle() {
    const root = document.documentElement;
    const next = !root.classList.contains("light");
    if (next) {
      root.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
    setIsLight(next);
  }

  // Render a stable placeholder during SSR to avoid hydration mismatch
  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="inline-flex items-center justify-center size-9 rounded-md border border-border bg-surface text-muted-foreground hover:text-foreground transition"
        disabled
      >
        <Sun className="size-4" />
      </button>
    );
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="inline-flex items-center justify-center size-9 rounded-md border border-border bg-surface text-muted-foreground hover:text-foreground transition"
    >
      {isLight ? <Moon className="size-4" /> : <Sun className="size-4" />}
    </button>
  );
}
