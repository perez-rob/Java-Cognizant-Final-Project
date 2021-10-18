import React from 'react'
import { Select } from '@chakra-ui/react';


function Filters({ handler }) {
    return (
        <>
            <div>
                <Select
                    
                    icon={<></>}
                    name="category"
                    onChange={handler}
                    
                >   <option selected value="all">All Shoes</option>
                    <option value="Men">Men's</option>
                    <option value="Women">Women's</option>
                    

                </Select>

            </div>


        </>
    )
}



export default Filters;
