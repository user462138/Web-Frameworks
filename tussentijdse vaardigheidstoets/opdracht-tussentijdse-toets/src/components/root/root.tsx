import { Outlet, NavLink } from "react-router-dom";
import styles from "./Root.module.css"

export const Root = () => {


    return (
        <div className={styles.container}>
            <div className={styles.head}>
                Header
            </div>
            <div className={styles.nav}>
                <NavLink to="/" >Home</NavLink>
                <NavLink to="opdracht-1">Opdracht 1</NavLink>
                <NavLink to="opdracht-2">Opdracht 2</NavLink>
                <NavLink to="opdracht-3">Opdracht 3</NavLink>
            </div>
            <div className={styles.content}>
                <Outlet />
            </div>
            <div className={styles.footer}>
                Footer
            </div>
        </div>
    );
}
