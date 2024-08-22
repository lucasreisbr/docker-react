import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
    
return (
    
<div>
    <BrowserRouter>
    <ScrollToTop /> 
    <Navbar/>
        <Routes>
            <Route index element={<Home />} />
            <Route path="polos" element={<Polos />} />
            <Route path="equipe" element={<Equipe />} />
            <Route path="alunos" element={<Alunos />} />
            <Route path="sobre" element={<Sobre />} />
        </Routes>
    </BrowserRouter>
</div>
);
}


export default App;
