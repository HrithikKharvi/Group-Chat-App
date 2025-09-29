import { useState, useEffect } from 'react';

function useApiHook(url, options) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url, options);
            if (!response.ok) throw new Error(`Error fetching data from the url : ${url}`);
            const result = await response.json();
            setData(result);
        }

        fetchData();
    }, [url, JSON.stringify(options)]);

    return { data };
}


export default useApiHook;
