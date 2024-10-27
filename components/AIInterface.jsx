import React, { useState } from 'react';

function AIInterface() {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const res = await fetch(`${import.meta.env.VITE_API_URL}/query`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ input: query })
        });

        const data = await res.json();
        setResponse(data.response);
        setLoading(false);
    };

    return (
        <div>
            <h1>Ask Akoya AI</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Type your question..."
                />
                <button type="submit">Submit</button>
            </form>
            {loading ? <p>Loading...</p> : <p>{response}</p>}
        </div>
    );
}

export default AIInterface;
