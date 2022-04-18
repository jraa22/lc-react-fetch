import React, { useEffect, useState } from 'react'

function Joke() {
    const [joke, setJoke] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() =>{
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(result => {
            console.log(result);
            setIsLoading(false);
            setJoke(`${result.setup} ${result.punchline}`);
        })
        .catch(error => {
            setIsLoading(false);
            setErrorMessage('There was an error');
        })
        ;
    }, []);
  return (
    <div>
        <h2>Joke API</h2>
        {isLoading && <div>Loading...</div>}
        { joke && (
            <div>{joke}</div>
        )}
        {errorMessage && <div>{errorMessage}</div>}
    </div>
  )
}

export default Joke