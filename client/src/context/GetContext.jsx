import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const GetContext = createContext();

export const GetContextProvider = ({ children }) => {
  const [veri, setVeri] = useState({ name: "", tc: "", tarih: "" });
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchData() {
      await axios
        .get("http://localhost:5000/api/getAll")
        .then((res) => {
          setVeri(res.data);
          setLoading(false)
        })
        .catch((error) => {
          console.log(error);
          setLoading(true)
        });
    }
    fetchData();
  }, []);
  return (
    <GetContext.Provider value={{veri, loading}}>
        {children}
    </GetContext.Provider>
  )
};
