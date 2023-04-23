import { useGetWebsitesQuery } from "./features/api/apiSlice";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { HomePage } from "./features/pages/HomePage";
import { Navigation } from "./app/Navbar";



function App() {

  const { data: websites } = useGetWebsitesQuery()
  console.log(websites)
  return (
    <div className="App">
      <Router>
        <Navigation />


        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
