"use client";
import React from 'react';
import { birthday } from '../../helpers';
// import { Report } from '../';
import { Responsive } from '@/utils';

const biographyContent = [
  {
    id: 'intro',
    content:""  
  },
  {
    id: 'early-years',
    content: ""
  },
  {
    id: 'growth',
    content: ""
  },
  {
    id: 'development',
    content: ""
  },
  {
    id: 'portfolio',
    content: ""
  },
  {
    id: 'skills',
    content: ""
  },
  {
    id: 'conclusion',
    content: ""
  }
];


const MyStory = () => {
  return (
    <article className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 dark:text-gray-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-20 pb-10">
        <header className="max-w-4xl mx-auto mb-12">
          <h1
            className="text-4xl md:text-5xl font-bold font-orbitron text-center text-blue-950 dark:text-white mb-8"
            id="about-title"
          >
            About Me
          </h1>

          <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500" />
            <img
              src="/assets/images/about.webp"
              alt="Portrait of Heramb Devbhankar - Software Engineer"
              className="w-full h-auto object-cover relative z-10"
              width={1200}
              height={675}
              loading="eager"
            />
          </div>
        </header>

        <main className="max-w-4xl mx-auto">
          <section
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8"
            aria-labelledby="bio-title"
          >
            <h2
              id="bio-title"
              className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              Who is Heramb Devbhankar?
            </h2>

            <div className="space-y-6">
              {biographyContent.map((section) => (
                <p
                  key={section.id}
                  className="text-gray-700 dark:text-gray-100 text-lg leading-relaxed"
                >
                  {section.content}
                </p>
              ))}
            </div>
          </section>

          <div className="mt-8">
            <Responsive />
          </div>
        </main>
      </div>

      {/* <Report report="my-story/page" /> */}
    </article>
  );
};

export default MyStory;