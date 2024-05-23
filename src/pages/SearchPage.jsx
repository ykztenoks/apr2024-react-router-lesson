import { useSearchParams } from "react-router-dom";

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Get the values from the URL query strings
  // Example: http://localhost:5173/example?place=Miami&destType=Hotel
  // const place = searchParams.get("place");
  // const destType = searchParams.get("destType");
  const searchQuery = searchParams.get("searchQuery");
  console.log(searchQuery);
  return (
    <div>
      <h1>Search page</h1>
      <form action="">
        <input type="text" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchPage;
