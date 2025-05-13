import { useEffect, useState } from "react";

export const useFetchReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getReviews = async () => {
    setLoading(true);

    try {
      const resp = await fetch("http://127.0.0.1:3043/reviews");
      if (!resp.ok) {
        throw new Error("Fejl med requesten");
      }
      const data = await resp.json();
      setReviews(data.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getReviews();
  }, []);

  return {
    reviews,
    loading,
    error,
  };
};
