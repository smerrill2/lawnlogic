'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { StarIcon, CheckIcon, PhoneIcon, Facebook, Linkedin } from 'lucide-react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'

const HeroDeviceAnimation = () => {
  const [isMounted, setIsMounted] = React.useState(false)
  const controls = useAnimation()

  React.useEffect(() => {
    setIsMounted(true)
    if (isMounted) {
      controls.start('animate')
    }
  }, [isMounted, controls])

  if (!isMounted) {
    return null
  }

  const columns = 2
  const rows = 4
  const duration = 15

  const variant = (columnIndex: number, rowIndex: number) => ({
    initial: {
      y: `${120 + rowIndex * 40}%`,
      x: '0%',
      scale: 1,
      opacity: 1,
    },
    animate: {
      y: '-120%',
      x: '-100%',
      scale: 0.5,
      opacity: 0,
      transition: {
        duration: duration,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
        delay: columnIndex * duration * 0.25,
      },
    },
  })

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {Array.from({ length: columns }).map((_, columnIndex) => (
        <div key={columnIndex} className="absolute h-full" style={{ left: `${(columnIndex / columns) * 100}%`, width: `${100 / columns}%` }}>
          {Array.from({ length: rows }).map((_, rowIndex) => {
            const frameIndex = columnIndex * rows + rowIndex
            return (
              <motion.div
                key={frameIndex}
                className="absolute"
                style={{
                  width: '180px',
                  height: '360px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
                variants={variant(columnIndex, rowIndex)}
                initial="initial"
                animate={controls}
              >
                <Image
                  src={`/placeholder.svg?height=600&width=300`}
                  alt={`Device frame ${frameIndex + 1}`}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-3xl shadow-lg"
                />
              </motion.div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

const TestimonialCard = ({ name, role, content }) => (
  <Card className="bg-white/10 backdrop-blur-lg border-green-500/20 mb-6">
    <CardContent className="p-6">
      <div className="flex items-center space-x-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className="w-5 h-5 fill-green-400 text-green-400" />
        ))}
      </div>
      <p className="text-gray-300 mb-4 font-lato">{content}</p>
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 rounded-full bg-green-500/20" />
        <div>
          <p className="font-semibold font-inter">{name}</p>
          <p className="text-sm text-gray-400 font-lato">{role}</p>
        </div>
      </div>
    </CardContent>
  </Card>
)

export function ModernLawnCareLandingComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-green-950 to-black text-white font-inter">
      <header className="container mx-auto px-8 py-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-48 h-16 relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LawnLogic-lj1xAFOu4alYkwH0Pv6mGowYbHJuL7.png"
                alt="LawnLogic Logo"
                layout="fill"
                objectFit="contain"
                objectPosition="left center"
                priority
              />
            </div>
          </div>
          <ul className="hidden md:flex space-x-6 items-center">
            <li><a href="#" className="hover:text-green-400 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors">Testimonials</a></li>
            <li>
              <Button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full font-semibold transition-colors">
                <PhoneIcon className="w-4 h-4 mr-2" /> Call Us
              </Button>
            </li>
          </ul>
          <Button variant="outline" className="md:hidden">Menu</Button>
        </nav>
      </header>

      <main className="container mx-auto px-8">
        <div className="space-y-16 mt-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                The Modern<br />Lawn Care<br />Business
              </h1>
              <p className="text-gray-400 max-w-md font-lato text-lg">
                We're a web agency that revolutionizes your business to achieve better results, increase ROI, and boost sales. Our innovative approach combines cutting-edge technology with proven strategies to transform your online presence.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
                  Learn More
                </Button>
                <Button className="bg-transparent hover:bg-white/10 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors border-2 border-white">
                  Testimonials
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <HeroDeviceAnimation />
            </div>
          </div>

          <section className="relative overflow-hidden bg-green-900/30 backdrop-blur-lg rounded-xl p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Boosting Your Online Success
                </h2>
                <p className="text-gray-300 font-lato text-lg">
                  At LawnLogic, we use smart tools and clever strategies to help your business shine online. Our approach ensures you stand out in the crowded digital world, bringing more customers to your virtual doorstep.
                </p>
                <ul className="space-y-4">
                  {[
                    "Expanding Reach Through Targeted Paid Advertising",
                    "Intelligent Predictions with AI-Powered Analytics",
                    "Elevating Search Rankings with SEO Expertise",
                    "24/7 Performance Monitoring"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-4">
                      <CheckIcon className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300 font-lato">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex space-x-4">
                  <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
                    Learn More
                  </Button>
                  <Button className="bg-transparent hover:bg-white/10 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors border-2 border-white">
                    See How It Works
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Digital success visualization"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent rounded-xl" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold mb-2">Smart Online Growth</h3>
                  <p className="text-gray-300 font-lato">Watch your business bloom with our easy-to-understand digital strategies.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-40 mb-20">
            <h2 className="text-3xl font-bold mb-12">What Our Customers Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <TestimonialCard
                name="John Doe"
                role="E-commerce Owner"
                content="LawnLogic transformed our online presence! Their innovative approach and use of technology made the entire process seamless and effective."
              />
              <TestimonialCard
                name="Jane Smith"
                role="Marketing Director"
                content="As a marketing professional, I appreciate LawnLogic's data-driven and tech-savvy approach. They've consistently delivered outstanding results for our campaigns."
              />
              <TestimonialCard
                name="Mike Johnson"
                role="Startup Founder"
                content="Scaling our digital operations is a breeze with LawnLogic. Their modern solutions have saved us time and significantly improved our online performance."
              />
            </div>
          </section>

          <section className="bg-green-900/30 backdrop-blur-lg rounded-xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Revolutionize Your Digital Presence?</h2>
            <p className="text-gray-300 font-lato text-lg mb-8 max-w-2xl mx-auto">
              Join the ranks of businesses that have transformed their online success with our cutting-edge web solutions and strategies.
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
                Get Started Now
              </Button>
              <Button className="bg-transparent hover:bg-white/10 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors border-2 border-white">
                Schedule a Consultation
              </Button>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-green-950 text-white py-12 mt-20">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-4 md:mb-0">
              <p className="font-semibold mb-2">Follow us</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white"><Facebook size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={24} /></a>
              </div>
            </div>
            <nav>
              <ul className="flex flex-wrap justify-center md:justify-end space-x-6">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">User Stories</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Help</a></li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-green-900">
            <div className="mb-4 md:mb-0">
              <div className="w-32 h-12 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LawnLogic-lj1xAFOu4alYkwH0Pv6mGowYbHJuL7.png"
                  alt="LawnLogic Logo"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="left center"
                />
              </div>
            </div>
            <div className="text-gray-400 text-sm">
              <span>© 2024 LawnLogic Inc.</span>
              <a href="#" className="ml-4 hover:text-white">Legal</a>
              <a href="#" className="ml-4 hover:text-white">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}