import RecentList from "Pages/RecentList";
import ProductList from "Pages/ProductList";
import DetailedProduct from "Pages/DetailedProduct";
import { Route, HashRouter } from "react-router-dom";
import Test from 'Components/Test';

function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={ProductList} />
      <Route path="/product/:id" component={DetailedProduct} />
      <Route path="/product" exact={true} component={DetailedProduct} />
      <Route path="/recentList" component={RecentList} />
      <Route path="/test" component={Test} />
    </HashRouter>
  );
}

export default App;
