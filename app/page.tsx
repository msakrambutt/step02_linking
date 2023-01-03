import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
//import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <br></br>
      <center>
          <h1>Hello World from Shahid Butt!</h1>
          <br/>
          <Link href="/name"><b><i>Go to name page</i></b></Link>
          </center>
    </div>
  )
}