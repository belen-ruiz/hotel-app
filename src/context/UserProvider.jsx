import { useContext, createContext, useState, useId } from "react";

const UsersContext = createContext([]);

export const useUsersContext = () => useContext(UsersContext);

export const UserProvider = ({ children }) => {

    const [form, setForm] = useLocalStorage("user", []);
   // const [user, setUser] = useState()
    const orderId = useId()

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
        console.log(form);

    };

    
    // const handleOnChange = (e) => {
    //     setUser({
    //         ...user,
    //         [e.target.name]: e.target.value,  
    //         orderId,           
    //     });
        
    //     return user
        
    // };

    // const handleSubmit = () => {
    //     console.log(form);
    // };
    
    //console.log(user)

    return (
        <UsersContext.Provider
            value={{
                form,
                handleChange,
                //user,
                // handleOnChange,
                //handleSubmit,
                //orderId
            }}
        >
            {children}
        </UsersContext.Provider>
    );
};



const useLocalStorage = (key, defaultValue) => {

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
