import Project from "../components/Project";
import SCBtn from "../components/Buttons/SwitchCaseBtn";
import DomManipulate1 from "../components/useRef/ManyRef";
import IIF from "../components/IIFPractice";
import Menu from "../components/Menu";



const ProjectPage=()=>{
    return(
        <div>
            <Menu/>
            <h2>This is Project Page </h2>
            <Project/>
            <SCBtn/>
            <DomManipulate1/>
            <IIF/>
            

        </div>
    )
}
export default ProjectPage;