import React, { useState, useReducer } from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import { Web3Storage } from 'web3.storage'
import fr from '../public/fr.jpg'
import rr from '../public/rr.jpg'
import Footer from '../components/Footer'





export default function profile()   
{
    const [messages, showMessage] = useReducer((msgs, m) => msgs.concat(m), [])
  const [token, setToken] = useState('')
    const Web_STORAGE_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDUxODdDYTU3ZWU1MEEwOWZmOUI2NDAzMDRiQTlDNEZBOTE3MjlDM0YiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODQ3NzU2NjQ4MjYsIm5hbWUiOiJBeXVzaCJ9.rR03Th49YPmOVoy8n8teXTTImO1P5wz4BxAFDFAb3wM'
    const client = new Web3Storage({ token: Web_STORAGE_TOKEN })

    return (
     <>
  <Navbar/>

  <div className=' flex justify-center'>
    <div className=' text-3xl font-mono font-semibold text-green-500 my-6'>
        Your Posts
    </div>
  </div>
  <div className='flex'>
  <div className='grid grid-cols-4 gap-2 '>
  <div className=' bg-gray-900 text-white mx-10 my-2 rounded-xl  '>
                <div className="mx-1 my-1 cursor-pointer ">
                    <a href='https://bafybeietu4bacniu3vfiparmvxqmd4oclzdiieqva2gaz2exyif46ne4tu.ipfs.dweb.link/Logo.png'>
                    <Image src={fr} 
                    alt='' height="260px" width='400px'>
                    </Image></a>
                    </div>
                    <div className=' flex justify-center'>
                    <div className=' text-green-500 font-mono my-2'>
                        {/* <a href='https://bafybeietu4bacniu3vfiparmvxqmd4oclzdiieqva2gaz2exyif46ne4tu.ipfs.dweb.link'>
                        View on IPFS
                        </a> */}
                    </div>
                    </div>
                    </div>

                    <div className=' bg-gray-900 text-white mx-10 my-2 rounded-xl  '>
                <div className="mx-1 my-1 cursor-pointer">
                <a href='https://bafybeiab2w2lb6dugorkaxoi3fsl7666bh2m2erxpk7ahvgi5voxvxcvtu.ipfs.dweb.link/photo_2023-04-28_20-29-12.jpg'>
                    <Image src={rr} 
                    alt='' height="260px" width='400px'>
                    </Image></a>
                    </div>
                    <div className=' flex justify-center'>
                    <div className=' text-green-500 font-mono my-2'>
                        {/* <a href='https://bafybeiab2w2lb6dugorkaxoi3fsl7666bh2m2erxpk7ahvgi5voxvxcvtu.ipfs.dweb.link'>
                        View on IPFS
                        </a> */}
                    </div>
                    </div>
                    </div>


    </div>
  </div>
  <Footer/>
  </>
    )
}