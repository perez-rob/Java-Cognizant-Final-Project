import api from "../api";
import { Header, Footer, ShoeCard } from "../components";
import Shoebanner from "../images/Shoebanner.jpg";
import { useQuery } from 'react-query';
import { useConsumer } from "../utils/ConsumerContext";
import Filters from "../components/Filters";


const fetchShoes = async () => await api.index();

function Homepage() {

    const { currentUser, setCurrentUser } = useConsumer();
    console.log("CURRENT USER: ", currentUser)

    // shoes is the key
    const { status, data, error } = useQuery('shoes', fetchShoes)

    console.log(data, "homepage");


    return (
        <>
            <Header />
           
            <div className="content">
                <div className="hero"><img className="banner" src={Shoebanner} alt="Banner with 2 shoes" /><img className="banner-others" src={Shoebanner} alt="Banner with 2 shoes" /><img className="banner-others" src={Shoebanner} alt="Banner with 2 shoes" /></div>
                <div>

                    <h1 className="text-center">Shop Our Collection!</h1>
                    <div className="results-wrapper"><Filters data={data} />
                    {/* <div><p className="results"> {data.length} Results</p></div> */}
                    </div>
                </div>
                <div className="multi-card-wrapper">
                    {/* These will be mapped in eventually and the wrapper div will get moved to shoecard component*/}
                    {status == "success" ?
                        data.map(shoe => <ShoeCard data={shoe} key={data.shoeID} />)
                        : null}

                </div>


                <Footer />
            </div>
        </>
    );
}

export default Homepage;