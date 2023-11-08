import DomManipulate from "../components/useRef/useRefCurrent";
import About from "../components/About";
import IIF from "../components/IIFPractice";
import MyComponent from './../components/Buttons/Input';
import Menu from "../components/Menu";


const AboutPage=()=>{
    return(
        <div>
            <Menu/>
            <h2>This is About Page </h2>
            <About/>
            <DomManipulate/>
            <IIF/>
            <MyComponent/>

           
        </div>
    )
}
export default AboutPage;