import React from 'react'
import HomeLink from '../components/links/HomeLink'

type Props = {
  listings: string[],
  header: string
}

function Footer() {
  return (
    <div className='mt-36 max-w-[1400px] mx-auto border-t border-white py-12 '>
      <div className='grid grid-cols-6'>
        <div className='col-span-2 pr-8 flex flex-col'>
            <HomeLink text='text-[26px]' />
            <p className='leading-[25px] text-[#D2D2D2] text-[16px] py-2 font-popins'>Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non nisi, placerat.</p>
        </div>
        <EachOne header="Livescores" listings={["Overview", "features", "tutorials"]} />
        <EachOne header='Collectibles' listings={["About", "Press", "Careers"]}  />
        <EachOne header="Support" listings={["Help Center", "Support Center", "Legal"]} />
        <EachOne header="Legal" listings={["Privacy Cookies", "Terms of servic e", "Cookies Policy"]} />
      </div>
    </div>
  )
}

export default Footer

const EachOne = ({listings, header}: Props) => (
  <div className='flex col-span-1 ml-4 flex-col '>
    <h1 className='text-white text-[18px] font-[500] leading-[22px] font-popins'>{header}</h1>
    {
      listings && listings.map((listing, i) => (
        <li key= {i} className="text-[#D2D2D2] list-none capitalize leading-[27px] py-2 font-popins text-[14px]">{listing}</li>
      ))
    }
  </div>
)