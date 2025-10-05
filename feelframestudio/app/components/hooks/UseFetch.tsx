import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';

// Define a type for Strapi's common pagination metadata
type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

// Define a type for the full metadata object
type Meta = {
  pagination: Pagination;
};

// Define the shape of a Strapi API response
type StrapiResponse<T> = {
  data: T;
  meta?: Meta;
};

// The generic type T is no longer set to 'any' by default
function useFetch<T>(url: string) {
  // Specify a more precise type for the state
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);
      try {
        // The Axios response is correctly typed
        const response = await axios.get<StrapiResponse<T>>(url);
        if (isMounted) {
          setData(response.data.data);
        }
      } catch (err) {
        if (isMounted) {
          // Cast the error to AxiosError for type safety
          setError(err as AxiosError);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup function to prevent memory leaks
    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;