import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../src/Pages/Home';
import Polos from '../src/Pages/Polos';
import Equipe from '../src/Pages/Equipe';

function App() {
return (
<div>
    <BrowserRouter> 
        <Routes>
            <Route index element={<Home />} />
            <Route path="polos" element={<Polos />} />
            <Route path="equipe" element={<Equipe />} />
        </Routes>
    </BrowserRouter>
</div>
);
}

export default App;
