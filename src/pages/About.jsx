import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t '>
        <Title text1={'ABOUT'} text2={'US'} />

      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam consequatur deserunt similique repellendus et, architecto necessitatibus laboriosam quam atque cumque consequuntur dolor commodi illum, impedit ex nulla eos minima numquam est quo, dolore consectetur perferendis excepturi! Mollitia neque impedit aliquid aliquam doloribus. Placeat voluptates sed doloribus laboriosam ex accusamus nemo.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia sequi quod molestiae voluptates quidem provident earum odio natus. Exercitationem tenetur et iusto repellat inventore quas, magni iure consequatur saepe voluptatibus obcaecati autem enim aspernatur sint excepturi! Doloribus adipisci quod mollitia nostrum quisquam recusandae quia ad beatae nihil, voluptas maxime velit!</p>
            <b className='text-gray-800'>Our Mission </b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ullam doloremque dolore accusamus reiciendis nisi laborum aperiam obcaecati ad enim deleniti facilis quas amet, laudantium voluptas tenetur, debitis iste nobis.</p>
        </div>
      </div>
      <div className='text-xl py-4 '>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standart </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Covenience:</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur laudantium ipsam dolorum minima repellendus dicta nesciunt ipsum cum harum praesentium?</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur laudantium ipsam dolorum minima repellendus dicta nesciunt ipsum cum harum praesentium?</p>
        </div>

      </div>

      <NewsLetterBox/>

    </div>
  )
}

export default About