import {BrowsrRouter,Routes,Route} from "react-router-dom"
import AboutPage from "./Pages/About";
import BlogPage from "./Pages/Blog";
import ContactPage from "./Pages/Contact";
import HomePage from "./Pages/Home";
import ProjectPage from "./Pages/Project";
import ServicePage from "./Pages/Service";

const App = ()=>{

  return(
<div>
  <BrowsrRouter>
    <Routes>
       <Route path="/" element={<HomePage/>}/>
       <Route path="/about" element={<AboutPage/>}/>
       <Route path="/blog" element={<BlogPage/>}/>
       <Route path="/project" element={<ProjectPage/>}/>
       <Route path="/service" element={<ServicePage/>}/>
       <Route path="/contact" element={<ContactPage/>}/>

    </Routes>
  
  </BrowsrRouter>
  

</div>

);



}
export default App;
