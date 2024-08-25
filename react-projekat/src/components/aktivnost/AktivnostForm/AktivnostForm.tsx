import { useState } from "react";
import Dugme from "../../shared/Dugme/Dugme";



export interface AktivnostFormProps {
    nazivAktivnost: string;
    tip: string
}


function AktivnostForm({nazivAktivnost, tip}: AktivnostFormProps) {
    const [novaAktivnostNaziv, setNovaAktivostNaziv] = useState("");
    const [noviTip, setNoviTip] = useState("");

    return <form>
      <label>Unesi naziv</label>
      <input
        type="text"
        name="aktivnostInput"
        id="addNaziv"
        value={novaAktivnostNaziv}
        onChange={(e) => setNovaAktivostNaziv(e.target.value)}
      />

    <label>Unesti tip</label>
      <input
        type="text"
        name="aktivnostTipInput"
        id="addTip"
        value={noviTip}
        onChange={(e) => setNoviTip(e.target.value)}
      />


      <Dugme
        text="Dodaj aktivnost"
        clickHandler={() => console.log(novaAktivnostNaziv)}
      />
    </form>
}

export default AktivnostForm;