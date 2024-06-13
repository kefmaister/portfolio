import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { GET_SEARCH_DATA } from "../../graphql/queries";
import styles from "./results.module.css";

const SearchResults = () => {
  const { searchTerm } = useParams();
  const { loading, error, data } = useQuery(GET_SEARCH_DATA, {
    variables: { _search: searchTerm },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error.message}</p>;

  const searchResults = data;
  console.log(searchResults);
  return (
    <div className={styles.container}>
      <h1>Search Results for: {searchTerm}</h1>
      <div>
        {Object.keys(searchResults).map((key) => {
          if (searchResults[key] && searchResults[key].length > 0) {
            return (
              <div key={key}>
                {key === "skillsets" ? (
                  <Link to="/skills">
                    <h2>{key}</h2>
                  </Link>
                ) : (
                  <h2>{key}</h2>
                )}
                {searchResults[key].map((item, index) => (
                  <div key={index}>
                    {key === "projects" && (
                      <Link to={`/project/${item.slug}`}>
                        <h3 className={styles.title}>{item.title}</h3>
                      </Link>
                    )}
                    {key === "skillsets" && <h3>{item.name}</h3>}
                    {key === "services" && (
                      <Link
                        to={
                          item.slug === "developer"
                            ? "/projects"
                            : `/service/${item.slug}`
                        }
                      >
                        {" "}
                        <h3 className={styles.title}>{item.title}</h3>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default SearchResults;
