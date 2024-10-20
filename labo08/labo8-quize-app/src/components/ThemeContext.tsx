import React, { useState } from "react";
import { IThemeContext } from "../types";

export const ThemeContext = React.createContext<IThemeContext>({theme: "#242424", setTheme: (_theme: string) => {}});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState("#242424");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}