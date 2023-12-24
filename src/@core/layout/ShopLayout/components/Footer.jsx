
const Footer = () => {
  return (
    <div className="mt-[30px] pt-[40px] ">
      <div className="flex justify-between px-[120px] py-[40px]">
        <ul>
          <h5 className="font-semibold text-14 mb-4">GIỚI THIỆU NGUYỄN CÔNG</h5>
          <li className="font-normal text-13">Giới thiệu công ty</li>
          <li className="font-normal text-13">Thông tin liên hệ</li>
          <li className="font-normal text-13">Tin Tức</li>
          <li className="font-normal text-13">Tuyển dụng</li>
          <li className="font-normal text-13">Hệ thống cửa hàng</li>

          <div id="socialNet">
            <a href="">
              <img src="" alt="" />
            </a>
          </div>
        </ul>
        <ul>
          <h5 className="font-semibold text-14 mb-4">HỖ TRỢ KHÁCH HÀNG</h5>
          <li className="font-normal text-13">Hướng dẫn mua hàng trực tuyến</li>
          <li className="font-normal text-13">Hướng dẫn thanh toán</li>
          <li className="font-normal text-13">Gửi yêu cầu bảo hành</li>
        </ul>
        <ul>
          <h5 className="font-semibold text-14 mb-5">CHÍNH SÁCH CHUNG</h5>
          <li className="font-normal text-13">Chính sách, quy định chung</li>
          <li className="font-normal text-13">Chính sách vận chuyển</li>
          <li className="font-normal text-13">Chính sách bảo hành</li>
          <li className="font-normal text-13">Dịch vụ tính phí</li>
          <li className="font-normal text-13">Chính sách nhập lại tính phíh</li>
        </ul>
        <ul>
          <h5 className="font-semibold text-14 mb-5">THÔNG TIN KHUYẾN MẠI</h5>
          <li className="font-normal text-13">Thông tin khuyến mại</li>
          <li className="font-normal text-13">Sản phẩm khuyến maị</li>
          <li className="font-normal text-13">Sản phẩm bán chạy</li>
        </ul>
      </div>

      <div id="footer_bottom" className="bg-[#f4f4f4] px-[120px] py-[10px]">
        <p>WEBSITE ĐƯỢC SỞ HỮU VÀ QUẢN LÝ BỞI NGUYỄN VIẾT CÔNG</p>
        <b>CÔNG TY TNHH MÁY TÍNH NGUYỄN CÔNG</b>
        <p>
          Địa chỉ: Số 377-379 Trương Định, tổ 41 - Phường Tương Mai - Quận Hoàng
          Mai - Hà Nội.
        </p>
        <p>
          Mã số thuế: 0107568451 do Sở Kế Hoạch và Đầu Tư TP.Hà Nội (22/12/2015)
        </p>
        <p>Mua hàng: 0989.336.366 - 0899.999.191</p>
        <p className="d-flex list-contact-footer align-items-center">
          <span>
            GÓP Ý : <a href="tel:0978131113">0978.131.113</a> -{" "}
            <a href="tel:0971113333">0971.113.333</a>.
          </span>
          <span>
            Email:{" "}
            <a href="mailTo:info@nguyencongpc.vn">info@nguyencongpc.vn</a>.
          </span>
          <span>
            Website: <a href="/">nguyencongpc.vn</a>.
          </span>
          <span>
            Fanpage:{" "}
            <a href="www.facebook.com/MAY.TINH.NGUYEN.CONG">
              www.facebook.com/MAY.TINH.NGUYEN.CONG
            </a>
            .
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;