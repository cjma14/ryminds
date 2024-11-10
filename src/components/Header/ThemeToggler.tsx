import { useEffect } from "react";

const ThemeToggler = () => {
  const handleToggle = (theme: string) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", theme);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", theme);
    }
  };

  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  return (
    <button
      aria-label="theme toggler"
      className="bg-gray-2 dark:bg-dark-bg absolute right-17 mr-1.5 flex cursor-pointer items-center justify-center rounded-full text-black dark:text-white lg:static"
    >
      <img
        src="/images/icon/icon-moon.svg"
        alt="logo"
        width={21}
        height={21}
        className="dark:hidden"
        loading="lazy"
        decoding="async"
        onClick={() => handleToggle("dark")}
      />

      <img
        src="/images/icon/icon-sun.svg"
        alt="logo"
        width={22}
        height={22}
        className="hidden dark:block"
        loading="lazy"
        decoding="async"
        onClick={() => handleToggle("light")}
      />
    </button>
  );
};

export default ThemeToggler;
