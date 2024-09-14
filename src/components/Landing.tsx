"use client"
import React from 'react'
import Image from 'next/image'
import LandingImage from '@/assets/landing.svg'

export default function Landing() {
  return (

    <div>
      <Image src={LandingImage} alt="landing" width={1499} height={87} />
    </div>
  )
}
