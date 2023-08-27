import activeSection from "./utils/activeSection";
import classes from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./sections/Home/Home";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import { useEffect, useState } from "react";

const App = ()=>{

    const [ scrollPosition, setScrollPosition ] = useState(0);

    return(
        <>
            <Navbar />

            <Home />
            <Skills />
            <Projects />


        </>
    )

    
};

export default App;