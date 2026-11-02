import CardsNoticias from "@/components/noticias/CardsNoticias";
import DestackNoticias from "@/components/noticias/DestackNoticias";
import HeroNoticias from "@/components/noticias/HeroNoticias";
import { Suspense } from "react";


export default function Noticias() {
    return (
        <div>
        <main>
            <HeroNoticias/>
            <Suspense fallback={<div>A carregar...</div>}>
            <DestackNoticias />
            <CardsNoticias/>
            </Suspense>
             
            </main>

        </div>
    );
}