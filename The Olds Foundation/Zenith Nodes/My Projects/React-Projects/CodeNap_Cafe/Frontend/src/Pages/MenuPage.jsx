import React, { useState, useEffect }  from 'react'
import Menu_Hero from "../Components/Menu/Menu_Hero";
import Menu_OrderProduct from "../Components/Menu/Menu_OrderProduct";
import Menu_details from '../Components/Menu/Menu_details';
import Join_Community from '../CommonField/Join_Community';
import Loader from '../Components/Loader/Loader.jsx';


const MenuPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5 second loader
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;
  return (
    <>
      <Menu_Hero />
      <Menu_details  />
      <Menu_OrderProduct />
      <Join_Community />

    </>
  )
}

export default MenuPage

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar