import { useGetWebsitesQuery } from "./features/api/apiSlice";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { HomePage } from "./features/pages/HomePage";
import { Navigation } from "./app/Navbar";
import { Background } from "./features/pages/Background";
import { Login } from "./features/login/Login"
import { Signup } from "./features/login/Signup"

function App() {

  const { data: websites } = useGetWebsitesQuery()
  console.log(websites)
  return (
    <div className="App">
      <Router>
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
