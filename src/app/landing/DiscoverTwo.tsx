import Area from "@/app/components/Area";
import Image from 'next/image'


export default function DiscoverTwo() {
    return (
        <div className="bg-gradient-to-b  from-black   to-background-via-connect">
            <div
                className="flex flex-col lg:flex-row items-center justify-center font-body text-justify text-2xl gap-8 my-24 mx-10 mr-56 ">
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <div className="leading-relaxed xl:leading-loose 2xl:mx-24">
                    <p className="xl:hidden">
                        Participe do evento com líderes e especialistas em economia tokenizada. Oportunidades de
                        networking, negócios e aprendizado com empresas, desenvolvedores e autoridades.
                    </p>

                    <p className="hidden xl:block"><span className="font-bold">Mais de 300 palestrantes,</span> contando com alguns dos especialistas mais renomados do Brasil.
                    </p>
                    <p>Para acessar a programação completa do evento, clique no botão abaixo.</p>
                        <p>Junte-se a nós e seja parte da transformação digital que está moldando o futuro. </p>
                    <p> Esperamos por você no Blockchain Rio Festival 2024!</p>

                </div>

                <Image  className="rounded-full" src="/asset.png" alt="imagem dos palestrantes da blockchain Rio" width={571} height={606} />

            </div>

        </div>


    )
}