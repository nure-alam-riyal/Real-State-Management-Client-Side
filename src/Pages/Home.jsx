import Advertisment from "../Components/HomeComponents/Advertisment";
import LatestedReviews from "../Components/HomeComponents/LatestedReviews";


const Home = () => {
    return (
        <div>
            <section>
                    <div >
                       <Advertisment></Advertisment>
                    </div>
            </section>
            <section>
                    <div >
                        <LatestedReviews></LatestedReviews>
                    </div>
            </section>
            
        </div>
    );
};

export default Home;