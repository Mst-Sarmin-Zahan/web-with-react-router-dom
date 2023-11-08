

import Footer from './../components/Footer';
import Num from '../components/useState/countNum';
import FormSubmit from "../components/Form/NewFormSubmit";
import Button from '../components/Buttons/Button';
import Menu from '../components/Menu';

const ContactPage=()=>{
    return(
        <div>
            <Menu/>
            <h2>This is Contact Page </h2>
            <Num/>
            <Button/>
            <FormSubmit/>
            <Footer/>
        </div>
    )
}
export default ContactPage;