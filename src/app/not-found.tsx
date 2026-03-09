'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import GoBackButton from '../components/go-back-button';

const funnyMessages = [
  "Looks like this page went out for lunch... and never came back.",
  "404: Page not found. It might have run off to Mexico.",
  "Nothing here. Even dust particles are afraid to enter.",
  "Error 404: Page reported missing. The website police are on their way.",
  "You've found a secret spot! Shh, don't tell anyone... especially the developers.",
  "This page is in quarantine. Come back later (with sanitizer).",
  "404: Page launched into space. Expected return in 5 light years.",
  "There was supposed to be content here, but a cat walked across the keyboard.",
  "This page is on vacation. It sent a postcard though!",
  "404: Page not found. It's playing hide and seek and winning.",
  "This page joined the witness protection program.",
  "Error: The page you're looking for is currently fighting a dragon in another dimension.",
  "This page has been abducted by aliens. No ransom demanded... yet.",
  "404: Page not found. It's probably at the spa, getting a digital makeover.",
  "This content has been kidnapped by squirrels. We're negotiating its release.",
  "Page not found. Have you tried turning it off and on again?",
  "This page is stuck in traffic. ETA unknown.",
  "404: Page not found. It's learning to code and will be back soon.",
  "This page went to get milk. That was 5 years ago...",
  "Page not found. It's currently in therapy dealing with its 404 issues."
];

export default function NotFound() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
    setMessage(randomMessage);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 px-4">
      <div className="text-center max-w-2xl">
        {/* Animation */}
        <div className="relative mb-8">
          <div className="text-[120px] md:text-[160px] font-bold text-gray-800 opacity-10">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-8xl md:text-9xl font-bold text-blue-600 animate-bounce">
              404
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="text-2xl font-bold text-gray-800 mb-4">
            🚧 Uh-oh! 🚧
          </div>
          
          <p className="text-gray-600 text-lg mb-6">
            {message}
          </p>
          
          <div className="inline-block p-4 bg-yellow-50 rounded-lg border border-yellow-200 mb-6">
            <p className="text-sm text-yellow-800">
              <span className="font-bold">Tip:</span> Try going back to the previous page 
              or use the navigation below
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Button "Back" */}
          <GoBackButton />
          {/* Button "Home" */}
          <Link
            href="/"
            className="bg-blue-600 text-white p-4 rounded-xl hover:bg-blue-700 transition-all hover:scale-105 text-center"
          >
            🏠 Home
          </Link>
        </div>
      </div>
    </div>
  );
}
