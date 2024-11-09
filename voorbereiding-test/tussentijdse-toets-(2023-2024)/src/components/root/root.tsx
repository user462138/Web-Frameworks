import { Outlet, NavLink } from "react-router-dom";
import styles from "./Root.module.css"
import { useState } from "react";

export const Root = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light';            
            const newBackgroundColor = newTheme === "dark" ? "#333333" : "#ffffff";
            const newTextColor = newTheme === "dark" ? "#ffffff" : "#000000";
            
            document.documentElement.style.setProperty('--background-color', newBackgroundColor);
            document.documentElement.style.setProperty('--color', newTextColor);
    
            return newTheme;
        });
    };
    

    return (
        <div className={styles.container}>
            <div className={styles.head}>
                Header
                <button onClick={() => toggleTheme()}>{theme}</button>
            </div>
            <div className={styles.nav}>
                <NavLink to="/" >Home</NavLink>
                <NavLink to="oefening1">Oefening 1</NavLink>
                <NavLink to="oefening2">Oefening 2</NavLink>
                <NavLink to="oefening3">Oefening 3</NavLink>
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
