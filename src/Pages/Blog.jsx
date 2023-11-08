import Hero from "../components/Hero";
import Event from "../components/EventHandler/clickEvent";
import MyComponent from "../components/Buttons/Input";
import SetImage from "../components/useRef/ImageAttribute";
import Menu from "../components/Menu";

const BlogPage= ()=>{

   

    return(
        <div>
          <Menu/>
          <h2>This is Blog Page</h2>
          <Hero/>
          <Event/>
          <MyComponent/>
          <SetImage/>



        
          
            
            

        </div>
    )
}

export default BlogPage;