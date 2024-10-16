// app/page.tsx

"use client"

import {
  Card,
  CardContent,
} from "@/components/ui/card"

import { useState } from 'react';

export default function Home() {
  const [comments, setComments] = useState<string[]>([]);
  const [comment, setComment] = useState<string>('');

  const addComment = () => {
    if (comment.trim() === '') return;
    setComments([...comments, comment]);
    setComment('');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-slate-600">
      <Card className="max-w-screen-md h-auto text-center bg-white rounded-lg shadow-lg">
        <CardContent className="flex flex-col justify-between h-full">
          <div className="mt-8">
            <h1 className="text-4xl font-bold mb-2">Welcome to My Blog</h1>
            <p className="text-lg mb-4">This is a dynamic blog built with Next.js 14 and TypeScript.</p>
          </div>

          {/* Comment Section */}
          <div className="flex flex-col mt-2 h-[300px] overflow-y-auto"> {/* Fixed height and scrollable */}
            <h2 className="text-2xl font-semibold">Comments</h2>
            <ul className="mt-2">
              {comments.map((cmt, index) => (
                <li key={index} className="bg-gray-200 p-2 mt-2 rounded">
                  {cmt}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex">
              <input
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="border p-2 rounded w-full ml-5"
                placeholder="Add a comment"
              />
              <button
                onClick={addComment}
                className="ml-4 bg-blue-500 text-white px-4 py-2 rounded"
              >
                Add
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
