import React from "react";

import SelectAddress from "./SelectAddress";

export default function Address() {
    return(
        <>
        <div>
            <h2 className="font-semibold text-xl py-4">Địa chỉ cho thuê</h2>
                <div>
                    <div>
                        <SelectAddress/>
                        <SelectAddress/>
                    </div>
                </div>
            <input type="text" readOnly className="border border-gray-200 outline-none rounded-md bg-gray-100 p-2 w-full" />
        </div>


        </>
    );
}