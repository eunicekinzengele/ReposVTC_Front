import React from 'react'

export default function Footer() {
  return (
    <div className=' bg-red-800 flex justify-center'>
        <div className='w-2/6 border-2'>A</div>
        <div className='w-2/6 border-2 p-5'>
            <h2 className=' text-sm text-center text-white underline'>LIENS RAPIDES</h2> <br/>
            <ul className=' text-center text-sm text-white'>
                <li>A propos de nous</li>
                <li>Nos différents services</li>
                <li>Voitures</li>
                <li>Témoignages</li>
            </ul>
        </div>
        <div className='w-2/6 border-2'>C</div>
    </div>
  )
}
