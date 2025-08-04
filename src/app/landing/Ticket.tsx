import Modals from "@/app/components/Modals";
import BlockrioSVG from "public/tickets.svg";

export default function Ticket() {
    return (
        <div className="bg-gradient-to-b from-black to-background-via-connect">
            <div className="mx-4 lg:mx-20">
                <div className="flex justify-center font-background font-bold text-2xl lg:text-5xl md:text-4xl my-10 lg:my-28">
                    <p className="bg-gradient-to-r from-polkadot-rose via-pink-500 to-polkadot-rose bg-clip-text text-transparent text-center">
                        POLKADOT TE LEVA AO BLOCKCHAIN RIO
                    </p>
                </div>

                {/* Imagem para dispositivos menores */}
                <div className="flex lg:hidden justify-center my-8">
                    <BlockrioSVG className="w-[300px] h-[200px] text-pink-500" />
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center font-body text-justify text-base lg:text-2xl gap-8 my-12 lg:my-36 mx-4 lg:mx-32">
                    <div className="leading-loose">
                        <p><span className="font-bold">Garanta Seu Passaporte Gratuíto</span> para a Blockchain Rio Festival 2025.</p>
                        <p><span className="font-bold">Clique no botão abaixo</span> e siga as instruções na próxima tela.</p>
                        <div className="flex justify-center mt-8 lg:mt-16">
                            <Modals />
                        </div>
                    </div>

                    {/* Imagem para dispositivos maiores */}
                    <div className="hidden lg:flex items-center justify-center lg:mr-12">
                        <BlockrioSVG className="w-[550px] h-[350px] text-pink-500" />
                    </div>
                </div>
            </div>
        </div>
    );
}
