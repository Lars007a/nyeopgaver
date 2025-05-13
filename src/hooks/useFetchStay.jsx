import { useEffect, useState } from "react";

export const useFetchStays = () => {
  const [stays, setStays] = useState([]);
  const [stayError, setStayError] = useState(null);
  const [stayIsLoading, setStayIsLoading] = useState(false);

  const fetchStays = async () => {
    setStayIsLoading(true);

    try {
      const response = await fetch("http://localhost:3043/products");
      const data = await response.json();
      console.log(data);
      setStays(data.data);
      return data.data;
    } catch (stayError) {
      setStayError("Der skete en fejl");
    } finally {
      setStayIsLoading(false);
    }
  };

  // Create stay
  const createStay = async (stayData) => {
    setStayIsLoading(true);

    try {
      const response = await fetch("http://localhost:3043/product", {
        method: "POST",
        body: stayData,
      });

      if (response.status === "stayError") {
        throw new Error("stayError creating product");
      }

      const result = await response.json();
      return result;
    } catch (stayError) {
      console.log(stayError);
    } finally {
      setStayIsLoading(false);
    }
  };

  // Refetch
  const stayRefetch = () => {
    return fetchStays();
  };

  //Update stay
  const updateStay = async (stayData) => {
    try {
      const response = await fetch(`http://localhost:3043/product`, {
        method: "PUT",
        body: stayData,
      });

      if (response.status === "stayError") {
        console.log("stayError");
      }

      const result = await response.json();
      console.log(result);
      return result;
    } catch (stayError) {
      console.log(stayError);
    }
  };

  // Delete product
  const deleteStay = async (id) => {
    try {
      const response = await fetch(`http://localhost:3043/product/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();
      console.log(data);
    } catch (stayError) {
      console.log(stayError);
    }
  };

  // Get by ID
  const fetchStayById = async (id) => {
    try {
      const response = await fetch(`http://localhost:3043/product/${id}`);
      const data = await response.json();
      return data.data;
    } catch (stayError) {
      console.log(stayError);
    }
  };

  useEffect(() => {
    fetchStays();
  }, []);

  return {
    stays,
    fetchStays,
    createStay,
    updateStay,
    deleteStay,
    fetchStayById,
    stayRefetch,
    stayIsLoading,
    stayError,
  };
};
