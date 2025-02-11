import React, { useState } from "react";
import { FaStar } from "react-icons/fa"; // Star Icon for ratings
import Swal from "sweetalert2"; // SweetAlert2

// Sample review data
const sampleReviews = [
  { id: 1, name: "John Doe", rating: 5, review: "Amazing stay! The service was excellent and the room was comfortable." },
  { id: 2, name: "Jane Smith", rating: 4, review: "Great hotel with a beautiful view. Highly recommend!" },
  { id: 3, name: "Mark Lee", rating: 3, review: "Decent experience. The room was clean but could use some improvements." },
  { id: 4, name: "Alice Brown", rating: 5, review: "Unforgettable experience. Will definitely visit again." },
  { id: 5, name: "Charlie Green", rating: 4, review: "Good hotel. Friendly staff." },
  { id: 6, name: "Sarah White", rating: 4, review: "Clean rooms and nice location." },
  { id: 7, name: "David Black", rating: 5, review: "Excellent service and very clean rooms." },
  { id: 8, name: "Emma Gold", rating: 3, review: "Rooms are okay, could be better." },
  // Add more reviews here for testing
];

const Reviews = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rating, setRating] = useState(0); // Rating selected by the user
  const [reviewText, setReviewText] = useState(""); // Review text
  const [name, setName] = useState(""); // User's name
  const reviewsPerPage = 3;

  // Calculate index for reviews to display
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = sampleReviews.slice(indexOfFirstReview, indexOfLastReview);

  // Calculate total pages
  const totalPages = Math.ceil(sampleReviews.length / reviewsPerPage);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Handle review submission
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (rating === 0 || reviewText.trim() === "" || name.trim() === "") {
      Swal.fire({
        title: "Error!",
        text: "Please provide a name, rating, and review.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }
    const newReview = {
      id: sampleReviews.length + 1,
      name: name,
      rating,
      review: reviewText,
    };
    sampleReviews.push(newReview); // Adding the review to the sampleReviews array
    setReviewText("");
    setName("");
    setRating(0);

    // Show success SweetAlert
    Swal.fire({
      title: "Success!",
      text: "Thank you for your review!",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <section className="py-16 bg-gray-800 dark:bg-gray-50 duration-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-teal-600 dark:text-teal-600 mb-6">Customer Reviews</h2>
        <p className="text-lg text-gray-300 dark:text-gray-600 mb-6 max-w-4xl mx-auto">
          Hear from our happy guests! Check out their experiences and see why we are the preferred choice for luxury and comfort.
        </p>


        {/* Review List */}
        <div className="space-y-6 mb-8">
          {currentReviews.map((review) => (
            <div key={review.id} className="bg-gray-700 dark:bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center justify-center mb-6">
                {Array.from({ length: 5 }, (_, index) => (
                  <FaStar
                    key={index}
                    className={`text-xl ${index < review.rating ? "text-yellow-500" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <p className="text-gray-300 dark:text-gray-700">{review.review}</p>
              <p className="text-gray-400 dark:text-gray-500 mt-2">- {review.name}</p>
            </div>
          ))}
        </div>

        {/* Pagination with Toggle */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-teal-500 text-white rounded-lg disabled:bg-gray-400"
          >
            Prev
          </button>
          <span className="text-lg text-white dark:text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-teal-500 text-white rounded-lg disabled:bg-gray-400"
          >
            Next
          </button>
        </div>

        {/* Review Form */}
        <div className="bg-gray-700 dark:bg-white p-8 rounded-lg shadow-md mb-12 duration-1000">
          <h3 className="text-2xl font-semibold text-teal-600 dark:text-teal-600 mb-6">Leave a Review</h3>

          {/* Rating */}
          <div className="mb-4">
            <h4 className="text-xl text-gray-300 dark:text-gray-700 mb-2">Rate this hotel</h4>
            <div className="flex justify-center">
              {Array.from({ length: 5 }, (_, index) => (
                <FaStar
                  key={index}
                  className={`cursor-pointer text-2xl ${index < rating ? "text-yellow-500" : "text-gray-300"}`}
                  onClick={() => setRating(index + 1)}
                />
              ))}
            </div>
          </div>

          {/* Name Input */}
          <div className="mb-4">
          <input
            type="text"
            className="w-full p-4 bg-gray-800 dark:bg-gray-50 text-gray-300 dark:text-gray-600 rounded-lg shadow-sm border focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Review Text */}
          <div className="mb-4">
            <textarea
              rows="4"
              className="w-full p-4 bg-gray-800 dark:bg-gray-50 text-gray-300 dark:text-gray-600 rounded-lg shadow-sm border focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              placeholder="Write your review here..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            />
          </div>

          <button
            type="submit"
            onClick={handleReviewSubmit}
            className="w-full py-2 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition-all"
          >
            Submit Review
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
