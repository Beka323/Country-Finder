import { Outlet } from "react-router-dom";
import DarkMode from "../Components/darkmode.jsx";
function MainPage() {
    return (
        <>
            <div className="fixed top-0 left-0 z-20 right-0 flex p-4 shadow-md justify-between dark:shadow-gray-800 shadow-gray-300 bg-gray-100 dark:bg-gray-900">
                <h4 className="text-base text-black font-bold dark:text-white">
                    Find Your country{" "}
                </h4>
                <DarkMode />
            </div>
            <main className="mt-20">
                <Outlet />
            </main>
        </>
    );
}
export default MainPage;
