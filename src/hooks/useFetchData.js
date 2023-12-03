// useFetchData.js
import {useEffect, useState} from "react";

const useFetchData = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(url);
                if (!isMounted) return;
                if (!response.ok) {
                    setIsLoading(false)
                    throw new Error("Failed to fetch data!!!")
                }
                setIsLoading(false)
                const result = await response.json();
                if (isMounted) {
                    setIsLoading(false)
                    setData(result);
                    setError(null);
                }
            } catch (error) {
                if (isMounted)
                    setIsLoading(false)
                setError(error);
            }
        };
        fetchData();

        return () => {
            isMounted = false;
        };
    }, [url]);

    return [isLoading, data, error];
};

export default useFetchData;
