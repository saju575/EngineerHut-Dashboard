import React from 'react';

import '../../../stylesheets/Products.css';
import '../../../stylesheets/Responsive.css'

import { MdKeyboardArrowRight } from 'react-icons/md'
import { GoSearch } from 'react-icons/go'
import { GiRoundStar } from 'react-icons/gi'
import { AiOutlineHeart } from 'react-icons/ai'
import { HiArrowsExpand } from 'react-icons/hi'
import { PiArrowCounterClockwiseFill } from 'react-icons/pi'

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Pagination from '@mui/material/Pagination';

function valuetext(value) {
	return `${value}°C`;
}

function Products() {

	const [value, setValue] = React.useState([20, 37]);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<React.Fragment>
			<div className="product-wrapper p-8">
				<h3 className='font-semibold product-title'>Products</h3>
				<p className='products-links'>Home / <span>Shop</span></p>
				<div className="product-inner mx-auto mt-6 flex">
					<div className="product-inner--left w-3/12 pr-4">
						<div className="product-categories pl-4 pr-10 py-5">
							<h3 className="text-lg font-semibold mb-4">Products Categories</h3>
							<hr />
							<div className="product-categories--inner">
								<div className="categories-inner--links flex justify-between pt-2 font-medium">
									<div className='flex items-center categories-inner--linksRes'>
										<i className='pr-1'><MdKeyboardArrowRight /></i>
										<p>Womens Bag</p>
									</div>
									<h4>15</h4>
								</div>
								<div className="categories-inner--links flex justify-between pt-2 font-medium">
									<div className='flex items-center categories-inner--linksRes'>
										<i className='pr-1'><MdKeyboardArrowRight /></i>
										<p>Mens Accessories</p>
									</div>
									<h4>20</h4>
								</div>
								<div className="categories-inner--links flex justify-between pt-2 font-medium">
									<div className='flex items-center categories-inner--linksRes'>
										<i className='pr-1'><MdKeyboardArrowRight /></i>
										<p>School Bag</p>
									</div>
									<h4>33</h4>
								</div>
								<div className="categories-inner--links flex justify-between pt-2 font-medium">
									<div className='flex items-center categories-inner--linksRes'>
										<i className='pr-1'><MdKeyboardArrowRight /></i>
										<p>Boots</p>
									</div>
									<h4>40</h4>
								</div>
								<div className="categories-inner--links flex justify-between pt-2 font-medium">
									<div className='flex items-center categories-inner--linksRes'>
										<i className='pr-1'><MdKeyboardArrowRight /></i>
										<p>Boys Dress</p>
									</div>
									<h4>44</h4>
								</div>
								<div className="categories-inner--links flex justify-between pt-2 font-medium">
									<div className='flex items-center categories-inner--linksRes'>
										<i className='pr-1'><MdKeyboardArrowRight /></i>
										<p>Womens Fashion</p>
									</div>
									<h4>50</h4>
								</div>
								<div className="categories-inner--links flex justify-between pt-2 font-medium">
									<div className='flex items-center categories-inner--linksRes'>
										<i className='pr-1'><MdKeyboardArrowRight /></i>
										<p>Faship Accessories</p>
									</div>
									<h4>33</h4>
								</div>
								<div className="categories-inner--links flex justify-between pt-2 font-medium">
									<div className='flex items-center categories-inner--linksRes'>
										<i className='pr-1'><MdKeyboardArrowRight /></i>
										<p>Leather Bag</p>
									</div>
									<h4>31</h4>
								</div>
								<div className="categories-inner--links flex justify-between pt-2 font-medium">
									<div className='flex items-center categories-inner--linksRes'>
										<i className='pr-1'><MdKeyboardArrowRight /></i>
										<p>Makeup Corner</p>
									</div>
									<h4>25</h4>
								</div>
							</div>
						</div>
						<div className="price-ranges my-5 pl-4 pr-10 py-5">
							<h3 className='font-semibold mb-4 '>Price Ranges</h3>
							<hr />
							<h5 className='mt-4 mb-2'>Range: <span className='font-semibold'>$100 - $300</span></h5>
							<Box sx={{ width: 300 }}>
								<Slider
									getAriaLabel={() => 'Temperature range'}
									value={value}
									onChange={handleChange}
									valueLabelDisplay="auto"
									getAriaValueText={valuetext}
								/>
							</Box>
						</div>
						<div className="product-brands pl-4 pr-10 py-5 mb-5">
							<h3 className='font-semibold mb-4'>Product Brands</h3>
							<hr />
							<div className="product-brands--links items-center flex pt-2 font-medium">
								<i className='pr-1'><MdKeyboardArrowRight /></i>
								<p>Nike</p>
							</div>
							<div className="product-brands--links items-center flex pt-2 font-medium">
								<i className='pr-1'><MdKeyboardArrowRight /></i>
								<p>Zara</p>
							</div>
							<div className="product-brands--links items-center flex pt-2 font-medium">
								<i className='pr-1'><MdKeyboardArrowRight /></i>
								<p>Denum</p>
							</div>
							<div className="product-brands--links items-center flex pt-2 font-medium">
								<i className='pr-1'><MdKeyboardArrowRight /></i>
								<p>Madame</p>
							</div>
							<div className="product-brands--links items-center flex pt-2 font-medium">
								<i className='pr-1'><MdKeyboardArrowRight /></i>
								<p>Aarong</p>
							</div>
						</div>
						<div className="product-size pl-4 pr-10 py-5">
							<h3 className='font-semibold mb-4'>Size</h3>
							<hr />
							<div className="product-size--inner  flex mt-3">
								<p className='border my-1 mr-2 h-10 w-10'>XL</p>
								<p className='border my-1 mr-2 h-10 w-10'>X</p>
								<p className='border my-1 mr-2 h-10 w-10'>L</p>
								<p className='border my-1 mr-2 h-10 w-10'>M</p>
							</div>
							<p className='border my-1 mr-2 p-3 h-10 items-center w-24 justify-center flex block'>Slim Fit</p>
						</div>
					</div>
					<div className="product-inner--right w-9/12">
						<div className='flex items-center product-inner--rightRes'>
							<div className="product-search">
								<input className='p-4 font-medium' type="text" placeholder="Search" />
								<div className="search-icon">
									<GoSearch />
								</div>
							</div>
							<h3 className='showingResult pl-4 font-medium'>Showing 1-8 of 60 results</h3>
						</div>
						<div className='flex items-center product-tabsResponsive'>
							<div className="product-tabs mt-5 p-5">
								<ul className='flex justify-around font-semibold'>
									<li><a href="#">Top Rated</a></li>
									<span className='border-right1'></span>
									<li><a href="#">Popular</a></li>
									<span className='border-right2'></span>
									<li><a href="#">Newest</a></li>
								</ul>
							</div>
							<div className="product-tabs--btn mt-5 ml-5">
								<a href="/upload-product" className='p-5 px-12 font-semibold'>Upload Product</a>
							</div>
						</div>
						<div className="product-card flex mt-7">
							<div className="product-card--inner p-5 mr-10">
								<div className="product-card--image">
									<picture>
										<img src="/src/assets/figma-img3.jpeg" alt="product" />
									</picture>
									<div className="product-img--icons ">
										<p className='my-4 p-4'><AiOutlineHeart /></p>
										<a href="/products-details">
											<p className='my-4 p-4'><HiArrowsExpand /></p>
										</a>
										<p className='my-4 p-4'><PiArrowCounterClockwiseFill /></p>
									</div>
								</div>
								<h3 className='font-medium my-4'>Polka Dots Women Dress</h3>
								<h4 className='font-medium'> <span className='pr-2'>$155</span> $135 </h4>
								<div className='flex product-card--rating mt-2 items-center'>
									<i className='pr-1'> <GiRoundStar /> </i>
									<i className='pr-1'> <GiRoundStar /> </i>
									<i className='pr-1'> <GiRoundStar /> </i>
									<i className='pr-1'> <GiRoundStar /> </i>
									<i> <GiRoundStar /> </i>
									<p className='pl-2 font-medium'>(33)</p>
									<a href="#" className='p-3 font-medium ml-4 border'>Add To Card</a>
								</div>

							</div>
							<div className="product-card--inner p-5">
								<div className="product-card--image">
									<picture>
										<img src="/src/assets/fimga-img4.jpeg" alt="product" />
									</picture>
									<div className="product-img--icons ">
										<p className='my-4 p-4'><AiOutlineHeart /></p>
										<a href="/products-details">
											<p className='my-4 p-4'><HiArrowsExpand /></p>
										</a>
										<p className='my-4 p-4'><PiArrowCounterClockwiseFill /></p>
									</div>
								</div>
								<h3 className='font-medium my-4'>Double Breasted Suit</h3>
								<h4 className='font-medium'>$160</h4>
								<div className='flex product-card--rating mt-2 items-center'>
									<i className='pr-1'> <GiRoundStar /> </i>
									<i className='pr-1'> <GiRoundStar /> </i>
									<i className='pr-1'> <GiRoundStar /> </i>
									<i className='pr-1'> <GiRoundStar /> </i>
									<i> <GiRoundStar /> </i>
									<p className='pl-2 font-medium'>(33)</p>
									<a href="#" className='p-3 font-medium ml-4 border'>Add To Card</a>
								</div>
							</div>
						</div>
						<div className="product-card flex mt-7">
							<div className="product-card--inner p-5 mr-10">
								<div className="product-card--image">
									<picture>
										<img src="/src/assets/figma-img.jpeg" alt="product" />
									</picture>
									<div className="product-img--icons ">
										<p className='my-4 p-4'><AiOutlineHeart /></p>
										<a href="/products-details">
											<p className='my-4 p-4'><HiArrowsExpand /></p>
										</a>
										<p className='my-4 p-4'><PiArrowCounterClockwiseFill /></p>
									</div>
								</div>
								<h3 className='font-medium my-4'>Polka Dots Women Dress</h3>
								<h4 className='font-medium'> <span className='pr-2'>$155</span> $135 </h4>
								<div className='flex product-card--rating mt-2 items-center'>
									<i className='pr-1'> <GiRoundStar /> </i>
									<i className='pr-1'> <GiRoundStar /> </i>
									<i className='pr-1'> <GiRoundStar /> </i>
									<i className='pr-1'> <GiRoundStar /> </i>
									<i> <GiRoundStar /> </i>
									<p className='pl-2 font-medium'>(33)</p>
									<a href="#" className='p-3 font-medium ml-4 border'>Add To Card</a>
								</div>
							</div>
							<div className="product-card--inner p-5">
								<div className="product-card--image">
									<picture>
										<img src="/src/assets/figma-img5.jpeg" alt="product" />
									</picture>
									<div className="product-img--icons ">
										<p className='my-4 p-4'><AiOutlineHeart /></p>
										<a href="/products-details">
											<p className='my-4 p-4'><HiArrowsExpand /></p>
										</a>
										<p className='my-4 p-4'><PiArrowCounterClockwiseFill /></p>
									</div>
								</div>
								<h3 className='font-medium my-4'>Double Breasted Suit</h3>
								<h4 className='font-medium'>$160</h4>
								<div className='flex product-card--rating mt-2 items-center'>
									<i className='pr-1'> <GiRoundStar /> </i>
									<i className='pr-1'> <GiRoundStar /> </i>
									<i className='pr-1'> <GiRoundStar /> </i>
									<i className='pr-1'> <GiRoundStar /> </i>
									<i> <GiRoundStar /> </i>
									<p className='pl-2 font-medium'>(33)</p>
									<a href="#" className='p-3 font-medium ml-4 border'>Add To Card</a>
								</div>
							</div>
						</div>
						<div className="product-card flex mt-7">
							<div className="product-card--inner p-5 mr-10">
								<div className="product-card--image">
									<picture>
										<img src="/src/assets/figma-img5.jpeg" alt="product" />
									</picture>
									<div className="product-img--icons ">
										<p className='my-4 p-4'><AiOutlineHeart /></p>
										<a href="/products-details">
											<p className='my-4 p-4'><HiArrowsExpand /></p>
										</a>
										<p className='my-4 p-4'><PiArrowCounterClockwiseFill /></p>
									</div>
								</div>
								<h3 className='font-medium my-4'>Polka Dots Women Dress</h3>
								<h4 className='font-medium'> <span className='pr-2'>$155</span> $135 </h4>
								<div className='flex product-card--rating mt-2 items-center'>
									<i className='pr-1'> <GiRoundStar /> </i>
									<i className='pr-1'> <GiRoundStar /> </i>
									<i className='pr-1'> <GiRoundStar /> </i>
									<i className='pr-1'> <GiRoundStar /> </i>
									<i> <GiRoundStar /> </i>
									<p className='pl-2 font-medium'>(33)</p>
									<a href="#" className='p-3 font-medium ml-4 border'>Add To Card</a>
								</div>
							</div>
							<div className="product-card--inner p-5">
								<div className="product-card--image">
									<picture>
										<img src="/src/assets/figma-img3.jpeg" alt="product" />
									</picture>
									<div className="product-img--icons ">
										<p className='my-4 p-4'><AiOutlineHeart /></p>
										<a href="/products-details">
											<p className='my-4 p-4'><HiArrowsExpand /></p>
										</a>
										<p className='my-4 p-4'><PiArrowCounterClockwiseFill /></p>
									</div>
								</div>
								<h3 className='font-medium my-4'>Double Breasted Suit</h3>
								<h4 className='font-medium'>$160</h4>
								<div className='flex product-card--rating mt-2 items-center'>
									<i className='pr-1'> <GiRoundStar /> </i>
									<i className='pr-1'> <GiRoundStar /> </i>
									<i className='pr-1'> <GiRoundStar /> </i>
									<i className='pr-1'> <GiRoundStar /> </i>
									<i> <GiRoundStar /> </i>
									<p className='pl-2 font-medium'>(33)</p>
									<a href="#" className='p-3 font-medium ml-4 border'>Add To Card</a>
								</div>
							</div>
						</div>
						<div className="product-card flex mt-7">
							<div className="product-card--inner p-5 mr-10">
								<div className="product-card--image">
									<picture>
										<img src="/src/assets/figma-img5.jpeg" alt="product" />
									</picture>
									<div className="product-img--icons ">
										<p className='my-4 p-4'><AiOutlineHeart /></p>
										<a href="/products-details">
											<p className='my-4 p-4'><HiArrowsExpand /></p>
										</a>
										<p className='my-4 p-4'><PiArrowCounterClockwiseFill /></p>
									</div>
								</div>
								<h3 className='font-medium my-4'>Polka Dots Women Dress</h3>
								<h4 className='font-medium'> <span className='pr-2'>$155</span> $135 </h4>
								<div className='flex product-card--rating mt-2 items-center'>
									<i className='pr-1'> <GiRoundStar /> </i>
									<i className='pr-1'> <GiRoundStar /> </i>
									<i className='pr-1'> <GiRoundStar /> </i>
									<i className='pr-1'> <GiRoundStar /> </i>
									<i> <GiRoundStar /> </i>
									<p className='pl-2 font-medium'>(33)</p>
									<a href="#" className='p-3 font-medium ml-4 border'>Add To Card</a>
								</div>
							</div>
						</div>
						<Pagination className='flex justify-end mr-4 pagination' count={10} variant="outlined" shape="rounded" />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Products;