
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from "react-router-dom";


const Slider = () => {
    return (
        <section className="mb-16">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
               
                loop={true}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="bg-slider1  rounded-2xl bg-cover h-[600px]">
                        <div className="w-full h-full flex items-center justify-center text-center">
                            <div className="text-center  md:w-10/12 text-white lg:w-8/12">
                                <h1 className="text-center text-4xl font-bold">Seamless Solutions for Managing All Your Real Estate Needs</h1>
                                <p className="my-5">Transform how you buy, sell, and manage properties with innovative tools, expert guidance, and personalized service for lasting success.</p>
                                <Link className="btn text-black" to='/allProperties'>Show ALL Property</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-slider2 bg-cover  rounded-2xl h-[600px]">
                        <div className="w-full h-full flex items-center justify-center text-center">
                            <div className="text-center text-white md:w-10/12 lg:w-8/12">
                                <h1 className="text-center text-4xl font-bold">Modern Tools for Efficient and Reliable Property Management Services</h1>
                                <p className="my-5">Streamline your real estate operations with cutting-edge technology and trusted experts, all tailored to your specific needs and goals</p>
                                <Link className="btn" to='/allProperties'>Show ALL Property</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-slider3 bg-cover  rounded-2xl h-[600px]">
                        <div className="w-full h-full flex items-center justify-center text-center">
                            <div className="text-center text-orange-300 md:w-10/12 lg:w-8/12">
                                <h1 className="text-center text-4xl font-bold">Effortlessly Manage Residential and Commercial Properties with Ease</h1>
                                <p className="my-5">Experience unmatched simplicity, transparency, and efficiency in all aspects of property management, from tenant interactions to maintenance tasks.</p>
                                <Link className="btn" to='/allProperties'>Show ALL Property</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-slider4 bg-cover  rounded-2xl h-[600px]">
                        <div className="w-full h-full flex items-center justify-center text-center">
                            <div className="text-center text-black md:w-10/12 lg:w-8/12">
                                <h1 className="text-center text-4xl font-bold">Your Trusted Partner for All Real Estate Management Services</h1>
                                <p className="my-5">With our expertise and technology, we ensure your properties are well-managed, profitable, and always tenant-ready for success</p>
                                <Link className="btn" to='/allProperties'>Show ALL Property</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-slider5 bg-cover  rounded-2xl h-[600px]">
                        <div className="w-full h-full flex items-center justify-center text-center">
                            <div className="text-center md:w-10/12 text-yellow-950 lg:w-8/12">
                                <h1 className="text-center text-4xl font-bold">Revolutionizing Property Management for Today’s Real Estate Investors</h1>
                                <p className="my-5">Simplify your real estate journey with intuitive tools and professional services designed to maximize efficiency and minimize stress</p>
                                <Link className="btn" to='/allProperties'>Show ALL Property</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <div className="bg-slider6 bg-cover  rounded-2xl h-[600px]">
                        <div className="w-full h-full   flex items-center justify-center text-center">
                            <div className="text-center md:w-10/12 lg:w-8/12">
                                <h1 className="text-center text-4xl font-bold">Design Digital Menus and Enable Seamless Online Ordering System</h1>
                                <p className="my-5">Access real-time analytics and detailed reports to make informed decisions, identify trends, and continuously improve your restaurant`s overall performance.</p>
                                <Link className="btn" to='/allfoods'>Show ALL Foods</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-slider7  rounded-2xl bg-cover h-[600px]">
                        <div className="w-full h-full flex items-center justify-center text-center">
                            <div className="text-center md:w-10/12 text-yellow-800 lg:w-8/12">
                                <h1 className="text-center  text-4xl font-bold">Streamline Your Restaurant Management Process with All-in-One Solution</h1>
                                <p className="my-5">Enhance customer experiences by leveraging data to offer personalized services, ensuring happy diners, and fostering loyalty with customized rewards and feedback tools.</p>
                                <Link className="btn" to='/allfoods'>Show ALL Foods</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide> */}


            </Swiper>
        </section>
    );
};

export default Slider;