import Layout from "./components/Layout";
import "./App.scss";
import {Routes, Route} from 'react-router-dom'
import Main from "./pages/main/Main";
import Shop from "./pages/shop/Shop";
function App() {
  
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Shop />} />
      </Routes>
       
    </Layout>
  );
}

export default App;
