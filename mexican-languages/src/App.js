import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import LivingLanguages from "./pages/LivingLanguages";
import LanguageDetail from "./pages/LanguageDetail";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/living' element={<LivingLanguages />} />
                <Route path="/living/:id" element={<LanguageDetail />} />
            </Routes>
        </Router>
    );
}

export default App;