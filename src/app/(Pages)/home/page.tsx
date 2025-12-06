import React from 'react';
import Navbar from '@/app/Components/HomeComponent/Navbar';
import Background from '@/app/Components/HomeComponent/Background';
import NewIems from '@/app/Components/HomeComponent/Sections/NewIems';
import ProductList from '@/app/Components/Products/ProductList';
import CoverSection from '@/app/Components/HomeComponent/Sections/CoverSection';
import Category from '@/app/Components/CateoryCard/Categeory';

const HomePage = () => {
    return (
        <div>
        <Navbar/>
        <Background/>

        <div className='p-5 mt-5'>
        <NewIems/> 
        <ProductList/>
        
        </div>
 <div className='p-5 mt-5'>

      <CoverSection/>
 </div>


 <div className='mt-3'>
    <Category/>
 </div>
      

            
        </div>
    );
};

export default HomePage;