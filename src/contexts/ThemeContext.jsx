import React, { createContext, useState, useEffect, useContext } from 'react';
import { themes } from '../components/themes';

const ThemeContext = createContext();

// Toggle Button Component
export const ToggleTheme = () => {
    const { currentTheme, toggleTheme } = useContext(ThemeContext);

    const getCurrentThemeName = () => {
        switch (currentTheme) {
            case 'light':
                return 'White';
            case 'dark':
                return 'Black';
            case 'original':
                return 'Original';
            default:
                return 'Original';
        }
    }

    const getNextThemeName = () => {
        const themeOrder = ['original', 'light', 'dark'];
        const currentIndex = themeOrder.indexOf(currentTheme);
        const nextIndex = (currentIndex + 1) % themeOrder.length;
        const nextTheme = themeOrder[nextIndex];
        
        switch (nextTheme) {
            case 'light':
                return 'White';
            case 'dark':
                return 'Black';
            case 'original':
                return 'Original';
            default:
                return 'Original';
        }
    }

    const getThemeClass = () => {
        return `toggle-theme-button theme-${currentTheme}`;
    }

    return (
        <div className='toggle-theme'>
            <button className={getThemeClass()} onClick={toggleTheme} title={`Current: ${currentTheme} mode`}>
                This is {getCurrentThemeName()} theme, switch to {getNextThemeName()}
            </button>
        </div>
    )
};

export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState('original');

    const applyTheme = (themeName) => {
        const theme = themes[themeName];
        if (!theme) return;

        // Apply theme to document root
        const root = document.documentElement;
        
        // Apply all theme properties as CSS custom properties
        Object.entries(theme).forEach(([key, value]) => {
            root.style.setProperty(`--${key}`, value);
        });

        // Apply specific styles
        document.body.style.backgroundColor = theme.bodyBackground;
    };

    useEffect(() => {
        applyTheme(currentTheme);
    }, [currentTheme]);

    const toggleTheme = () => {
        const themeOrder = ['original', 'light', 'dark'];
        const currentIndex = themeOrder.indexOf(currentTheme);
        const nextIndex = (currentIndex + 1) % themeOrder.length;
        setCurrentTheme(themeOrder[nextIndex]);
    };

    return (
        <ThemeContext.Provider value={{ currentTheme, toggleTheme, setCurrentTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}; 