import {NextResponse} from "next/server";
import WhatsAppNotificationServiceCodeChat from "@/app/api/infra/WhatsService";
const message = "*Parabéns!*\n" +
    "\n" +
    "Você ganhou 100% de desconto para um ingresso individual para o evento.\n" +
    "\n" +
    "Seu passaporte já está reservado. Agora, só falta realizar seu cadastro no Sympla para emitir o voucher.\n" +
    "\n" +
    "*Acesse o link abaixo e selecione a opção com valor \"Gratis\" no Sympla:\n" +
    "\n" +
    "\n" +
    "*Passaporte Expo Mag:* https://www.sympla.com.br/evento/blockchain-rio-2024/2385509?d=Polkadot_Blockchain.Rio\n" +
    "\n" +
    "O Blockchain Festival acontece de 23 a 25 de Julho, no Rio de Janeiro.\n" +
    "\n" +
    "Esperamos você lá!";



export async function POST(req: Request, res: Response) {
        try {
                console.log("/whats/route");
                const body = await req.json();
                console.log("body: ", body);
                const whatsService = new WhatsAppNotificationServiceCodeChat();
                const result = await whatsService.send(body, message);
                if (result.status === 200) return NextResponse.json({message:"OK"});
                return NextResponse.error();
        } catch (e) {
                console.log("Erro: ", e);
                return NextResponse.error();
        }
}