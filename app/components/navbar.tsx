import Image from 'next/image';
import './navbar.css';

export default function Navbar() {
  return (
    <div className='w-full top-0 h-14 px-20'>
      <div className='flex items-center h-full flex-row justify-between'>
        <Image
          className=""
          src="/Logo.png"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
          <ul className='w-1/3 flex flex-row justify-around'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
      </div>
    </div>
  )
}
