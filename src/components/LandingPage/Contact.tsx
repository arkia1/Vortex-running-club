/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const handleChange = (e: React.FormEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Replace with your actual web3forms API key
      const apiKey = 'YOUR_WEB3FORMS_API_KEY';
      
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: apiKey,
          ...formData,
          subject: formData.subject || 'New message from Running Club website',
        }),
      });
      
      const data = await res.json();
      
      if (data.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.',);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-zinc-200 py-20 px-4 md:px-8 lg:px-12">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-neutral-900 " />
      </div>
      
      <motion.div 
        className="container mx-auto z-10 max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-neutral-900 text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            Connect with our community and join us for our Sunday 9 AM runs.
          </p>
        </motion.div>
      
        {/* Social Media Section */}
        <motion.div 
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">Follow Us</h3>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-neutral-600 max-w-2xl mx-auto mb-8">
              Stay updated with our latest events and connect with fellow runners.
            </p>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="flex justify-center"
          >
            <a 
              href="https://instagram.com/vortexrunning" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <div className="p-4 bg-gradient-to-br from-purple-600 to-orange-500 rounded-full text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-neutral-900 mb-1">Instagram</h4>
              <p className="text-blue-600">@vortexrunning</p>
            </a>
          </motion.div>
        </motion.div>
        
        {/* Location and Map Section */}
        <motion.div 
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10" id="track">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">Find Us</h3>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-neutral-600 max-w-2xl mx-auto mb-2">
              Join us at our regular meeting spot for Sunday runs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Address Info */}
            <motion.div 
              variants={fadeInUp}
              className="lg:col-span-2 bg-white p-8 rounded-lg shadow-md"
            >
              <div className="flex items-start mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className='py-8'>
                  <h4 className="text-lg font-bold text-neutral-900 mb-2">Running Track Address</h4>
                  <p className="text-neutral-600 mb-1">Nicosia terminal</p>
                  <p className="text-neutral-600 mb-4">Nicosia, Lefkoşa Türk Beledyesi</p>
                  <div className="bg-neutral-100 p-4 rounded-lg mb-4">
                    <p className="font-medium text-neutral-900">Sunday Run Schedule:</p>
                    <p className="text-neutral-700">Every Sunday at 9:00 AM</p>
                    <p className="text-neutral-700">5km Group Run</p>
                  </div>
                  <a 
                    href="https://maps.app.goo.gl/8rw9Qfn9nesT61Z48" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <span>Get Directions</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="m10 14 11-11"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Map */}
            <motion.div 
              variants={fadeInUp}
              className="lg:col-span-3 bg-white rounded-lg shadow-md overflow-hidden h-[400px] relative"
            >
              {/* Option 1: Google Maps iframe - Uncomment and replace with your actual map URL */}
              
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.6310696487835!2d33.35957707637091!3d35.190746756760745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de173ae11011e5%3A0x1564bbc110bf1f6c!2sRuso%20Running%20Track!5e0!3m2!1sen!2s!4v1742831197096!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Running Track Location"
              />
             
              
              {/* Option 2: Placeholder map image */}
              <div className="relative w-full h-full">
                <Image 
                  src="/api/placeholder/800/400" 
                  alt="Map of running track location" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 p-4 rounded-lg text-center">
                    <p className="text-neutral-900 font-medium">Map placeholder</p>
                    <p className="text-neutral-600 text-sm">Replace with actual Google Maps embed</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Contact Form Section */}
        <motion.div 
          variants={staggerContainer}
          className="mb-12"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10" id="contact">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">Send Us a Message</h3>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Questions about our Sunday runs? Want to join our club? Drop us a message below.
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="max-w-2xl mx-auto">
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-green-800 mb-2">Message Sent Successfully!</h4>
                <p className="text-green-700 mb-4">Thank you for reaching out. We&apos;ll get back to you soon.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-white text-green-700 border border-green-300 px-4 py-2 rounded-md hover:bg-green-50 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                    {error}
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-neutral-700 font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-neutral-700 font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-neutral-700 font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="I'd like to join your Sunday runs"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-neutral-700 font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="I'm interested in joining your running club and participating in the weekly Sunday runs..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-neutral-900 text-white font-medium py-3 px-4 rounded-md transition-colors ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-neutral-800'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contact;