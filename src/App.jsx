import { Routes, Route } from "react-router-dom";
import MainPage from "./Page/mainpage.jsx";
import Country from "./Page/country.jsx";
import Details from "./Page/details.jsx";

//Regions
import Africa from "./Page/africa.jsx";
import Americas from "./Page/americas.jsx";
import Asia from "./Page/asia.jsx";
import Europe from "./Page/europe.jsx";
import Oceania from "./Page/oceania.jsx";
import Border from "./Page/border.jsx";
function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<MainPage />}>
                    <Route index element={<Country />} />
                    <Route path="/:id" element={<Details />} />
                    <Route path="/border/:bor" element={<Border />} />
                    <Route path="africa" element={<Africa />} />
                    <Route path="americas" element={<Americas />} />
                    <Route path="asia" element={<Asia />} />
                    <Route path="europe" element={<Europe />} />
                    <Route path="oceania" element={<Oceania />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
