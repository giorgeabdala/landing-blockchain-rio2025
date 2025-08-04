import Pagina from "@/app/components/Pagina";
import Header from "@/app/landing/Header";
import Logo from "@/app/landing/Logo";
import Presentation from "@/app/landing/Presentation.";
import Networking from "@/app/landing/Networking";
import Schedule from "@/app/landing/Schedule";
import Ticket from "@/app/landing/Ticket";
import Footer from "@/app/landing/Footer";
import LastYear from "@/app/landing/LastYear";
import Discover from "@/app/landing/Discover";
import DiscoverTwo from "@/app/landing/DiscoverTwo";
import Hunter from "@/app/landing/Hunter";




export default function Landing() {
    return (
        <Pagina className="flex flex-col text-white">
            <Logo />
            {/*<Presentation />*/}
          {/*  <Networking />*/}
            <Ticket />
{/*            <DiscoverTwo />*/}
            <LastYear />

          {/*  <Discover />
*/}
            {/*<Schedule />*/}

           {/*  <Hunter /> */}
            <Footer />
        </Pagina>
    )


}