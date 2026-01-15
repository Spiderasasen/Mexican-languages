import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import LivingLanguages from "./pages/LivingLanguages";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/living' element={<LivingLanguages />} />
            </Routes>
        </Router>
    );
}

export default App;