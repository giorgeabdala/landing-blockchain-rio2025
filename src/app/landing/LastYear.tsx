import Area from "@/app/components/Area";


export default function LastYear() {
    return (
        <Area className="bg-gradient-to-b from-background-via-connect to-background-primary">
            <div
                className="flex flex-col items-center justify-center font-body font-bold ext-justify text-base md:text-2xl lg:text-2xl gap-8 mt-16 mb-28 text-polkadot-rose">
                <p className="hidden md:block">CONFIRA COMO FOI A ÚLTIMA EDIÇÃO</p>
                <p className="md:hidden ">CONFIRA A ÚLTIMA EDIÇÃO</p>
                <div className="mt-8 hidden lg:block">
                    <iframe className=" rounded-2xl" width="820" height="510.5"
                            src="https://www.youtube.com/embed/ZOyk9Jx84ww?si=3cpf3nq7uhAC1Dny"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>

                <div className="mt-10 hidden md:block lg:hidden rounded-2xl">
                    <iframe className=" rounded-2xl" width="470" height="280" src="https://www.youtube.com/embed/ZOyk9Jx84ww?si=3cpf3nq7uhAC1Dny"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>

                <div className="mt-10  md:hidden rounded-2xl">
                    <iframe className=" rounded-2xl" width="360" height="236" src="https://www.youtube.com/embed/ZOyk9Jx84ww?si=3cpf3nq7uhAC1Dny"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>

            </div>

        </Area>

    )

}