import React,{useState} from 'react';

const ThemeContext = React.createContext()
const ThemeProvider = (props) =>{
    const [globalBg,setGlobalBg] = useState('light')
    const [bg,setBg] = useState('light')


    const changeGlobal=()=>{
        let theme = globalBg==='light'? 'dark' : 'light'
        setGlobalBg(theme)
        console.log(globalBg)
        setBg(theme)
    }

    const changeBg = (bg)=>{
        setBg(bg)
    }
    return (
        <React.Fragment>
            <ThemeContext.Provider value={{globalBg,changeGlobal,bg,changeBg}}>
                {props.children}
            </ThemeContext.Provider>
        </React.Fragment>
    )
}

export {ThemeProvider,ThemeContext}