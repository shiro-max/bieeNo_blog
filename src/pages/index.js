import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, provident eius ducimus corrupti voluptatem voluptates explicabo animi omnis? Vitae veritatis, reprehenderit ipsum nemo tempore saepe dolore accusamus tenetur mollitia ab?</p>
    </div>
  )
}
