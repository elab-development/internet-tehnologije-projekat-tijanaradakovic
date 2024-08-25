import { useState } from "react";
import AktivnostForm from "../components/aktivnost/AktivnostForm/AktivnostForm";
import Aktivnost from "../models/Aktivnost";

const lazneAktivnosi: Aktivnost[] = []

function AktivnostPage() {
    const [aktivnosti, setAktivnosti] = useState<Aktivnost[]>(lazneAktivnosi)


    const dodajAktivnost = (naziv: string, tip: string) => {
        const novaAktivnost : Aktivnost = {naziv: naziv, tip: tip} 
        aktivnosti.push(novaAktivnost)
    }

    return <AktivnostForm/>
}

export default AktivnostPage;