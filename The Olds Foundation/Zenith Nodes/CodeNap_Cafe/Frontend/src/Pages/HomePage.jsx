import React, { useState, useEffect }  from 'react'
import Home_Hero from '../Components/Home/Home_Hero.jsx'
import Home_Service from '../Components/Home/Home_Service.jsx'
import Home_about from '../Components/Home/Home__About.jsx'
import Join_Community from '../CommonField/Join_Community.jsx'
import Loader from '../Components/Loader/Loader.jsx';


const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5 second loader
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
        <Home_Hero/>
        <Home_about />
        <Home_Service/>
        <Join_Community />
    </>
  )
}

export default HomePage;

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar