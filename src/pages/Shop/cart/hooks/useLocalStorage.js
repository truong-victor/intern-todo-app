import { useEffect, useState } from "react"

const useLocalStorage = props =>{
    const {key, initValue} = props;
    const [state, setState] = useState(()=> {
        initLocalValue = localStorage.getItem(key);
        if(initLocalValue){
            return JSON.parse(initLocalValue)
        }
        return initValue});

        

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(state))
    },[JSON.stringify(state)]);         
    return [state,setState]
}

export default useLocalStorage