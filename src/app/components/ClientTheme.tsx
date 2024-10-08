"use client"

import { useEffect, useState } from "react"

export const useClientTheme = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        setIsDarkMode(mediaQuery.matches);
        
        const handleChange = (e : MediaQueryListEvent) => {
            setIsDarkMode(e.matches)
        }

        mediaQuery.addEventListener("change", handleChange);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        }
    }, []);

    return isDarkMode;
}