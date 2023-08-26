import classes from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./sections/Home/Home";
import Skills from "./sections/Skills/Skills";

const App = ()=>{

    return(
        <>
            <Navbar />

            <Home />
            
            <Skills />
        </>
    )

    
};

export default App;