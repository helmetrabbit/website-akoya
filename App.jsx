import React from 'react';
import Homepage from './components/Homepage';
import AIInterface from './components/AIInterface';

function App() {
    const isAIInterface = window.location.hostname === 'ai.akoyalabs.org';

    return (
        <div>
            {isAIInterface ? <AIInterface /> : <Homepage />}
        </div>
    );
}

export default App;
