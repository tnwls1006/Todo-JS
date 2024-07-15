import React from 'react';
import { themes } from './style/Theme';
import { useTheme } from '../hooks/useTheme';
import styled from 'styled-components';

export default function ThemeButton() {
    const { theme, ThemeButton } = useTheme();

    return (
        <ThemeBtn type="button" mode={theme} onclick={() => toggleTheme()}>
            {theme === 'light' ? themes.dark.mode : themes.light.mode}
        </ThemeBtn>
    );
}

const ThemeBtn = styled.button`
    color: ${(props) => props.mode === 'dark' && 'light'};
    background-color: transparent;
    border: none;
`;
