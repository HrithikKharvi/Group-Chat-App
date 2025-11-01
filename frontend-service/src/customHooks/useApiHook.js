import { useState, useEffect } from 'react';

function useApiHook(url, options) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error("Error making API call to the url : " + response.status);
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.log("error" + error);
                setError("Error making api call to endpoint : " + error);

            }
        }

        fetchData();
    }, [url, JSON.stringify(options)]);
    return [data, error];
}


export default useApiHook;
