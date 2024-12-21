import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser";
import Users from "./components/Users";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />}></Route>
          <Route path="/create" element={<CreateUser />}></Route>
          <Route path="/update/:id" element={<UpdateUser />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
