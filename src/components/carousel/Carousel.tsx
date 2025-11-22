import { Swiper, SwiperSlide } from "swiper/react";
import {FreeMode, Navigation, Scrollbar } from "swiper/modules";

export default function Carousel() {
  return (
    <>
    	<Swiper
        className="w-screen relative"
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        scrollbar={{
              hide: false,
            }}

        modules={[FreeMode, Scrollbar, Navigation]}
        breakpoints={{
            0: {          // mobile
            slidesPerView: 1.2,
            spaceBetween: 16,
            },
            480: {        // telas pequenas
            slidesPerView: 2,
            spaceBetween: 16,
            },
            640: {        // sm: tablets pequenos
            slidesPerView: 3,
            spaceBetween: 20,
            },
            768: {        // md
            slidesPerView: 4,
            spaceBetween: 25,
            },
            1024: {       // desktop
            slidesPerView: 5,
            spaceBetween: 30,
            },
        }}
      >

	<SwiperSlide>
		<div className="group relative border border-(--merlot-color) rounded-2xl border-r-8 border-b-4 overflow-hidden">

			<div className="w-full aspect-4/3 bg-gray-200 overflow-hidden">
			<img
				src="src/assets/img/undraw_video-games_itxa.svg"
				alt=""
				className="w-full h-full object-cover group-hover:opacity-75"
			/>
			</div>

			<hr className="border border-(--merlot-color)" />

			<div className="mt-4 flex justify-between">
			<div>
				<h3 className="text-sm text-gray-700 pl-2 relative">
				<a href="#">
					<span aria-hidden="true" className="absolute inset-0"></span>
					Generic Game Title
				</a>
				</h3>
				<p className="mt-1 text-sm text-gray-500 p-2">category</p>
			</div>
			<p className="text-sm font-medium text-gray-900 pr-2">$35</p>
			</div>

		</div>
	</SwiperSlide>

	<SwiperSlide>
		<div className="group relative border border-(--merlot-color) rounded-2xl border-r-8 border-b-4 overflow-hidden">

			<div className="w-full aspect-4/3 bg-gray-200 overflow-hidden">
			<img
				src="src/assets/img/undraw_video-games_itxa.svg"
				alt=""
				className="w-full h-full object-cover group-hover:opacity-75"
			/>
			</div>

			<hr className="border border-(--merlot-color)" />

			<div className="mt-4 flex justify-between">
			<div>
				<h3 className="text-sm text-gray-700 pl-2 relative">
				<a href="#">
					<span aria-hidden="true" className="absolute inset-0"></span>
					Generic Game Title
				</a>
				</h3>
				<p className="mt-1 text-sm text-gray-500 p-2">category</p>
			</div>
			<p className="text-sm font-medium text-gray-900 pr-2">$35</p>
			</div>

		</div>
	</SwiperSlide>

<SwiperSlide>
		<div className="group relative border border-(--merlot-color) rounded-2xl border-r-8 border-b-4 overflow-hidden">

			<div className="w-full aspect-4/3 bg-gray-200 overflow-hidden">
			<img
				src="src/assets/img/undraw_video-games_itxa.svg"
				alt=""
				className="w-full h-full object-cover group-hover:opacity-75"
			/>
			</div>

			<hr className="border border-(--merlot-color)" />

			<div className="mt-4 flex justify-between">
			<div>
				<h3 className="text-sm text-gray-700 pl-2 relative">
				<a href="#">
					<span aria-hidden="true" className="absolute inset-0"></span>
					Generic Game Title
				</a>
				</h3>
				<p className="mt-1 text-sm text-gray-500 p-2">category</p>
			</div>
			<p className="text-sm font-medium text-gray-900 pr-2">$35</p>
			</div>

		</div>
	</SwiperSlide>

<SwiperSlide>
		<div className="group relative border border-(--merlot-color) rounded-2xl border-r-8 border-b-4 overflow-hidden">

			<div className="w-full aspect-4/3 bg-gray-200 overflow-hidden">
			<img
				src="src/assets/img/undraw_video-games_itxa.svg"
				alt=""
				className="w-full h-full object-cover group-hover:opacity-75"
			/>
			</div>

			<hr className="border border-(--merlot-color)" />

			<div className="mt-4 flex justify-between">
			<div>
				<h3 className="text-sm text-gray-700 pl-2 relative">
				<a href="#">
					<span aria-hidden="true" className="absolute inset-0"></span>
					Generic Game Title
				</a>
				</h3>
				<p className="mt-1 text-sm text-gray-500 p-2">category</p>
			</div>
			<p className="text-sm font-medium text-gray-900 pr-2">$35</p>
			</div>

		</div>
	</SwiperSlide>

<SwiperSlide>
		<div className="group relative border border-(--merlot-color) rounded-2xl border-r-8 border-b-4 overflow-hidden">

			<div className="w-full aspect-4/3 bg-gray-200 overflow-hidden">
			<img
				src="src/assets/img/undraw_video-games_itxa.svg"
				alt=""
				className="w-full h-full object-cover group-hover:opacity-75"
			/>
			</div>

			<hr className="border border-(--merlot-color)" />

			<div className="mt-4 flex justify-between">
			<div>
				<h3 className="text-sm text-gray-700 pl-2 relative">
				<a href="#">
					<span aria-hidden="true" className="absolute inset-0"></span>
					Generic Game Title
				</a>
				</h3>
				<p className="mt-1 text-sm text-gray-500 p-2">category</p>
			</div>
			<p className="text-sm font-medium text-gray-900 pr-2">$35</p>
			</div>

		</div>
	</SwiperSlide>




    </Swiper>
      
    </>
  )
}

