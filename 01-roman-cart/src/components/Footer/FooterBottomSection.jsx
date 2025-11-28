import { Clover } from 'lucide-react'

const FooterBottomSection = () => {
  return (
    <div className='pt-6'>
      <div className='flex flex-col md:flex-row items-center md:items-center justify-between gap-3 text-sm md:text-[16px] text-white'>
        <div className='text-center md:text-left'>
          <h5>© All rights reserved, RomanCart. 2025</h5>
        </div>
        <div className='text-center md:text-right inline-flex items-center gap-2'>
          <Clover size={16} strokeWidth={1.5} />
          <span>Built in Canada</span>
        </div>
      </div>
    </div>
  )
}

export default FooterBottomSection
