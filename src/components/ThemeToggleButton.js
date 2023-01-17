import React from 'react';
import { ThemeContext } from './ThemeProvider';


const ThemeToggleButton = () =>{
    const {globalBg,changeGlobal} = React.useContext(ThemeContext);
    return (
       <>
       <button className={`btn-${globalBg==='light'?'light':'dark'}`} id="global-theme-toggler" onClick={changeGlobal}>Switch to {globalBg==='light'? 'light' : 'light'} theme</button>
       </>
    )

}
export {ThemeToggleButton}