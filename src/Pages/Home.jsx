import Advertisment from "../Components/HomeComponents/Advertisment";
import LatestedReviews from "../Components/HomeComponents/LatestedReviews";
import LunchNEST from "../Components/HomeComponents/LunchNEST";
import ProfesionnalChose from "../Components/HomeComponents/ProfesionnalChose";
import Slider from "../Components/HomeComponents/Slider";
import SectionTitle from "../Components/Shared/SectionTitle";
import {Helmet} from "react-helmet";

const Home = () => {
    return (
        <div>
             <Helmet>
        <title>Home | Dream Nest Real Estate</title>
         </Helmet>
            <section>
                   <Slider></Slider>
            </section>
            <section>
                <SectionTitle head={'Advertisement'} subhead={'Make sure your design and website idea is unique. First, finalize your idea (what type of website you want to build). Then google the site design or visit '}></SectionTitle>
                    <div >
                       <Advertisment></Advertisment>
                    </div>
            </section>
            <section>
            <SectionTitle head={'Latest User review'} subhead={'Make sure your design and website idea is unique. First, finalize your idea (what type of website you want to build). Then google the site design or visit '}></SectionTitle>

                    <div >
                        <LatestedReviews></LatestedReviews>
                    </div>
            </section>
            <section>
                <LunchNEST></LunchNEST>
            </section>
            <section>
                <ProfesionnalChose></ProfesionnalChose>
            </section>
            
        </div>
    );
};

export default Home;