import React from "react";

import "./SearchBarResults.css"

import { useNavigate } from "react-router";

export default function SearchBarResults({results}) {

    const navigate = useNavigate()
    console.log("resultsadmin", results)



    return(
        <>
            <div
            className="search-result">
                {results.map((row) => (
                    <div
                    onClick={() => navigate(`/admin/product/detail/${row.id}`)}>{row.name}</div>
                ))}
            </div>
        </>
    );
}