import React from 'react';
import useFetch from './useFetch';

function Joke() {
    const { data: joke, isLoading, errorMessage} = useFetch('https://official-joke-api.appspot.com/random_joke');

    
  return (
    <div>
        <h2>Joke API</h2>
        {isLoading && <div>Loading...</div>}
        { joke && (
            <div>{`${joke.setup} ${joke.punchline}`}</div>
        )}
        {errorMessage && <div>{errorMessage}</div>}
    </div>
  )
}

export default Joke