import React from "react";
import "./../src/assets/css/output.css";
import Navbar from "./components/Navbar";
import ProductContainer from "./components/ProductContainer";
const App = () => {
  return (
    <div>
      <Navbar />
      <main class="py-16">
        <div class="productWrapper">

          {/* <!-- products container --> */}
          <ProductContainer />
          {/* <!-- products container ends --> */}

          <div>
            {/* <!-- Product Input Form --> */}
           
            {/* <!-- Product Input Form Ends --> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
