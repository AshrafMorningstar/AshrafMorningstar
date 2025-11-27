import React, { useState, useEffect }  from 'react'
import Reservation_Hero from '../Components/Reservation/Reservation_Hero';
import Reservation_details from '../Components/Reservation/Reservation_details';
import Join_Community from '../CommonField/Join_Community';
import Reservation_Testimonial from '../Components/Reservation/Reservation_Testimonial';
import Loader from '../Components/Loader/Loader.jsx';


const ReservationPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5 second loader
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;
  return (
    <>
      <Reservation_Hero />
      <Reservation_details />
      <Reservation_Testimonial />
      <Join_Community />

    </>
  )
}

export default ReservationPage;

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar