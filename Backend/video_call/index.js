import { BrowserRouter, Route,Routes } from "react-router-dom";
import HomePage from "./HomePage";
import roomPage from "./roomPage";
function conference(){
    return(
<BrowserRouter>
    <Routes>
        <Route path="/room>" element={<HomePage/>}/>
        <Route path="/room/:roomId>" element={<roomPage/>}/>
    </Routes>
</BrowserRouter>
    );
}