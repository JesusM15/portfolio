import classes from './Skils.module.css';
import data from "./../../utils/SkillCards/data";
import SkillCard from '../../components/SkillCard/SkillCard';
import CardWID from '../../components/CardWID/CardWID';
import responsiveIcon from "./../../media/responsive.png";
import apiIcon from "./../../media/apiIcon.png";
import seoIcon from "./../../media/seoIcon.png";

const Skills = () =>{
    return(
        <section id="skills" className='items-start justify-around w-full px-4 flex-col'>
            
            <div className={`flex justify-center w-full flex-col items-center gap-4`}>

                <div className="flex flex-wrap lg:flex-nowrap gap-5">
                    <CardWID 
                        title={"Responsive design"}
                        description={"Design and develop fully responsive websites on all devices."}
                        image={responsiveIcon}
                    />
                    <CardWID 
                        title={"ApiREST"}
                        description={"API consumption, verification, documentation and creation."}
                        image={apiIcon}
                    />
                    <CardWID 
                        title={"SEO"}
                        description={"Use of good practices for greater reach."}
                        image={seoIcon}
                    />
                </div>
            </div>

            <div className='flex flex-row w-full'>
                <div className="flex justify-center items-center flex-grow">
                    <h4 className={`text-white text-2xl ${classes.skillsText}`}>
                        Skills
                    </h4>
                </div>
                <div className={`flex flex-wrap w-4/5 justify-center py-2 gap-4 max-h-36 overflow-y-auto ${classes.customScroll}`}>
                    {data.map((item) => ( 
                                <SkillCard 
                                    name={item.name}
                                    percentaje={item.percentaje}
                                    image={item.image}
                                />
                            )
                        )
                    }
                </div>
            </div>

        </section>
    )
};

export default Skills;