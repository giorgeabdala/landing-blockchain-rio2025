import Area from "@/app/components/Area";
import ButtonDefault from "@/app/components/Button";
import Link from "next/link";

interface PresentationProps {
    className?: string
}


export default function Presentation(props: PresentationProps) {
    return (
        <Area className="bg-background-via-connect">
            <div id="start" className={`flex flex-col items-center justify-center 
            text-2xl text-white font-title  gap-8`}>
                <h2 className="text-zinc-400">Blockchain Rio 2025</h2>
                <h2>06 e 07 de Agosto</h2>
                <div className="flex flex-col text-center  leading-relaxed gap-4 font-body">
                    <p>Pronto para explorar um mundo de tecnologia e inovação?</p>
                    <p>Garanta seu Passaporte Gratuito para o Futuro: Venha para o Blockchain Rio Festival! 🚀</p>
                </div>


                <Link href="#ticket">
                <ButtonDefault className="mb-10" text={"Garanta seu passaporte"} />
                </Link>




                </div>


        </Area>
    )

}