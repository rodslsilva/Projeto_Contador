import React, {Children, useState} from "react"

const CountdownContext = React.createContext(null)

const CountdownProvider = ({children}) => {
    const [event, SetEvent] = useState(null)

    return (
        <CountdownContext.Provider value={{event, SetEvent}}>
            {children}
        </CountdownContext.Provider>
    )
}

export {CountdownContext, CountdownProvider}