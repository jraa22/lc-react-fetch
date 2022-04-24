import React from 'react';
import useFetch from './useFetch';
import { useQuery} from 'react-query'

function Joke() {
    //const { data: joke, isLoading, errorMessage} = useFetch('https://official-joke-api.appspot.com/random_joke');
    const fetchJoke = () => {
      return fetch('https://official-joke-api.appspot.com/random_joke').then(response => response.json());
  };

  const { data: joke, isLoading, isError, error, isSuccess} = useQuery('joke', fetchJoke, {
    //staleTime: 6000,
    refetchOnWindowFocus: false,
  });


    
  return (
    <div>
        <h2>Joke API</h2>
        {isLoading && <div>Loading...</div>}
        { isSuccess && (
            <div>{`${joke.setup} ${joke.punchline}`}</div>
        )}
        {isError && <div>{error.message}</div>}
    </div>
  )
}

export default Joke