"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { submitContactForm } from "@/app/actions"
import { Send, CheckCircle, MapPin, Phone, Mail, Facebook } from "lucide-react"
import Link from "next/link"

export default function ContactUs() {
  const [formStatus, setFormStatus] = useState("")

  async function handleSubmit(formData: FormData) {
    const result = await submitContactForm(formData)
    setFormStatus(result.message)
  }

  return (
    <section id="contact-section" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Get in <span className="text-blue-600">Touch</span>
        </h2>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:flex-1 bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-600 p-6 text-white">
                <h3 className="text-2xl font-semibold mb-2">Send Us a Message</h3>
                <p>We'd love to hear from you. Fill out the form below!</p>
              </div>
              <form action={handleSubmit} className="p-8 space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-semibold">
                    Name
                  </Label>
                  <Input id="name" name="name" placeholder="Your name" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-700 font-semibold">
                    Email
                  </Label>
                  <Input id="email" name="email" type="email" placeholder="Your email" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-semibold">
                    Contact Number
                  </Label>
                  <Input id="phone" name="phone" type="tel" placeholder="Your phone number" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-700 font-semibold">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    required
                    className="mt-1 min-h-[100px]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition duration-300"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
              {formStatus && (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 flex items-center">
                  <CheckCircle className="h-6 w-6 mr-2" />
                  <p>{formStatus}</p>
                </div>
              )}
            </div>
            <div className="md:w-full md:max-w-sm bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-700">Address</p>
                    <p className="text-gray-600">Ground Floor Jesse M. Robredo Coliseum CBD II, Triangulo, Naga City, Philippines</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-700">Phone</p>
                    <a href= "tel:+639702424653" className="text-gray-600 hover:text-blue-600">+63 970 242 4653</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-700">Email</p>
                    <a
                      href="mailto:metronagachamber86@gmail.com"
                      className="text-gray-600 hover:text-blue-600 transition duration-300"
                    >
                      metronagachamber86@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Facebook className="w-5 h-5 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-700">Facebook</p>
                    <Link
                      href="https://www.facebook.com/MetroNagaChamberofCommerceandIndustry/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition duration-300"
                    >
                      Metro Naga Chamber of Commerce and Industry
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

