'use client'

import React from 'react'
import About from '../components/About'
import { Features } from '../components/Features'
import { Faq } from '../components/Faq'
import { Princing } from '../components/Pricing'
import { NewsLetter } from '../components/Newslatter'

export function Home() {

  return (
    <React.Fragment>
      {/* Hero Section */}
      <About />
      {/* Features Section */}
      <Features />
      {/* FAQs */}
      <Faq />
      {/* Pricing Section */}
      <Princing />

      {/* NewsLetter */}
      <NewsLetter />
      </React.Fragment>
  )
}
