import Area from "@/app/components/Area";
import Image from 'next/image'



export default function checkout() {
    return (
        <Area className="bg-gradient-to-b  from-black   via-background-via-connect to-black relative h-screen">
            <div className="flex flex-col items-center justify-center mt-16 gap-14">
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Image className="rounded-3xl" src="/PolkaBlockchain.png" alt="logotipo da comunidade Polkadot Brasil" width={800} height={600} />
                <h1 className="text-2xl font-bold  font-title text-polkadot-rose md:text-4xl">POLKADOT BRASIL</h1>
            </div>
            <div className="flex flex-col font-body items-center font-black text-justify mt-20 gap-8 text-xl text-white leading-loose">
                <p>PARABÉNS!!!</p>

                <div className="font-body leading-loose">
                    <p>Já reservamos seu passaporte para a Blockchain Rio!</p>
                    <p> Em breve, você receberá uma mensagem via WhatsApp com as instruções para retirar seu voucher.</p>
                    </div>


            </div>

        </Area>
    )
}
