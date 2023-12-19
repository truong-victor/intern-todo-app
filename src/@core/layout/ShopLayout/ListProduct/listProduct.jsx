import React, { useEffect, useState } from "react";

import { productServiceHome } from "../../../services/ProductServiceHome";

import { useNavigate } from "react-router";
import {useRequest} from "ahooks"
import { Box, CircularProgress, Pagination } from "@mui/material";

export default function ListProductHome({props}){

        const navigate = useNavigate()

        const [padding, setPadding] = useState(
            {
                page:1, 
                pageSize: 3
              }
        )

        const{
            data:listData,
            loading: loadingLisData,
            run: fetchListData,
            } = useRequest(productServiceHome.search,
            {
              manual: true
            })
            console.log("listData", listData)
            console.log("loading", loadingLisData)
            console.log("fetchListData", fetchListData)

            const handleChange = (_, page) =>{
                setPadding(prev => ({...prev, page}))
            }

        useEffect(() => {
            fetchListData({params:padding})
        },[JSON.stringify(padding)])



    return(
        <>
            <Box className="flex">
                {
                    loadingLisData
                    ?(
                    <div className="flex w-full justify-center">
                        <CircularProgress/>
                    </div>)
                    :(
                        listData?.data?.dataTable?.map((row) =>(
                            
                            <div 
                            className="w-20/100 p-[10px] border border-grey-400" 
                            key={row?.id}
                            onClick={() => navigate(`product/${row.id}`)}
                            >
                            <img className="" src={row?.avatar} alt="" />
                            <h2>{row?.name}</h2>
                            <p className="text-[#575757] line-through text-[14px] font-400">
                              {row?.price?.toLocaleString()}
                            </p>
                            <h3 className="font-700 text-[20px] text-[#be1f2d] font-sans-serif">
                              {row?.salePrice?.toLocaleString()}
                            </h3>
                          </div>
                        ))
                    )
                }    
            </Box>  

                <Pagination count={Math.floor(listData?.data?.totalCount / padding?.pageSize)+1}
                onChange={handleChange}/>        
        </>
    );
}