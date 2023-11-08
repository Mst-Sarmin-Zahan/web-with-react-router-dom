
import Header from "../components/Header";
import Button1 from "../components/Buttons/logIn";
import Num from "../components/useState/countNum";
import FormSubmit from "../components/Form/NewFormSubmit";
import Menu from "../components/Menu";

const HomePage=()=>{
  return(
      <div>
          <Menu/>
          <Header/>
          <Button1/>
          <Num/>
          <FormSubmit/>
      </div>
  )
}
export default HomePage;