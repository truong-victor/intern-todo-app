function FixedBanner(){
    return (
      <div className="w-full flex justify-between">
        <div className="fixed-left z-[10] fixed top-[200px]">
          <img
            className="w-[140px] rounded-xl "
            src="/public/images/home/fixed-left.jpg"
            alt=""
          />
        </div>
        <div className="w-full z-[-10]"></div>
        <div className="fixed-right z-[10] fixed top-[200px] right-0">
          <img
            className="w-[140px] rounded-xl"
            src="/public/images/home//fixed-right.webp"
            alt=""
          />
        </div>
      </div>
    );
}
export default FixedBanner