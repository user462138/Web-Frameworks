import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";




export const ThemeButton = () => {
    const {theme,setTheme} = useContext(ThemeContext);

    const handlePrimaryColorChange = () => {
        const newBackgroundColor = theme === "#242424" ? "#F6F7F9" : "#242424";
        const newColor = theme === "#242424" ? "#242424" : "#F6F7F9";
        setTheme(newBackgroundColor);
        document.documentElement.style.setProperty('--background-color', newBackgroundColor);
        document.documentElement.style.setProperty('--color', newColor);
      };
      
    return (
        <>
            <button onClick={handlePrimaryColorChange}>Toggle theme!</button>
        </>
    )
}