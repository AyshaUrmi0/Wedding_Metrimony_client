
import HowItWorks from "../HowItWorks/HowItWorks";
import Banner from "./Banner";
import ProfileCards from "./ProfileCards/ProfileCards";
import SuccessCounter from "./SuccessCounter/SuccessCounter";
import SuccessStories from "./SuccessStories/SuccessStories";


const Home = () => {
    return (
        <div>
           
           
            <Banner />
            <ProfileCards />
            <HowItWorks />
            <SuccessCounter />
            <SuccessStories />
           
        </div>
    );
};

export default Home;