import { useState, useEffect } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
function DarkMode() {
    // const [isDark,setIsDark] = useState(false)
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        function toggle() {
            if (theme === "dark") {
                window.document.documentElement.classList.add("dark");
                localStorage.setItem("theme", theme);
            } else {
                window.document.documentElement.classList.remove("dark");
                localStorage.setItem("theme", theme);
            }
            
        }
        toggle();
    }, [theme]);

    function handleMode() {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    return (
        <>
            <button onClick={handleMode}>
                {theme === "dark" ? (
                    <span>
                        <MdOutlineLightMode className="text-2xl dark:text-white" />
                    </span>
                ) : (
                    <span>
                        <MdOutlineDarkMode className="text-2xl text-slate-900" />
                    </span>
                )}
            </button>
        </>
    );
}
export default DarkMode;
