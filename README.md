# Zadatak-2
Text:
Opis zadatka:
Razvij aplikaciju za rezervaciju bioskopskih karata koja omogućava korisnicima da izaberu i kupe karte za sedišta u bioskopu. Bioskop ima sedišta organizovana u M x N rasporedu, gde su M broj redova, a N broj sedišta u svakom redu. Ove dimenzije (M i N) korisnik unosi putem URL-a, na primer: http://localhost:8080?m=15&n=20.
Funkcionalnosti aplikacije:
Izbor Sedišta:
Korisnici mogu selektovati sedišta koja žele kupiti korišćenjem "toggle" principa, pri čemu moraju birati sedišta koja su jedno pored drugog.
Zbog pandemijskih mera, između različitih grupa korisnika mora postojati razmak od najmanje jednog sedišta.
Prikaz Cena:
Cena sedišta varira u zavisnosti od udaljenosti od platna:
Sedišta najbliža i najdalja platnu koštaju 300 dinara.
Sedišta u sredini koštaju 500 dinara.
Cene su skalirane za svaki red, na primer, za bioskop sa 5 redova: 300, 400, 500, 400, 300.
Svako sedište treba da prikazuje svoju cenu.
Boja sedišta označava njegovu cenu, pri čemu vi birate skalu boja.
Kupovina:
Nakon što korisnik odabere sedišta, može pritisnuti dugme "Kupi" da bi platio i rezervisao karte.
Tehnički zahtevi:
Aplikacija treba da obrađuje URL parametre za postavljanje dimenzija bioskopa.
Implementacija UI treba da bude intuitivna i korisniku jasna, sa lako uočljivim razlikama u ceni sedišta.
Osigurati da je aplikacija funkcionalna i tokom pandemije, što znači da se automatski primenjuje pravilo o razmaku između različitih grupa.

Pitanja za rešavanje
-Koliko sedišta ima bioskop 
-Kako uneti redove putem URLA
-Koliko redova M, koliko sedišta N
-Toggle funkcija za biranje sedišta
-Koje su grupe korisnika između kojih se ostavlja razmak od jednog sedišta
-Različite cene: Prvi i posednji redovi 300, srednji 500... ako je 5 redova skala ide 300, 400, 500, 400, 300
-Prikazati cenu na sedištu
-Različita cena i različite boje
-Odabir sedišta na klik
-Dugme za rezervaciju i kupovinu

NAPOMENA:
Za čitanje zadatka dodati na kraju linka pitalicu ?x=6&y=10 - broj sedišta moguće menjati
