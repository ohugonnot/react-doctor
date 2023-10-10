import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Service from "./pages/Service";
import Empty from "./pages/Empty";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Index/>}/>
                        <Route path='contact.html' element={<Contact/>}/>
                        <Route path='about.html' element={<About/>}/>
                        <Route path='service.html' element={<Service/>}/>
                        <Route path="*" element={<Empty/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
