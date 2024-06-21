import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <>



    <div className="hero max-w-[87%] m-auto min-h-screen bg-ghost">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://th.bing.com/th/id/R.c0074b70b41a52a64c7a918fcf35acd7?rik=%2bIx7I1fcwqp8EA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-fgw48tQoohY%2fUuvZ_GUr7wI%2fAAAAAAAAFfk%2faSfXJkNx5Cg%2fs1600%2fWedding%2bCake%2bHd%2bPhoto%2bGallery%2b(32).jpg&ehk=pX8GYHOZivBCCiX%2fIO0JT%2fG3UlwtCQWpzDUXd5%2bB%2flg%3d&risl=&pid=ImgRaw&r=0" className="max-w-56 rounded-lg shadow-2xl" />
    <div>
    
      <h1 className="text-5xl font-bold">We Bake You Enjoy</h1>
      <p className="py-6">Baked with love ,from Oven to Heart. Where Every Slice is Joyfull  </p>
    <Link to={"/products"}>   <button className="btn btn-primary rounded-lg">Order Now!</button> </Link>
    </div>
  </div>
</div>
    </>
)

}

export default Hero