import classes from "./SkillCard.module.css";

const SkillCard = ({ name, percentaje, image  }) =>{
    
    return (
        <div className={`${classes.SkillCard} text-white flex flex-col h-fit w-32`}>
            <img className={`${classes.SkillIcon}`} src={image} alt={`Logo de ${name}`}/>
        </div>
    )
};

export default SkillCard;