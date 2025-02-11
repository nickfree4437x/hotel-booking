import React, { useState } from "react";
import dest from './dest.jpg';
import hotel from './hotel.jpg';
import five from './five-star.jpg';
import packing from './packing.jpg';
import honey from './honey.jpg';
import advance from './advance.jpg';

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Travel Destinations in 2025",
    description: "Explore the best travel destinations for 2025 and make your vacations memorable.",
    fullText: "Here is the full blog article with all the details...",
    image: dest,
    category: "Travel",
    featured: true,
  },
  {
    id: 2,
    title: "How to Find the Best Hotel Deals",
    description: "Learn how to find the best hotel deals and save money on your next trip.",
    fullText: "Complete guide on how to save money while booking hotels...",
    image: hotel,
    category: "Hotels",
    featured: true,
  },
  {
    id: 3,
    title: "5-Star Hotels vs Budget Stays",
    description: "Which one is better? Understand the pros and cons of luxury hotels vs budget stays.",
    fullText: "Detailed comparison of luxury hotels vs budget stays...",
    image: five,
    category: five,
    featured: false,
  },
  {
    id: 4,
    title: "Packing Tips for Your Next Trip",
    description: "A complete guide on what to pack for your travels to stay light and prepared.",
    fullText: "Step-by-step packing guide with a checklist...",
    image: packing,
    category: "Travel",
    featured: false,
  },
  {
    id: 5,
    title: "Best Honeymoon Destinations",
    description: "Planning your honeymoon? Here are the most romantic places for couples.",
    fullText: "Full list of best honeymoon destinations with travel tips...",
    image: honey,
    category: "Offers",
    featured: true,
  },
  {
    id: 6,
    title: "Why You Should Book in Advance",
    description: "Discover the benefits of booking your hotel and flights in advance.",
    fullText: "Detailed explanation of why early booking saves money...",
    image: advance,
    category: "Offers",
    featured: false,
  },
];

const categories = ["All", "Travel", "Hotels", "Offers"];

const Blog = () => {
  const [expandedBlog, setExpandedBlog] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter blogs based on selected category
  const filteredBlogs =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((blog) => blog.category === selectedCategory);

  // Toggle Read More feature
  const handleReadMore = (id) => {
    setExpandedBlog(expandedBlog === id ? null : id);
  };

  return (
    <section className="py-16 bg-gray-900 dark:bg-gray-100 duration-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-teal-600 dark:text-teal-600 mb-6">
          Latest Blog Articles 📝
        </h2>
        <p className="text-lg text-gray-300 dark:text-gray-600 mb-8">
          Stay updated with the best travel tips, hotel guides, and exclusive offers.
        </p>

        {/* Categories Filter */}
        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                selectedCategory === category
                  ? "bg-teal-500 text-white"
                  : "bg-gray-600 dark:bg-gray-200 text-gray-300 dark:text-gray-700 hover:bg-teal-500 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Blogs Section */}
        {filteredBlogs.some((blog) => blog.featured) && (
          <div>
            <h3 className="text-3xl font-semibold text-gray-300 dark:text-gray-600 mb-4">
              🌟 Featured Blogs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {filteredBlogs
                .filter((blog) => blog.featured)
                .map((blog) => (
                  <div
                    key={blog.id}
                    className="bg-gray-700 dark:bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
                  >
                    {/* Blog Image */}
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-48 object-cover"
                    />
                    {/* Blog Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold text-white dark:text-gray-800 mb-2">
                        {blog.title}
                      </h3>
                      <p className="text-gray-300 dark:text-gray-600">
                        {expandedBlog === blog.id ? blog.fullText : blog.description}
                      </p>
                      <button
                        onClick={() => handleReadMore(blog.id)}
                        className="mt-4 bg-teal-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-600 transition-all"
                      >
                        {expandedBlog === blog.id ? "Show Less" : "Read More"}
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs
            .filter((blog) => !blog.featured)
            .map((blog) => (
              <div
                key={blog.id}
                className="bg-gray-700 dark:bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
              >
                {/* Blog Image */}
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                {/* Blog Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white dark:text-gray-800 mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-300 dark:text-gray-600">
                    {expandedBlog === blog.id ? blog.fullText : blog.description}
                  </p>
                  <button
                    onClick={() => handleReadMore(blog.id)}
                    className="mt-4 bg-teal-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-600 transition-all"
                  >
                    {expandedBlog === blog.id ? "Show Less" : "Read More"}
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
