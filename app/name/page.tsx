'use client';

import { useRouter } from 'next/navigation';

export default function GiveName() {
  const router = useRouter();
    return (
      <div>
        <br></br>
           <h1>My name is Shahid Akram Butt.</h1> 
            <br/>
            <button type="button" onClick={() => router.push('/name/address')}>
              Get Address
            </button>
      
      </div>
    )
  }