import classes from './Skils.module.css';
import data from "./../../utils/SkillCards/data";
import SkillCard from '../../components/SkillCard/SkillCard';

const Skills = () =>{
    return(
        <section id="skills" className='items-start justify-start w-full px-4 flex-col gap-12'>
            
            <div className={`flex justify-center w-full `}>
                <h4 className="text-white text-3xl text-center">
                    What I do
                </h4>
                
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