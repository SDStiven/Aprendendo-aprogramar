import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Noticias from "./Noticias/page";

export default function Home() {
  return (
    <div className="flex flex-col  justify-center bg-zinc-50 font-sans">
      
        <Navbar/>
        <Noticias/>
        <Footer/>
    </div>
  );
}
