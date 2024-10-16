import React from "react";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  // Dummy blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet, consectetur",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et dapibus lorem, eget pellentesque mauris.",
      image: "/path-to-image/blog-image.jpg",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet, consectetur",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et dapibus lorem, eget pellentesque mauris.",
      image: "/path-to-image/blog-image.jpg",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet, consectetur",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et dapibus lorem, eget pellentesque mauris.",
      image: "/path-to-image/blog-image.jpg",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet, consectetur",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et dapibus lorem, eget pellentesque mauris.",
      image: "/path-to-image/blog-image.jpg",
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit amet, consectetur",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et dapibus lorem, eget pellentesque mauris.",
      image: "/path-to-image/blog-image.jpg",
    },
    {
      id: 6,
      title: "Lorem ipsum dolor sit amet, consectetur",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et dapibus lorem, eget pellentesque mauris.",
      image: "/path-to-image/blog-image.jpg",
    },
  ];

  return (
    <section className="py-16 bg-black text-white">
      {/* Banner Image with Red Border */}
      <div className="relative mb-8" data-aos="zoom-in">
        {/* Red Line on Top */}
        <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>

        {/* Banner Image */}
        <Image
          src="/about/banner.png" // Banner ka sahi path yahan set karein
          alt="banner"
          width={1509} // Set width based on the image dimensions
          height={512} // Set height based on the image dimensions
          className="w-full"
        />
      </div>

      <div className="container mx-auto px-4" data-aos="zoom-in">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-12">BLOG</h1>

        {/* Blog Grid with 2 rows and 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="flip-up"
            >
              {/* Blog Image */}
              <Image
                src={"/blog/blog.png"} // Change the image path as needed
                alt={"blog"}
                width={420}
                height={261}
                className="w-full h-auto object-cover rounded-t-lg"
              />

              {/* Blog Title */}
              <h2 className="text-xl font-semibold mt-4">{post.title}</h2>

              {/* Blog Excerpt */}
              <p className="text-gray-400 mt-2">{post.excerpt}</p>

              {/* Read More link */}
              <Link
                href={`/blog/singleblog/${post.id}`} // Pass the blog id to the dynamic route
                className="text-blue-400 hover:underline mt-4 block text-right"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center items-center space-x-4">
          {/* Left double arrow */}
          <a
            href="#"
            className="text-white text-2xl font-bold hover:text-blue-400"
          >
            &laquo;
          </a>

          <ul className="flex space-x-2">
            <li>
              <a
                href="#"
                className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200"
              >
                5
              </a>
            </li>
          </ul>

          {/* Right double arrow */}
          <a
            href="#"
            className="text-white text-2xl font-bold hover:text-blue-400"
          >
            &raquo;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
