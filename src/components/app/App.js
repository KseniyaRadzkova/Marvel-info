import AppHeader from "../appHeader/AppHeader";

import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {MainPage, ComicsPage} from "../pages";

const App = () => {
    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/comics" element={<ComicsPage />} />
                        <Route path="*" element={"Error 404: not found"} />
                    </Routes>
                </main>
            </div>
        </Router>
    )
}


export default App;
