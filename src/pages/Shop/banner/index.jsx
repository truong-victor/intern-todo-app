import Banner from "./Banner";
import { ParallaxProvider } from 'react-scroll-parallax';
function BannerPage(){
    return(
        <ParallaxProvider>
            <Banner/>

        </ParallaxProvider>
    )
}
export default BannerPage