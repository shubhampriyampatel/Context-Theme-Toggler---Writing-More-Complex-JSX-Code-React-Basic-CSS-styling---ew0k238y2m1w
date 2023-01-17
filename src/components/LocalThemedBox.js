import React from 'react';
import { ThemeContext } from './ThemeProvider';


const LocalThemedBox = () => {
    const {bg,changeBg} = React.useContext(ThemeContext)
    return(
        <div className={`bg-${bg}`} style={{width:'200px',height:'200px',border:'2px solid green'}} id="local-themed-box">
            {/* Write code below this line */}
            <p id="local-themed-text-container" className={`txt-${bg==='light'? 'light' : 'dark'}`}>Hii</p>
            <button className={`btn-${bg==='light'?'light':'dark'}`} id="local-theme-toggler" onClick={()=>changeBg(bg==='light'? 'dark' : 'light')}>Toggle local theme to {bg==='light'? 'dark' : 'light'}</button>
        </div>
    )
    }

export { LocalThemedBox }