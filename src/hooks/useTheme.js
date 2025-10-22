import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function useTheme() {
    let contexts = useContext(ThemeContext);
    if (contexts === undefined) {
        new Error("theme context does not support this component");
    }
    return contexts;
}