import Service from "../components/Service";
import SetImage from "../components/useRef/ImageAttribute";
import Apicall1 from './../components/useEffect/APICalling';
import Num from "../components/useState/countNum";
import Menu from "../components/Menu";

const ServicePage=()=>{
    return(
        <div>
            <Menu/>
            <h2>This is Service Page </h2>
            <Service/>
            <SetImage/>
            <Apicall1/>
            <Num/>
        </div>
    )
}
export default ServicePage;