import React, { useState, useContext } from 'react'
import App from './App';
import sublinks from './data'
const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [location, setLocation] = useState({})
    const [page, setPage] = useState({page:'', links:[]})
    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }
    const openSubmenu = (text, coordinates) => {
        // if text coming from the button matches the page value in our data, we have the correct page
        const page = sublinks.find((link) => link.page === text)
        setPage(page)
        setLocation(coordinates)
        setIsSubmenuOpen(true)
    }
    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    }

    return <AppContext.Provider value={{
        isSubmenuOpen,
        isSidebarOpen,
        location,
        page,
        openSubmenu,
        openSidebar,
        closeSubmenu,
        closeSidebar
    }}>{children}
    </AppContext.Provider>
}

// custom hook
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider };
