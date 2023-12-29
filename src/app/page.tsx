import Image from 'next/image'
import HeroSection from '@/components/Widgets/Hero/HeroSection'
import Promotion from '@/components/Widgets/Promotion/Promotion'
import NewProducts from '@/components/Widgets/ProductsColl/Products'
import DiffSection from '@/components/Widgets/DiffSection/Section'
import { Newsletter } from '@/components/Widgets/Newsletter/page'


export default function Home() {
  return (
    <main className=''>
   <div className=''>
    <HeroSection/>
    <Promotion/>
    <NewProducts/>
    <DiffSection/>
    <Newsletter/>
    
   </div>
    </main>
  )
}
