import React from 'react';
import Slideshow from '../components/Banner';
import BrandingCard from './BrandingCard';
import NewArrivalsBanner from './NewArrivalsBanner';
import ClearanceSaleCard from './ClearanceSaleCard';
import MegaDiscountsCard from './MegaDisCountCard';
import Buy2Get1FreeComponent from './Buy2Get1';
import ShopByCategories from './ShopByCategories';
import HappyCustomersBanner from './HappyCustomerBanner';
import HomegrownBanner from './HomeGrownBanner';

const items = [
  {
    name: 'Shoe 1',
    image: 'path/to/shoe1.jpg'
  },
  {
    name: 'Shoe 2',
    image: 'path/to/shoe2.jpg'
  },
  // Add more items as needed
];

const ShoppingLandingPage = () => {
  return (
    <div className="container mx-auto ">
      {/* <BrandingCard />
      <NewArrivalsBanner />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Slideshow title="Shoes" items={items} />
        </div>
        <div>
          <Slideshow title="Shirts" items={items} />
        </div>
        <div>
          <Slideshow title="T-shirts" items={items} />
        </div>
        <div>
          <Slideshow title="Caps" items={items} />
        </div>
        <div>
          <Slideshow title="Jeans" items={items} />
        </div>
      </div>
      <ClearanceSaleCard/>
      <MegaDiscountsCard/>
      <div className="flex justify-center mt-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get in Touch
        </button>
      </div>
      <div className="flex justify-center mt-4">
        <a href="/shop" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Go to Our Website
        </a>
      </div> */}
      <NewArrivalsBanner/>
      <Buy2Get1FreeComponent/>
      <HappyCustomersBanner/>
      <ShopByCategories/>
      <HomegrownBanner/>
    </div>
  );
};

export default ShoppingLandingPage;
