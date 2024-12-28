import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import About from "./components/About";
function App() {
return (
<Router>
<div>
<div className="container">
<div className="columns">
<div className="column is-half is-offset-one-quarter">
<Routes>
<Route path="/" element={<ProductList />} />
<Route path="/add" element={<AddProduct />} />
<Route path="/edit/:id" element={<EditProduct />} />
</Routes>
</div>
</div>
</div>
</div>
</Router>
)
}
export default App;