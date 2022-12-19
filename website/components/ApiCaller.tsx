import * as React from 'react';

export const ApiCaller: React.FC = () => {
    const [response, setResponse] = React.useState("Loading...");
    React.useEffect(() => {
        console.log('hello world');
    }, []);
    return (
        <div>{response}</div>
    )
}