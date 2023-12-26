import React from 'react';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import LaptopIcon from '@mui/icons-material/Laptop';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import MouseIcon from '@mui/icons-material/Mouse';
import MonitorIcon from '@mui/icons-material/Monitor';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import RedditIcon from '@mui/icons-material/Reddit';
import PrintSharpIcon from '@mui/icons-material/PrintSharp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Menu() {
  return (
    <div className='w-full bg-[#005091] flex justify-center'>
        <div className='w-[80%] h-[50px] flex items-center justify-between'>
            <div>
                <section>
                <div className="flex items-center w-[200px] h-[30px] bg-white border rounded-lg  justify-center">
                    <DensityMediumIcon style={{ fontSize: 18, color: '#0F5B9E'}}/>
                    <span className=''style={{ fontSize: 12 ,marginLeft:4, color:'#0F5B9E',fontWeight:600}}><h2>DANH MỤC SẢN PHẨM</h2>  </span>
                </div>
                </section>
            </div>
            <div>
                <section>
                <div className="flex items-center  w-auto h-[30px] rounded-lg  justify-center">
                    <LaptopIcon style={{ fontSize: 25, color: 'white'}}/>
                    <span className=''style={{ fontSize: 12,marginLeft:4, color:'white',fontWeight:600}}><h2>LapTop</h2>  </span>
                    <ArrowDropDownIcon style={{color:'white'}}/>
                </div>
                </section>
            </div>
            <div>
                <section>
                <div className="flex items-center  w-auto h-[30px] rounded-lg  justify-center">
                    <AdUnitsIcon style={{ fontSize: 25, color: 'white'}}/>
                    <span className=''style={{ fontSize: 12 ,marginLeft:4, color:'white',fontWeight:600}}><h2>PC</h2>  </span>
                    <ArrowDropDownIcon style={{color:'white'}}/>
                </div>
                </section>
            </div>
            <div>
                <section>
                <div className="flex items-center  w-auto h-[30px] rounded-lg  justify-center">
                    <PrintSharpIcon style={{ fontSize: 25, color: 'white'}}/>
                    <span className=''style={{ fontSize: 12 ,marginLeft:4, color:'white',fontWeight:600}}><h2>Linh Kiện PC</h2>  </span>
                    <ArrowDropDownIcon style={{color:'white'}}/>
                </div>
                </section>
            </div>
            <div>
                <section>
                <div className="flex items-center  w-auto h-[30px] rounded-lg  justify-center">
                    <MonitorIcon style={{ fontSize: 25, color: 'white'}}/>
                    <span className=''style={{ fontSize: 12 ,marginLeft:4, color:'white',fontWeight:600}}><h2>Màn Hình</h2>  </span>
                    <ArrowDropDownIcon style={{color:'white'}}/>
                </div>
                </section>
            </div>
            <div>
                <section>
                <div className="flex items-center  w-auto h-[30px] rounded-lg  justify-center">
                    <MouseIcon style={{ fontSize: 25, color: 'white'}}/>
                    <span className=''style={{ fontSize: 12 ,marginLeft:4, color:'white',fontWeight:600}}><h2>Phím Chuột Ghế Gear</h2>  </span>
                    <ArrowDropDownIcon style={{color:'white'}}/>
                </div>
                </section>
            </div>
            <div>
                <section>
                <div className="flex items-center  w-auto h-[30px] rounded-lg  justify-center">
                    <LocalPrintshopIcon style={{ fontSize: 25, color: 'white'}}/>
                    <span className=''style={{ fontSize: 12 ,marginLeft:4, color:'white',fontWeight:600}}><h2>Thiết Bị Văn Phòng</h2>  </span>
                    <ArrowDropDownIcon style={{color:'white'}}/>
                </div>
                </section>
            </div>
            <div>
                <section>
                <div className="flex items-center  w-auto h-[30px] rounded-lg  justify-center ">
                    <RedditIcon style={{ fontSize: 25, color: 'white'}}/>
                    <span className=''style={{ fontSize: 12 ,marginLeft:4, color:'white',fontWeight:600}}><h2>Phòng Net -  Quán Net</h2>  </span>
                    <ArrowDropDownIcon style={{color:'white'}}/>
                </div>
                </section>
            </div>
        </div>
    </div>
  );
}

export default Menu;
