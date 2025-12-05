import React from 'react'
import Pick1 from '../../../assets/iamges/pick1.png'
import Pick2 from '../../../assets/iamges/pick2.png'
import Pick3 from '../../../assets/iamges/pick3.png'
import Pick4 from '../../../assets/iamges/pick4.png'
import Pick5 from '../../../assets/iamges/pick5.png'
import Pick6 from '../../../assets/iamges/pick6.png'

const PiquoraPicksBox = () => {

    const items = [
        Pick1,
        Pick2,
        Pick3,
        Pick4,
        Pick5,
        Pick6
    ]

    return (
        <div className='flex flex-col gap-3 px-4 py-3 rounded-xl bg-[linear-gradient(91.84deg,#023668_4.69%,#00866A_95.31%)] border-2 border-[#ffffff4d] shadow-[0px_0px_8px_0px_#52C2ABE5]'>
            <div>
                <h4 className='text-white font-bold text-xl tracking-[-0.01em] leading-[110%]'>Piquora Picks</h4>
            </div>
            <div className='grid grid-cols-3'>
                {items.map((img, index) => (
                    <img key={index} src={img} alt="" />
                ))}
            </div>
        </div>
    )
}

export default PiquoraPicksBox
