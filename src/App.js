import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import store from "./redux/store";
import "./index.css";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";

function App() {
  return (
    <Provider store={store}>

      <Navbar />

      <main className="py-12 2xl:px-6">
        <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
          <div className="order-2 xl:-order-1">
            <BookList/>
          </div>
          <div>
           <AddBook/>
          </div>
        </div>
      </main>
    </Provider>
  );
}

export default App;
