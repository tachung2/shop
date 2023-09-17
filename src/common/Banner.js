import React, {useRef, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export default function Banner() {
    return(
        <><div className="banner mw">
            <Swiper 
            pagination={true} navigation={true} 
            modules={[Pagination, Navigation]} 
            className="_inner"
            >
                <SwiperSlide>
                    <div style={{backgroundImage: "url('/img/Img_bg1.jpg')"}}>
                        <p>이벤트 명</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div style={{backgroundImage: "url('/img/Img_bg2.jpg')"}}>
                        <p>이벤트 명</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div style={{backgroundImage: "url('/img/Img_bg3.jpg')"}}>
                        <p>이벤트 명</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div></>
    )
}