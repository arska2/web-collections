import { useGetWebsitesQuery } from "./features/api/apiSlice";
import { CategoryContainer } from "./features/categories/CategoryContainer";
import { WebsiteContainer } from "./features/websites/WebsiteContainer";



function App() {

  const { data: websites } = useGetWebsitesQuery()
  console.log(websites)
  return (
    <div className="App">
      <h1>Web Application</h1>
      <CategoryContainer />
      <WebsiteContainer />
    </div>
  );
}

export default App;
