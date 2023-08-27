import classes from "./CardWID.module.css";

const CardWID = (props) => {

    return(
        <div className={classes.card}>
            <h5 className="text-white text-lg lg:text-xl">
                { props.title }
            </h5>
            <img class=" h-14 lg:h-24 w-auto m-auto" src={props.image} />
            <p className="text-white lg:text-lg  text-base max-w-xs mt-5">
                { props.description }
            </p>
        </div>
    );
};  

export default CardWID;