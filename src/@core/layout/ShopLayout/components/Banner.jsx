function Banner() {
    return(
        <div className="w-full flex justify-between fixed top-[75px] z-[-10]">
            <div className="fixed-left">
                <img className="w-[140px] rounded-xl" 
                src="/public/images/home/fixed-left.jpg" alt="" />
            </div>
            <div className="fixed-right">
                <img className="w-[140px] rounded-xl" 
                src="/public/images/home/fixed-right.webp" alt="" />
            </div>
        </div>
    );
}
export default Banner;