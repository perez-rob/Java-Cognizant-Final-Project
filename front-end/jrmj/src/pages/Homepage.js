import { Header, Footer, ShoeCard } from "../components";
import Shoebanner from "../images/Shoebanner.jpg";

function Homepage() {
    return (
        <>
     <Header />
     
     <div className="content">
         {/* Leave this here for now to fix content from going behind navbar */}
         <div className="hack-component"></div>
         <div className="hero"><img className="banner" src={ Shoebanner} alt="Banner with 2 shoes" /><img className="banner-others" src={ Shoebanner} alt="Banner with 2 shoes" /><img className="banner-others" src={ Shoebanner} alt="Banner with 2 shoes" /></div>
         <div>
         <h1 className="text-center">Shop Our Collection!</h1>
         <div className="results-wrapper"><button className="filter-button">Filter ↓</button><p className="results">008 Results</p></div>
         </div>
         <div className="multi-card-wrapper">
             {/* These will be mapped in eventually and the wrapper div will get moved to shoecard component*/}
     <ShoeCard />
     <ShoeCard />
     <ShoeCard />
     <ShoeCard />
     <ShoeCard />
     <ShoeCard />
     <ShoeCard />
     <ShoeCard />
     
        </div>
    

     <Footer />
     </div>
        </>
    );
  }
  
  export default Homepage;