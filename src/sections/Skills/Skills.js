import classes from './Skils.module.css';
import data from "./../../utils/SkillCards/data";
import SkillCard from '../../components/SkillCard/SkillCard';

const Skills = () =>{
    return(
        <section id="skills" className='items-start justify-start w-full px-4 flex-col'>
            <div className="flex flex-wrap w-full gap-4">
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
        </section>
    )
};

export default Skills;