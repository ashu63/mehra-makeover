"use client"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Scissors, Palette, Sparkles, Clock } from 'lucide-react'
import { ContactModal, Modal } from './components/Modal'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen" suppressHydrationWarning>
      <header className="sticky top-0 bg-black/80 backdrop-blur-sm text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Image
          className="rounded-full"
          src="/logo.JPG"
          alt="Mehra Makeover"
          width={60}
          height={60}
          />

        <ul className="flex items-center space-x-4 px-3">
          <li><Link href="#home" onClick={handleScroll}>Home</Link></li>
          <li><Link href="#services" onClick={handleScroll}>Services</Link></li>
          <li><Link href="#about" onClick={handleScroll}>About</Link></li>
          <li><Link href="#contact" onClick={handleScroll}>Contact</Link></li>
        </ul>

        </div>
      </header>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen}/>

      <main className="flex-grow">
        <section className="bg-white py-20 transition-all duration-500 ease-in-out">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4 font-playwrite">Welcome to <span className="font-playwrite">Mehra Makeover</span></h2>
            <p className="text-center text-sm sm:text-lg mb-10 max-w-6xl text-black">Welcome to <span className="text-black font-bold">Mehra Makeover</span> , your ultimate destination for luxurious beauty and grooming services. From stunning nail extensions to flawless makeup artistry, expert hairdressing, and rejuvenating skin care treatments, we offer a complete range of services to enhance your natural beauty. Our highly skilled professionals ensure personalized care, using top-quality products to make you look and feel your best. At Glam Haven, beauty meets excellence in every detail—because you deserve nothing less. Indulge in a world of glamour, style, and relaxation today!</p>           
             <Button onClick={() => setIsOpen(true)} size="lg">Book an Appointment</Button>
             
          </div>
        </section>

        <section id="services" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 cursor-pointer">
              <ServiceCard 
                title="Hair Styling" 
                description="Cuts, colors, and styling for all hair types"
                icon={<Scissors className="h-6 w-6" />}
              />
              <ServiceCard 
                title="Makeup" 
                description="Professional makeup for any occasion"
                icon={<Palette className="h-6 w-6" />}
              />
              <ServiceCard 
                title="Nail Care" 
                description="Manicures, pedicures, and nail extensions"
                icon={<Sparkles className="h-6 w-6" />}
              />
              <ServiceCard 
                title="Skin Treatments" 
                description="Facials, peels, and rejuvenating treatments"
                icon={<Clock className="h-6 w-6" />}
              />
            </div>
          </div>
        </section>

        <section id="about" className="py-16 bg-muted">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image 
              src="/about.JPG"
                alt="Salon interior"
                width={600} 
                height={400} 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-bold mb-4">About Mehra Makeover</h2>
              <p className="mb-4">
                At Mehra Makeover, we're passionate about helping you look and feel your best. 
                Our team of skilled professionals is dedicated to providing top-notch beauty 
                services in a relaxing and welcoming environment.
              </p>
              <p>
                With years of experience and a commitment to staying up-to-date with the latest 
                trends and techniques, we ensure that every visit to our salon leaves you feeling 
                refreshed, confident, and beautiful.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="mb-8">Ready to book your appointment or have questions? Get in touch with us!</p>
            <div className="flex justify-center space-x-4">
              <Button onClick={() => setIsOpen(true)} variant="outline">Call Now</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Mehra Makeover. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ title, description, icon }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          {icon}
          <span className="ml-2">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
