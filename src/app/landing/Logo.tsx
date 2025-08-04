import Area from "@/app/components/Area";
import Image from 'next/image';
import Link from "next/link";
import ButtonDefault from "@/app/components/Button";

export default function Logo() {
    return (
        <div
            className="bg-gradient-to-b  from-black   via-background-via-connect to-black relative">
            <div className="flex justify-center flex-1 mt-12 lg:mt-28">
                <Image className="rounded-3xl" src="/PolkaBlockchain.png" alt="logotipo da comunidade Polkadot Brasil"
                       width={1165} height={500}
                style={{opacity: 0.8}}

                />
            </div>
        </div>
    );
}
