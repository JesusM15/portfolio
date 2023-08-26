import classes from "./Home.module.css";
import programmer from '../../media/programmer.png';
import Typed from 'typed.js';
import React from "react";

const Home = () =>{

    // Create reference to store the DOM element containing the animation
    const spanWrite = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(spanWrite.current, {
        strings: ['Software', 'Backend', 'Frontend', 'Databases', 'Arduino', 'Git'],
        startDelay: 300,
        typeSpeed: 120,
        backSpeed: 120,
        backDelay: 120,
        loop: true,
        });

        return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
        };
    }, []);

    return(
        <section id="home">
            <div class="flex items-center gap-3 lg:flex-nowrap flex-wrap lg:p-0 p-4 justify-center lg:justify-start">
                <div className="flex flex-col gap-3 w-fit max-w-lg xl:max-w-2xl flex-grow">
                    <h3 className="text-white text-6xl lg:text-7xl max-w-lg xl:text-8xl xl:max-w-2xl"> 
                        Hi, I'm Jesus <br></br>
                        <span className="d-block text-purple-600 " ref={spanWrite}></span>
                    </h3>   
                    <p className="text-gray-400 lg:text-base max-w-2xl xl:max-w-xl">
                        In this website you will see my Skills and Projects as a Software developer.
                        Somethings about me are that I enjoy learning new skills such as programming languages 
                        I started in this world since I was 15.  
                    </p>
                    <p className="text-gray-500 w-fit lg:text-base">
                        Front end / Backend / Databases / Arduino / AI
                    </p>
                </div>     
                <img src={programmer} className="lg:w-2/5 w-72 h-72 lg:h-auto opacity-60" alt="programmer img from portfolio JesusM15"/>
            </div>
        

        </section>
    )
};

export default Home;