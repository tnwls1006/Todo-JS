import { createGlobalStyle, useTheme } from 'styled-components';
import { useTheme } from '../../hooks/useTheme';

const GlobalStyleComponent = createGlobalStyle`
    body{
        background-color: ${({ themes }) => themes.bgColor};
        color: ${({ themes }) => themes.textColor};
    }
`;

export const GlobalStyle = () => {
    const { theme } = useTheme();
    return <GlobalStyleComponent mode={theme} />;
};
