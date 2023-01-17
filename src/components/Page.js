import React from 'react';
import { LocalThemedBox } from './LocalThemedBox';
import { ThemeContext } from './ThemeProvider';

const Page = () => {
    const {globalBg} = React.useContext(ThemeContext)
    return(
        <div className={`container bg-${globalBg}`} id="themed-page">
            <p id="themed-text-container" className={`txt-${globalBg}`}>
                lorem ipsum dolor iterit n stuff
            </p>
            <button className={`btn btn-${globalBg} txt-${globalBg}`} id="themed-button">Themed Button</button>
            <LocalThemedBox />
        </div>
    )
}

export { Page }