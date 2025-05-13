import { useState, useEffect } from "react";

export const useFetchReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [reviewError, setReviewError] = useState(null);
  const [reviewIsLoading, setReviewIsLoading] = useState(false);

  // Get all reviews
  const fetchReviews = async () => {
    setReviewIsLoading(true);

    try {
      const response = await fetch("http://localhost:3043/reviews");
      const data = await response.json();
      console.log(data);
      setReviews(data.data);
      return data.data;
    } catch (reviewError) {
      setReviewError("something went wrong", reviewError);
    } finally {
      setReviewIsLoading(false);
    }
  };

  // Create review
  const createReview = async (reviewData) => {
    setReviewIsLoading(true);

    try {
      const response = await fetch("http://localhost:3043/review", {
        method: "POST",
        body: reviewData,
      });

      if (response.status === "reviewError") {
        throw new Error("reviewError creating review");
      }

      const result = await response.json();
      return result;
    } catch (reviewError) {
      console.log(reviewError);
    } finally {
      setReviewIsLoading(false);
    }
  };

  // Refetch
  const reviewRefetch = () => {
    return fetchReviews();
  };

  //Update review

  const updateReview = async (reviewData) => {
    try {
      const response = await fetch(`http://localhost:3043/review`, {
        method: "PUT",
        body: reviewData,
      });

      if (response.status === "reviewError") {
        console.log("reviewError");
      }

      const result = await response.json();
      console.log(result);
      return result;
    } catch (reviewError) {
      console.log(reviewError);
    }
  };

  // Delete review

  const deleteReview = async (id) => {
    try {
      const response = await fetch(`http://localhost:3043/review/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();
      console.log(data);
    } catch (reviewError) {
      console.log(reviewError);
    }
  };

  // Get by ID
  const fetchReviewById = async (id) => {
    try {
      const response = await fetch(`http://localhost:3043/review/${id}`);
      const data = await response.json();
      return data.data;
      console.log(data);
    } catch (reviewError) {
      console.log(reviewError);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return {
    reviews,
    fetchReviews,
    createReview,
    deleteReview,
    updateReview,
    fetchReviewById,
    reviewRefetch,
    reviewError,
    reviewIsLoading,
  };
};
