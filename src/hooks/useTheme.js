import { useContext } from 'react';
import { ThemeProvider } from '../component/style/ThemeProvider';

export function useTheme() {
    const [theme, setTheme] = useContext(ThemeProvider);

    const toggleTheme = () => {
        setTheme((t) => (t === 'light' ? 'dark' : 'light'));
    };

    // const onChangeTheme = useCallback(() => {
    //     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    // }, []);

    return { theme, toggleTheme };
}
