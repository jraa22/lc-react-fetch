import './App.css';
import { useState } from 'react';
import Reddit from './Reddit';
import Joke from './Joke';

function App() {
  const [redditVisible, setRedditVisible] = useState(false);
  const [jokeVisible, setJoketVisible] = useState(false);

  return (
    <div>
      <div className='buttons'>
        <button onClick={() => setRedditVisible(prevRedditVisible => !redditVisible)}>Toggle Redit</button>
        <button onClick={() => setJoketVisible(prevJoketVisible => !jokeVisible)}>Toggle Joke</button>
      </div>
      {redditVisible && <Reddit />}
      {jokeVisible && <Joke />}
    </div>
  );
}

export default App;
