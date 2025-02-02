"use server"

import type { FacebookPost } from "@/types/facebook"

export async function getLatestFacebookPosts(): Promise<FacebookPost[]> {
  const accessToken = process.env.FACEBOOK_ACCESS_TOKEN
  const pageId = process.env.FACEBOOK_PAGE_ID

  if (!accessToken || !pageId) {
    console.error("Facebook access token or page ID is missing")
    return []
  }

  try {
    const response = await fetch(
      `https://graph.facebook.com/v12.0/${pageId}/posts?fields=id,message,created_time,full_picture&limit=3&access_token=${accessToken}`,
    )
    const data = await response.json()
    return data.data
  } catch (error) {
    console.error("Error fetching Facebook posts:", error)
    return []
  }
}

export async function submitContactForm(formData: FormData) {
  // Here you would typically send this data to your backend or API
  console.log("Form submitted with data:", Object.fromEntries(formData))
  
  const body = JSON.stringify({
    access_key: "bcd529e7-8e06-44a0-a406-5d279b68bf2b",
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  })
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body
  });
  const result = await response.json();
  if (result.success) {
    console.log(result);
  }
  
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Return a success message
  return { message: "Thank you for your message. We will get back to you soon!" }
}



