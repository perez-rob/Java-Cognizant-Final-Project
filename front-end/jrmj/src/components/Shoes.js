import React from 'react'
import api from "../api";
import { ShoeCard } from "../components";
import { useQuery } from 'react-query';



function Shoes({ currentFilter }) {

   
    
    
    const { status, data, error } = useQuery(
        ['shoes', currentFilter.value],
        () => api.index(currentFilter)

    );

    return (
        <>
            <div className="multi-card-wrapper">

                {status == "success" ?
                    data.map(shoe => <ShoeCard data={shoe} key={data.shoeID} />)
                    : null}

            </div>


        </>
    )
}



export default Shoes;














