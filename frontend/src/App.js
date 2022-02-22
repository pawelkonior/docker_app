import './App.css';
import {useState} from "react";

function App() {
    const [responses, setResponses] = useState([]);

    const handleRequest = () => {
        fetch('api/v1/get')
            .then(response => response.json())
            .then(data => setResponses(prev => [...prev, data]))
            .catch(() => {
            });
    }

    return (
        <div className="App">
            <button onClick={handleRequest}>Make request</button>
            <div>
                {responses.map(response => <pre key={response}>{JSON.stringify(response, null, 2)}</pre>)}
            </div>
        </div>
    );
}

export default App;
