import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home/Home";
import List from "./Pages/list/List";
import Login from "./Pages/login/Login";
import New from "./Pages/new/New";
import Single from "./Pages/single/Single";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
                <Route index element={<List />}></Route>
                <Route path=":userId" element={<Single />}></Route>
                <Route path="new" element={<New />}></Route>
            </Route>
            <Route path="products">
                <Route index element={<List />}></Route>
                <Route path=":productId" element={<Single />}></Route>
                <Route path="new" element={<New />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
