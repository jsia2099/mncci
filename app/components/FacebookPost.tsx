"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { getLatestFacebookPosts } from "@/app/actions"
import type { FacebookPost } from "@/types/facebook"
import { Facebook, Calendar, ArrowRight } from "lucide-react"

export default function FacebookPosts() {
  const [posts, setPosts] = useState<FacebookPost[]>([])

  useEffect(() => {
    async function fetchPosts() {
      const latestPosts = await getLatestFacebookPosts()
      setPosts(latestPosts)
    }
    fetchPosts()
  }, [])

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 justify-center mb-4">
            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
            <span className="text-sm text-gray-500 tracking-wider uppercase">Social Media</span>
            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Latest from <span className="text-blue-600">Facebook</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                {post.full_picture && (
                  <div className="relative h-48">
                    <Image
                      src={post.full_picture || "/placeholder.svg"}
                      alt="Facebook post image"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Facebook className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm font-semibold text-gray-600">Facebook Post</span>
                  </div>
                  <p className="text-gray-700 mb-4 line-clamp-3">{post.message}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.created_time).toLocaleDateString()}
                    </div>
                    <a
                      href={`https://www.facebook.com/${post.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

