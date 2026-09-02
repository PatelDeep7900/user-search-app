import { useEffect, useState } from "react";

interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export default function useFetch<T>(url: string): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMount = false;
    async function loadUser() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: T = await res.json();
        if (!isMount) setData(data);
      } catch (err) {
        if (!isMount)
          setError(err instanceof Error ? err.message : "something is wrong!");
      } finally {
        if (!isMount) setLoading(false);
      }
    }
    loadUser();
    return () => {
      isMount = true;
    };
  }, [url]);

  return { data, loading, error };
}
