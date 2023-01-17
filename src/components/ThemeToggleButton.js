import React from 'react';
import { ThemeContext } from './ThemeProvider';


const ThemeToggleButton = () =>{
    const {globalBg,changeGlobal} = React.useContext(ThemeContext);
    return (
       <>
       <button className={`btn btn-${globalBg}`} id="global-theme-toggler" onClick={changeGlobal}>Switch to {globalBg==='light'? 'dark' : 'light'} theme</button>
       </>
    )

}
export {ThemeToggleButton}