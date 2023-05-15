/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from 'react';
import DefaultLayout from '../../components/Dashboard/layout/DefaultLayout';
const News = () => {
    const [news, setNews] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(() => {
        const apiKey = process.env.NEXT_PUBLIC_APIKEY;
        const country = "us,np";
        const apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&country=${country}`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                const articles = data.results;
                setNews(articles);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const filteredNews = news.filter((article) =>
        article.title.toLowerCase().includes(search.toLowerCase())
    );

    const handleSearch = (event) => {
        setSearch(event.target.value);
    }; return (
        <DefaultLayout>
            <h2 className='text-title-md2 font-semibold  text-black dark:text-white'>
                News
            </h2>
            <div className=" bg-gray-100">
                <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:py-2 lg:px-8">
                    <div className="max-w-md mx-auto mb-6">
                        <input
                            type="text"
                            placeholder="Search news..."
                            value={search}
                            onChange={handleSearch}
                            className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredNews.map((article) => (
                            <div
                                key={article.title}
                                className="dark:bg-boxdark overflow-hidden shadow rounded-lg"
                            >
                                <img
                                    src={article.image_url}
                                    alt={article.title}
                                    width={200}
                                    height={200}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="px-4 py-4">
                                    <h3 className="text-lg font-medium dark:text-white text-black mb-2">
                                        {article.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 line-clamp-3 mb-4">
                                        {article.description}
                                    </p>
                                    <div className=' flex justify-between'>
                                        <a
                                            href={article.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-base font-medium text-indigo-600 hover:text-indigo-500"
                                        >
                                            Read More
                                        </a>
                                        <p className=' text-graydark'>
                                            {article.creator}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default News;
