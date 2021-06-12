import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

// ALWAYS access children
const AppProvider = ({children}) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openSideBar = () => {
        setIsSideBarOpen(true);
    }
    const closeSideBar = () => {
        setIsSideBarOpen(false);
    }
    const openModal = () => {
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setIsModalOpen(false);
    }

    // ALWAYS return children
    return <AppContext.Provider value={{
        isModalOpen,
        isSideBarOpen, 
        openModal, 
        openSideBar, 
        closeModal, 
        closeSideBar,
    }}>{children}</AppContext.Provider>
}

// custom hook
export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider}
