import classes from "./Navbar.module.css";

const Navbar = ()=> {

    return(
        <nav className={classes.navbar}>
            <ul className={classes.navbarUl}>
                <li className={classes.navbarLi}>
                    <a className={classes.navbarLinks} href="#home">
                        Home
                    </a>
                </li>
                <li className={classes.navbarLi}>
                    <a className={classes.navbarLinks}>
                        Skills
                    </a>
                </li>
                <li className={classes.navbarLi}>
                    <a className={classes.navbarLinks}>
                        Projects
                    </a>
                </li>
                <li className={classes.navbarLi}>
                    <a className={classes.navbarLinks}>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;

