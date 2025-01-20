
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
                                <h1 className="text-center text-4xl font-bold">Boost Customer Satisfaction and Retention Rates</h1>
                                <p className="my-5">Manage your restaurant`s financial health by tracking budgets, analyzing expenses, and optimizing revenue streams with advanced financial management tools.</p>
                                <Link className="btn text-black" to='/allfoods'>Show ALL Foods</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-slider2 bg-cover  rounded-2xl h-[600px]">
                        <div className="w-full h-full flex items-center justify-center text-center">
                            <div className="text-center text-green-400 md:w-10/12 lg:w-8/12">
                                <h1 className="text-center text-4xl font-bold">Maintain Food Safety Standards with Comprehensive Compliance Tracking Tools</h1>
                                <p className="my-5">Monitor orders from the moment they are placed until they reach the customer, ensuring accuracy and efficient service every time.</p>
                                <Link className="btn" to='/allfoods'>Show ALL Foods</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-slider3 bg-cover  rounded-2xl h-[600px]">
                        <div className="w-full h-full flex items-center justify-center text-center">
                            <div className="text-center text-blue-400 md:w-10/12 lg:w-8/12">
                                <h1 className="text-center text-4xl font-bold">Access Restaurant Data Anytime with Secure Cloud-Based Management Platform</h1>
                                <p className="my-5">Manage all aspects of your restaurant operations, from the kitchen to the dining area, using a single, easy-to-navigate centralized dashboard.</p>
                                <Link className="btn" to='/allfoods'>Show ALL Foods</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-slider4 bg-cover  rounded-2xl h-[600px]">
                        <div className="w-full h-full flex items-center justify-center text-center">
                            <div className="text-center text-black md:w-10/12 lg:w-8/12">
                                <h1 className="text-center text-4xl font-bold">Foster Customer Loyalty with Engaging and Rewarding Loyalty Programs</h1>
                                <p className="my-5">Reduce wait times, manage table reservations, and maximize seating capacity using advanced reservation tools that ensure a seamless dining experience for your customers.</p>
                                <Link className="btn" to='/allfoods'>Show ALL Foods</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-slider5 bg-cover  rounded-2xl h-[600px]">
                        <div className="w-full h-full flex items-center justify-center text-center">
                            <div className="text-center md:w-10/12 text-yellow-950 lg:w-8/12">
                                <h1 className="text-center text-4xl font-bold">Gain Complete Financial Control with Advanced Budget Management Tools</h1>
                                <p className="my-5">Simplify daily restaurant management tasks, from inventory to staff scheduling, with our all-in-one platform designed to optimize operations and enhance customer satisfaction.</p>
                                <Link className="btn" to='/allfoods'>Show ALL Foods</Link>
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