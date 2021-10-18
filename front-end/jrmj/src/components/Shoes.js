import React, { useEffect } from 'react'
import api from "../api";
import { ShoeCard } from "../components";
import { useQuery } from 'react-query';



function Shoes({ currentFilter, setResultsNum }) {

   
    
    
    const { status, data, error } = useQuery(
        ['shoes', currentFilter.value],
        async () => await api.index(currentFilter)
    );
    
    useEffect(() => {
        if (data){
        setResultsNum(data.length)
        }
    },[data])
    
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














