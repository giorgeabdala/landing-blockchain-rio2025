import Area from "@/app/components/Area";
import Image from 'next/image'



export default function checkout() {
    return (
        <Area className="bg-black relative h-screen">
            <div className="flex flex-col items-center justify-center mt-16 gap-14">
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Image className="rounded-3xl" src="/PolkaBlockchain.png" alt="logotipo da comunidade Polkadot Brasil" width={800} height={600} />
                <h1 className="text-2xl font-bold  font-title text-polkadot-rose md:text-4xl">POLKADOT BRASIL</h1>
            </div>
            <div className="flex flex-col font-body items-center font-black text-justify mt-20 gap-8 text-xl text-white leading-loose">
                <div>
                    <p> Houve algum erro no processamento da sua solicitação.</p>
                    <p> Por favor, procure os administradores da Polkadot Brasil pelo telegram ou no Discord </p>
                    </div>

            </div>

        </Area>
    )
}
