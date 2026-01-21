import './App.css';
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import LivingLanguages from "./pages/LivingLanguages";
import LanguageDetail from "./pages/LanguageDetail";
import ExtinctLanguages from "./pages/ExtinctLanguages";
import ExtinctDetail from "./pages/ExtinctDetail";

function App() {
    return (
        <Router basename="/Mexican-languages">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/living' element={<LivingLanguages />} />
                <Route path="/living/:id" element={<LanguageDetail />} />
                <Route path="/extinct-languages" element={<ExtinctLanguages />} />
                <Route path="/extinct-languages/:id" element={<ExtinctDetail />} />
            </Routes>
        </Router>
    );
}

export default App;
