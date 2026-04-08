#  Tabliczka Mnożenia

Interaktywna aplikacja SPA do generowania i wizualizacji tabliczki mnożenia z możliwością parametryzacji wyglądu.

##  Demo

Otwórz plik `index.html` w przeglądarce – nie wymaga serwera ani instalacji.

##  Funkcje

- **Rozmiar tabliczki** – generuj tabliczkę od 2x2 do 12x12
- **Modulo** – zaznacz komórki których wynik dzieli się przez podaną liczbę
- **Kolor modulo** – własny kolor dla komórek spełniających warunek modulo
- **Kolor liczb parzystych** – własny kolor dla parzystych wyników
- **Kolor liczb nieparzystych** – własny kolor dla nieparzystych wyników
- **Walidacja** – tooltopy informujące o błędnych wartościach
- **Hover na komórkach** – efekt przyciemnienia i powiększenia po najechaniu

##  Technologie

- HTML5
- CSS3 (Flexbox, transitions, transforms)
- Vanilla JavaScript (DOM manipulation)
- Google Fonts – Red Hat Text

##  Zasady kolorowania

Priorytet kolorowania komórek:
1.  **Modulo** – najwyższy priorytet
2.  **Parzyste** – gdy wynik nie spełnia modulo
3.  **Nieparzyste** – gdy wynik nie spełnia modulo i nie jest parzysty

##  Walidacja

- Rozmiar tabliczki: minimum **2**, maksimum **12**
- Modulo nie może być większe niż rozmiar tabliczki
- Błędy wyświetlane jako natywne tooltopy przeglądarki