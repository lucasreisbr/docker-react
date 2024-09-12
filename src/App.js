import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fontsource/ubuntu"; 
import "@fontsource/ubuntu/300.css";
import "@fontsource/ubuntu/700.css";  
import Navbar from './Modules/Navbar';
import Home from '../src/Pages/Home';
import Polos from '../src/Pages/Polos';
import Equipe from '../src/Pages/Equipe';
import Alunos from '../src/Pages/AreaAluno';
import Sobre from '../src/Pages/Sobre';
import ScrollToTop from "./Modules/ScrollToTop";
import ScrollToAnchor from "./Modules/ScrollToAnchor";

function App() {
    
return (
    
<div>
    <Router>
    <ScrollToTop /> 
    <ScrollToAnchor /> 
    <Navbar/>
            <Routes>
                <Route index element={ <Home />} />
                <Route path="locais-de-prova" element={<Polos />} />
                <Route path="equipe" element={<Equipe />} />
                <Route path="area-do-aluno" element={<Alunos />} />
                <Route path="o-ibresp" element={<Sobre />} />
            </Routes>
    </Router>
</div>
);
}


export default App;
