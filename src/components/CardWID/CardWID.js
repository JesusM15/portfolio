import classes from "./CardWID.module.css";

const CardWID = (props) => {

    return(
        <div className={classes.card}>
            <h5 className="text-white">
                { props.title }
            </h5>

        </div>
    );
};  

export default CardWID;