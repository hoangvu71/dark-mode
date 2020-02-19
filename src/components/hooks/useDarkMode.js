import {useEffect} from "react"
import useLocalStorage from "./useLocalStorage"
const useDarkMode = (key, initialValue) => {
    const [value, setValue] = useLocalStorage('DarkModeBaby!');
    useEffect(() => {
        console.log("This is from useEffect",value);
        if (value) {
            document.body.classList.add("dark-mode")
        }
        else {
            document.body.classList.remove("dark-mode")
        }
    },[value])
    return [value, setValue]
}

export default useDarkMode
