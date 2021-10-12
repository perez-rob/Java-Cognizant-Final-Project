import { Header, Footer, ShoeCard } from "../components";

function Homepage() {
    return (
        <>
     <Header />
     
     <div className="content">
         {/* Leave this here for now to fix content from going behind navbar */}
         <div className="hack-component"></div>
         <h1 className="text-center">This is homepage</h1>
         <div className="multi-card-wrapper">
             {/* These will be mapped in eventually and the wrapper div will get moved to shoecard component*/}
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