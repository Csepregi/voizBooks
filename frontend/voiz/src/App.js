import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";


const GET_BOOKS = gql`
  {
    books {
      id
      name,
      author,
      image
    }
  }
`
function App() {
  const { data, loading, error } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  console.log(data);

  return (
    <React.Fragment>
      <h1>
        Books
      </h1>

      <div className="container">

        {data && data.books &&
          data.books.map((book, index) => (

            <div key={index} className="card">

              <img src={book.image} />
              <div class="card-body">
                <h3>{book.name}</h3>
                <h4>{book.author}</h4>
              </div>
            </div>

          ))}
      </div>
    </React.Fragment>
  );
}

export default App;