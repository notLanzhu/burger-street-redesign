import React from 'react'

const Menu = () => {
  return (
    <main className='font-display flex justify-center flex-col'>    
      <section name='section1'className='h-[100%] mb-2'>
        <div className='flex justify-center bg-orange text-white text-xl md:text-2xl font-semibold'>
          <h2>Our Burgers</h2>
        </div>
        <div className='flex flex-col justify-center text-center text-xl md:text-2xl gap-10'>
          <p className="text-black">Deluxe Hamburger</p>
          <p className="text-black">Double Double Cheeseburger</p>
          <p className="text-black">Deluxe Cheeseburger</p>
          <p className="text-black">Bacon Cheeseburger</p>
          <p className="text-black">Chili Cheeseburger</p>
          <p className="text-black">Olive Cheeseburger</p>
        </div>
      </section>
      <section name='section2' className='h-[100%] mb-2'>
        <div className='flex justify-center bg-orange text-white text-xl md:text-2xl font-semibold'>
          <h2>Our Specialties</h2>
        </div>
        <div className='flex flex-col justify-center text-center text-xl md:text-2xl gap-10'>
          <p className="text-black">B.L.T Sandwich</p>
          <p className="text-black">Giant Turkey Deluxe (served hot or cold)</p>
          <p className="text-black">Spicy Chicken Sandwich</p>
          <p className="text-black">Grilled Chicken Sandwich</p>
          <p className="text-black">Chicken Strips (choice of Gravy or Honey Mustard)</p>
          <p className="text-black">Chili Cheese Dog</p>
          <p className="text-black">Hot Dog</p>
        </div>
      </section>
      <section name='section3' className='h-[100%] mb-2'>
        <div className='flex justify-center bg-orange text-white text-xl md:text-2xl font-semibold'>
          <h2>Our Sides</h2>
        </div>
        <div className='flex flex-col justify-center text-center text-xl md:text-2xl gap-10'>
          <p className="text-black">Curly Fries</p>
          <p className="text-black">Sweet Potato Fries</p>
          <p className="text-black">Tater Tots</p>
          <p className="text-black">Onion Rings</p>
          <p className="text-black">Cinnamon Apple Pie</p>
          <p className="text-black">Vanilla Ice Cream Cone (only available in select locations)</p>
        </div>
      </section>
      <section name='section4' className='h-[100%] mb-2'>
        <div className='flex justify-center bg-orange text-white text-xl md:text-2xl font-semibold'>
          <h2>Our Beverages</h2>
        </div>
        <div className="flex flex-col justify-center text-center text-xl md:text-2xl gap-10">
          <p className="text-black">Soft Drinks</p>
          <p className="text-black">Cherry Limeade</p>
          <p className="text-black">Frozen Lemonade</p>
          <p className="text-black">Shakes (comes in Chocolate, Vanilla, Strawberry, Pineapple)</p>
        </div>
      </section>
    </main>
  )
}

export default Menu
