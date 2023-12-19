import React, { useState, useEffect } from "react";
import { useRequest } from "ahooks"
import { productService } from "../../../../Admin/Product/service/ProductService";
import { CircularProgress, TextField } from "@mui/material";



export default function SearchBarAdmin({setResults}) {

    const[input, setInput] = useState("")
    const token = sessionStorage.getItem("accessToken");
    const fetchData = (value) => {

        try {
            fetch("http://localhost:8888/api/v1/admin/product?pageSize=10&page=1",{
                headers: { "x-access-token": token },
                method: "GET",
          })
          .then((response) => {
            return response.json()
          })
          .then((json) => {
            const getData = json?.data?.dataTable
            const results =  getData.filter((product) => {
                console.log(product)
                return (
                    product &&
                    product.name.toLowerCase().includes(value)
                );
            });
            setResults(results)

          });
            
        } catch (error) {
            new Error("error")
        }
    }
        
        const handleChange = (value) => {
            setInput(value)
            fetchData(value)

            console.log("value", value)
        }

    return(
        <>
            <TextField type="text" placeholder="search" 
            className="w-80"
            value={input}
            onChange={e => handleChange(e.target.value)}/>
        </>
    );
    
}