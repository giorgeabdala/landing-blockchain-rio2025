import { Carousel } from 'flowbite-react';
import Image from "next/image";

export default function CarouselFlowBite() {
    return (
        <div className="h-auto w-auto max-w-[700px] max-h-[600px] flex justify-center items-center overflow-hidden mt-14">
            <Carousel indicators={false} className="overflow-hidden mb-4">
                <div className="relative h-[500px] w-[500px]">
                    <Image className="rounded-2xl" src="/photos/foto1.jpeg" alt="foto" layout="fill" objectFit="cover"/>
                </div>
                <div className="relative h-[500px] w-[500px]">
                    <Image className="rounded-2xl" src="/photos/foto2.jpeg" alt="foto" layout="fill" objectFit="cover"/>
                </div>
                <div className="relative h-[500px] w-[500px]">
                    <Image className="rounded-2xl" src="/photos/foto3.jpeg" alt="foto" layout="fill" objectFit="cover"/>
                </div>

                <div className="relative h-[500px] w-[500px]">
                    <Image className="rounded-2xl" src="/photos/foto7.jpeg" alt="foto" layout="fill" objectFit="cover"/>
                </div>

                <div className="relative h-[500px] w-[500px]">
                    <Image className="rounded-2xl" src="/photos/foto5.jpeg" alt="foto" layout="fill" objectFit="cover"/>
                </div>
            </Carousel>
        </div>
    );
}
