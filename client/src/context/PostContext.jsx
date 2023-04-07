import React, {createContext, useState} from 'react'
import axios from "axios"

export const PostContext = createContext();

export const PostContextProvider = ({children}) => {
    const [form, setForm] = useState({
        name: "",
        tc: "",
        date: ""
    })
    const createRandevu = async () => {
        try {
            await axios.post("http://localhost:5000/api/create", {
                name: form.name,
                tc: form.tc,
                tarih: form.date
            })
        } catch (error) {
            console.log("Hata: ", error)
        }
    }
    const data = {
        form,
        setForm,
        createRandevu
    }
    return(
        <PostContext.Provider value={data}>
            {children}
        </PostContext.Provider>
    )
}
