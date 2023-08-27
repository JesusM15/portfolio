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
                    <a className={classes.navbarLinks} href="#skills">
                        Skills
                    </a>
                </li>
                <li className={classes.navbarLi}>
                    <a className={classes.navbarLinks} href="#projects">
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

