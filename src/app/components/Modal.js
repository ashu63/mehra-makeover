'use client'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Phone, Instagram, MessageCircle } from 'lucide-react'
import { DialogTitle } from '@radix-ui/react-dialog'
// import {logo} from '@/public/images/logo.JPG'
import Image from 'next/image'

export function Modal({ isOpen, setIsOpen }) {

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <DialogTitle></DialogTitle>

      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="flex flex-col items-center space-y-6 p-6">
          <div className="w-32 h-32 relative">
          <Image
          className="dark:invert rounded-full"
          src="/logo.JPG"
          alt="Mehra Makeover"
          width={180}
          height={100}
          />
          </div>
          <h2 className="text-2xl font-bold text-center">Contact Us</h2>
          <div className="w-full space-y-4">
            <ContactItem 
              icon={<Phone className="h-5 w-5" />}
              label="Phone"
              value="+91 8558827191"
              href="tel:+918558827191"
            />
            <ContactItem 
              icon={<Instagram className="h-5 w-5" />}
              label="Instagram"
              value="@mehramakeover"
              href="https://www.instagram.com/makeovermehra/"
            />
            <ContactItem 
              icon={<MessageCircle className="h-5 w-5" />}
              label="WhatsApp"
              value="+91 8558827191"
              href="https://wa.me/918558827191"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}


function ContactItem({ icon, label, value, href }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center space-x-3 p-3 rounded-md hover:bg-muted transition-colors"
    >
      <div className="flex-shrink-0 text-primary">{icon}</div>
      <div className="flex-grow">
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        <p className="text-sm font-semibold">{value}</p>
      </div>
    </a>
  )
}

