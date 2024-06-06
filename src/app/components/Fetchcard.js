"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

const Fetchcard = () => {
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const fetchUrl = async () => {
    try {
      const response = await axios.get(apiKey);
      setCardData(response.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchUrl();
  }, []);

  return (
    <div className="text-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 custom-scrollbar">
        {loading ? (
          <h2 className="text-center text-gray-600">Loading Data...</h2>
        ) : (
          cardData.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              price={card.price}
              image={card.image}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Fetchcard;
