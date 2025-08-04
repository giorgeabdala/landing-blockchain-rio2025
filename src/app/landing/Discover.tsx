import Area from "@/app/components/Area";
import Image from 'next/image'


export default function Discover() {
    return (
        <div className="bg-gradient-to-b from-background-via-connect to-background-blockchain-rio">
            <div
                className="flex flex-col lg:flex-row items-center justify-center font-body text-justify text-2xl gap-8 my-24 mx-8 lg:mx-32">
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Image className="rounded-full" src="/asset6.png" alt="imagem dos palestrantes da blockchain Rio" width={571} height={606} />

                <div className="leading-relaxed xl:leading-loose 2xl:mx-24">
                    <p className="xl:hidden">
                        Participe do evento com líderes e especialistas em economia tokenizada. Oportunidades de
                        networking, negócios e aprendizado com empresas, desenvolvedores e autoridades.
                    </p>

                    <p className="hidden xl:block"><span className="font-bold">O evento contará com líderes,</span> especialistas e educadores focados na economia tokenizada,
                        oferecendo oportunidades de networking, geração de negócios e aprendizagem colaborativa.
                        O festival reunirá empresas, desenvolvedores, acadêmicos e autoridades para acelerar o
                        desenvolvimento do ecossistema.</p>

                </div>

            </div>

        </div>


    )
}