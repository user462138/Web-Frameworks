import { Outlet, NavLink } from "react-router-dom";
import styles from "./App.module.css";

export const Root = () => {
    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <NavLink to="quiz/Easy" >Easy</NavLink>
                <NavLink to="quiz/Medium">Medium</NavLink>
                <NavLink to="quiz/Hard">Hard</NavLink>
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

export const Home = () => {
    return (
        <>
            <div className={styles.nav}>
                <NavLink to="quiz/Easy" >Easy</NavLink>
                <NavLink to="quiz/Medium">Medium</NavLink>
                <NavLink to="quiz/Hard">Hard</NavLink>
                <NavLink to="quiz">Quiz</NavLink>
            </div>
        </>
    );
}
