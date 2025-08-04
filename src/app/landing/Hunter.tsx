import Area from "@/app/components/Area";
import Modals from "@/app/components/Modals";
import Image from "next/image";
import blockrio from "public/nfts/nftFisica.png";

export default function Hunter() {
    return (
        <div className="bg-gradient-to-b from-background-primary to-background-via-connect">
            <div className="mx-4 lg:mx-32 my-12 lg:my-36">
                <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center lg:justify-items-start items-center font-body gap-8">
                    <div className="flex items-center justify-center lg:justify-start">
                        <Image className="rounded-3xl max-w-xs w-full" src={blockrio} alt="logo da Blockchain Festival" />
                    </div>
                    <div className="flex flex-col items-center justify-center mt-8 lg:mt-0 lg:col-span-2 px-4">
                        <p className="font-bold text-3xl text-center bg-gradient-to-r from-polkadot-rose via-pink-400 to-polkadot-rose bg-clip-text text-transparent">
                            Caça ao Tesouro Polkadot Brasil no Blockchain Rio 2025
                        </p>
                        <div className="flex flex-col justify-center text-justify leading-loose lg:text-2xl text-zinc-100 gap-4 mt-8 lg:mt-14">
                            <p>Participe da emocionante Caça ao Tesouro durante o Blockchain Rio 2025 e descubra as novidades do ecossistema Polkadot! Visite os estandes do universo Polkadot, colete NFTs exclusivos e concorra a uma coleção completa de NFTs físicos. </p>
                              <p>  Junte-se a nós e vivencie a experiência completa Polkadot!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
