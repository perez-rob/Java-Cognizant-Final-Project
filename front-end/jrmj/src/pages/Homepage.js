import api from "../api";
import { Header, Footer, ShoeCard } from "../components";
import Shoebanner from "../images/Shoebanner.jpg";
import { useQuery } from 'react-query';
import { useConsumer } from "../utils/ConsumerContext";
import Filters from "../components/Filters";
import Shoes from "../components/Shoes";
import { useState } from 'react';


function Homepage() {

    const { currentUser, setCurrentUser } = useConsumer();

    const [ resultsNum, setResultsNum ] = useState(0);

    const [currentFilter, setCurrentFilter] = useState({ type: "category", value: "all" });

    function handleChange(e) {
        setCurrentFilter(() => ({
            type: e.target.name,
            value: e.target.value.toLowerCase(),
        }));
    }

    return (
        <>
            <Header />


            <div className="content">
                <div className="hero"><img className="banner" src={Shoebanner} alt="Banner with 2 shoes" /><img className="banner-others" src={Shoebanner} alt="Banner with 2 shoes" /><img className="banner-others" src={Shoebanner} alt="Banner with 2 shoes" /></div>
                <div>
                    <h1 className="text-center">Shop Our Collection!</h1>

                    <div className="results-wrapper"><Filters handler={handleChange} /><p className="results"> {resultsNum} Results</p></div>

                    {currentFilter.type ? (
                        <Shoes currentFilter={currentFilter} setResultsNum={setResultsNum}/>
                    ) : null}


                </div>


                <Footer />
            </div>

        </>
    );
}

export default Homepage;