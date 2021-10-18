import React from 'react'
import { Select } from '@chakra-ui/react';


function Filters({ handler }) {
    return (
        <>
            <div>
                <Select
                    placeholder="Filter Results"
                    name="category"
                    onChange={handler}
                >
                    <option value="Men">Men's</option>
                    <option value="Women">Women's</option>
                    <option value="all">All Shoes</option>

                </Select>
                <div> </div>

            </div>


        </>
    )
}



export default Filters;
