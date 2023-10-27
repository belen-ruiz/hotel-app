import { useContext, createContext, useState, useId } from "react";

const UsersContext = createContext([]);

export const useUsersContext = () => useContext(UsersContext);

export const UserProvider = ({ children }) => {

    const [form, setForm] = useLocalStorage("user", []);
    const [buyersData, setBuyersData] = useState()
    const orderId = useId()

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    
    const handleOnChange = (e) => {
        setBuyersData({
            ...buyersData,
            [e.target.name]: e.target.value,  
            orderId,           
        });
        
        return buyersData
        
    };

    const handleSubmit = () => {
        console.log(form);
    };
    
    console.log(buyersData)

    return (
        <UsersContext.Provider
            value={{
                form,
                handleChange,
                buyersData,
                handleOnChange,
                handleSubmit,
                orderId
            }}
        >
            {children}
        </UsersContext.Provider>
    );
};



export const useLocalStorage = (key, defaultValue) => {

    const [storedValue, setStoredValue] = useState(()=>{
        try {
            const value = localStorage.getItem(key);

            if(value){
                return JSON.parse(value);
            } else {
                localStorage.setItem(key, JSON.stringify(defaultValue));
                return defaultValue;
            }
            
        } catch (error) {
            return defaultValue;
        }
    });

    const setValue = newValue => {
        try {
            localStorage.setItem(key, JSON.stringify(newValue));
        } catch (error) {
            console.log(error);
        }
        setStoredValue(newValue);
    };

    return [storedValue, setValue];

}
