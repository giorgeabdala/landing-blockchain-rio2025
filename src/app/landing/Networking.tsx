import Area from "@/app/components/Area";
import Menu from "@/app/components/Menu";
import Image from "next/image";
import CarouselFlowBite from "@/app/components/Carousel";


export default function Networking() {
    return (

        <Area className="bg-gradient-to-b  from-black   to-background-via-connect">
            <div
                className="flex flex-col items-center justify-center font-body text-justify text-2xl gap-12 my-24 mt-28">

                <div
                    className="flex font-background  from-polkadot-rose via-pink-500 to-polkadot-rose font-bold text-xl lg:text-5xl md:text-4xl">
                    <p>O QUE É O BLOCKCHAIN RIO?</p>
                </div>

                <div className="flex">
                    <p> O Blockchain.RIO é a representação do maior e principal hub de inovação em tecnologia blockchain
                        e finanças digitais da América Latina.
                        Blockchain Rio Festival 2025 será um encontro incrível de mentes brilhantes do universo cripto
                        brasileiro. </p>
                </div>

                <CarouselFlowBite />


            </div>

        </Area>
    )
}