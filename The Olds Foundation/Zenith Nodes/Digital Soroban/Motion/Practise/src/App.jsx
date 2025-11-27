import React from 'react';
import  { motion , useScroll } from 'motion/react';
import { fadeUp, slideLeft, slideRight } from "../../utils/motionVariants";


function App() {
 const scrollYProgress = useScroll().scrollYProgress
  return (
    <>

    <div className='p-20 text-center font-mono '>

      <motion.div
      style={{
        scaleX:scrollYProgress
      }}
      className='bg-red-600 h-5 origin-left fixed top-0 left-0 w-full'></motion.div>
      <h1 className=' text-4xl mb-10 font-bold text-pink-500 '>Vikram Suraj Pal</h1>
      <p className='text-2xl font-serif text-middle '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, est impedit accusamus, obcaecati nulla animi similique numquam consectetur incidunt pariatur illo consequatur ad non quaerat repellat facilis dolorem minus iure nemo neque blanditiis. Ratione mollitia provident velit corrupti. Inventore nobis quisquam quasi optio eos quo exercitationem praesentium fugit necessitatibus dolorem autem voluptate eveniet fugiat similique sit aspernatur dolorum sed aliquid asperiores, voluptatem est! Dignissimos, laboriosam officiis? Ad, iusto maiores! Error saepe quae sequi labore consequatur inventore, repellendus in quas eligendi numquam maxime, ab sit vero quis veritatis voluptates! Similique vitae enim neque laborum perspiciatis vero quo nisi, velit non ducimus. <br /> <br /> <br />  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab atque debitis et architecto ea animi inventore porro sint eveniet excepturi, placeat consequuntur enim exercitationem assumenda ipsa cum commodi doloremque. Quam, consequuntur error ipsa commodi illum repellendus repudiandae. Fugiat distinctio sunt delectus, suscipit soluta, minima, eum porro consequuntur consequatur vitae id veritatis quidem iste voluptatem iure exercitationem nostrum expedita minus eligendi esse quos quisquam. Adipisci facere sequi, alias reprehenderit nostrum earum animi quasi voluptates reiciendis totam ut. Cum assumenda atque, animi molestiae hic praesentium sint cumque provident, dolores ipsam et at quia iure esse nesciunt ducimus quidem nobis accusamus, obcaecati nemo a fugiat nisi saepe tempora. Obcaecati amet dignissimos voluptate quas doloribus tempora accusantium nemo quibusdam. Ipsam quos sapiente beatae doloremque consequuntur ea minima nobis corporis deleniti sequi, maiores repellat dolores ratione nam illo quia quis nisi numquam esse ducimus! Repudiandae officiis exercitationem beatae voluptatibus magnam rem alias, necessitatibus ratione nemo asperiores laudantium recusandae possimus velit, unde sint iusto corrupti eum numquam. Quia assumenda fugiat maiores beatae vero deserunt ea recusandae nesciunt cum, facere at dolorem, voluptates facilis laborum quisquam placeat? Enim distinctio quaerat error, sint culpa quasi placeat totam minima beatae iure, numquam vel eaque quia perferendis in esse omnis! <br /> <br /> <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium excepturi debitis neque dolor consectetur labore tempora, exercitationem consequatur, eum odit est? Dolorum debitis, accusantium reiciendis porro eaque deleniti quam nihil explicabo, eos, hic eius iste pariatur ullam illo ex. Error repellat dicta maxime exercitationem ad nesciunt nobis, dolore repellendus quod totam ducimus, odit illum iusto, dolorum blanditiis officia architecto delectus? Voluptate ut porro recusandae in eveniet assumenda animi possimus fugit, aspernatur enim nemo ad? Maiores repellendus repellat quos modi ducimus placeat sed nihil pariatur dolor ea beatae nobis veniam reprehenderit ipsa, ab porro quaerat, facilis amet mollitia? Alias ipsum minima ratione sapiente velit maxime assumenda voluptates! Saepe quasi mollitia architecto ullam ipsam est facilis nostrum maxime, sunt, odit natus fugiat voluptatibus, expedita fuga perspiciatis quaerat accusantium cum! Voluptate soluta fugit assumenda exercitationem, repellat voluptas explicabo totam earum qui maxime tempore unde esse! Libero ipsa adipisci temporibus at dolor? Ad ullam iure cupiditate recusandae itaque, repellendus eaque blanditiis, eveniet ipsum, dolor quas! Praesentium aspernatur necessitatibus ut adipisci nobis nesciunt! Reprehenderit nihil, perspiciatis saepe laudantium unde voluptate, quod cupiditate dicta corrupti, nobis molestias commodi illo itaque voluptas! Architecto, assumenda nam? Quod nemo laudantium facere perspiciatis placeat amet magni atque consequatur ut similique! <br /> <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores necessitatibus unde laborum aut at facere eveniet quis debitis omnis nisi esse cupiditate consectetur, iure suscipit, itaque labore ullam aspernatur quae provident ipsa earum minus illo! Omnis, dicta nulla consectetur placeat perspiciatis ad magnam molestias cum inventore atque beatae enim reiciendis, illum hic ex repudiandae natus debitis quia laborum? Ullam ipsa numquam cupiditate pariatur repudiandae recusandae dolores placeat beatae qui iusto? Amet consectetur consequuntur explicabo assumenda facere deleniti nesciunt minus natus harum, ullam animi error a accusantium odio expedita? Deleniti tempore reprehenderit, exercitationem illum ipsum dolorem distinctio eveniet reiciendis aliquid dolorum! </p>
    </div>




















      {/* <div>
        <motion.div
        // square Animation
        // animate={{
        //   x:[0,800,800,0,0],
        //   y:[0,0,300,300,0],
        //   rotate:[0,360,-360,0]
        // }} 

        // transition={{
        //   duration: 5,
        //   delay: 1,
        //   repeat:Infinity
        // }}

        // Draging System
        // drag

        // dragDirectionLock:true
        // whileDrag={{
        //   scale:0.8
        // }}

        // dragConstraints={{
        //   left:0,
        //   top:0,
        //   right:1200,
        //   bottom:300
        // }}

        class='box'>
          Hello World
        </motion.div>
      </div> */}

      {/* <motion.div
        animate={{
          x:1000,
          y:100,
          scale:0.5,
        }}

        transition={{
          duration:2,
          delay:2,
        }}
      class='circle'></motion.div> */}
    </>
  )
}

export default App

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar