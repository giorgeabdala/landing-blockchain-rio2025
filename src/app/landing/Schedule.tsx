import Area from "@/app/components/Area";
import Menu from "@/app/components/Menu";
import Image from "next/image";
import Card from "@/app/components/Card";
import Workshops from "@/app/components/Workshops";
import Link from "next/link";


export default function Schedule () {
    return (
        <Area className="flex bg-background-primary">

            <div className="flex flex-col leading-relaxed items-center justify-center font-body text-justify text-2xl gap-8 mt-10 mb-20">

                <p className="mt-4">Confira as palestras exclusivas da Polkadot Brasil que vão rolar na Blockchain Rio Festival 2025:</p>

                <Workshops />

                <div className="flex flex-col mt-8 font-body gap-4">
                    <p>
                        Prepare-se para um mergulho profundo nessas palestras que definirão o futuro da blockchain.
                    </p>
                    <p>
                        Não perca essa oportunidade na Blockchain Rio Festival 2025! </p>

                    <p>Confira
                       <span className="text-polkadot-rose"> <Link href="https://blockchainfestival.io/"> aqui </Link> </span>
                        outras palestras que vão rolar no Blockchain Rio Festival 2025.</p>

                </div>
            </div>





      </Area>
    )

}