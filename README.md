ChatGPT Travel Plan Generator

Ovo je aplikacija koja koristi ChatGPT API za generisanje personalizovanih planova putovanja na osnovu korisničkih unosa. Korisnici mogu uneti destinacije, datume, i druge preferencije, a aplikacija vraća detaljan plan puta uključujući aktivnosti, preporuke i dnevne itinerare.
Funkcionalnosti:

    Generisanje plana putovanja: Korisnik unosi destinaciju, vreme putovanja i posebne zahteve, a aplikacija vraća predloženi plan putovanja.
    Čuvanje plana: Korisnik može sačuvati generisani plan i izvesti ga u PDF ili tekstualni format.
    Interaktivne prilagodbe: Aplikacija omogućava korisnicima da prilagode plan i dobiju ažurirane predloge u realnom vremenu.

  Instalacija i pokretanje projekta

Ovaj deo objašnjava kako klonirati repozitorijum, instalirati potrebne zavisnosti, i pokrenuti aplikaciju na lokalnoj mašini.
1. Preuzimanje projekta (kloniranje repozitorijuma)

Prvo, klonirajte repozitorijum na svoju lokalnu mašinu koristeći sledeću komandu u terminalu:

bash

git clone https://github.com/korisnicko-ime/internet_tehnologije_tijanaradakovic.git

2. Instalacija zavisnosti

Pre nego što pokrenete projekat, potrebno je da instalirate sve potrebne zavisnosti. Preporučuje se da imate instaliran Node.js i npm.

U direktorijumu projekta, pokrenite sledeću komandu za instalaciju zavisnosti:

bash

npm install

Ova komanda će instalirati sve biblioteke definisane u package.json fajlu.
3. Konfiguracija API ključa

Da biste koristili ChatGPT API, potrebno je dodati vaš API ključ u projekat. Kreirajte .env fajl u glavnom direktorijumu aplikacije i unesite vaš OpenAI API ključ:

makefile

OPENAI_API_KEY=vaš-api-kljuc

4. Pokretanje projekta

Nakon instalacije zavisnosti i podešavanja API ključa, možete pokrenuti aplikaciju koristeći sledeću komandu:

bash

npm start

Tehnologije korišćene u projektu

    Front-end: React (JavaScript library)
    Back-end: PHP 
    API: OpenAI ChatGPT API za generisanje planova putovanja
    Baza podataka: phpMyAdmin za čuvanje korisničkih podataka i sačuvanih planova putovanja
    CSS: Za stilizaciju korisničkog interfejsa

Korišćenje aplikacije

    Unesite destinaciju: Na početnoj stranici unesite željenu destinaciju, datume putovanja i da li vam treba vodic.
    Generisanje plana: Kliknite na dugme "Generate pravel plan" da biste dobili predlog plana putovanja.
    Prilagodite plan: Možete prilagoditi generisani plan prema svojim potrebama i dobiti nove predloge u realnom vremenu pritiskom na dugme update kod plana.
  Putovanja i planovi se cuvaju u bazi pritiskom a dugme.
