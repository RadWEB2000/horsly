import { Description, Hero, Specifications } from "@/views/product-view";

export default function ProductPage(){

    const specifications = {
        title: "Specyfikacja",
        table: {
            parameters: "Parametr",
            values: "Wartość",
            rows: [
                {
                    parameter: "Typ siodła",
                    value: "Western",
                },
                {
                    parameter: "Przeznaczenie",
                    value: "Jazda terenowa, rekreacyjna, western riding",
                },
                {
                    parameter: "Materiał",
                    value: "Naturalna skóra bydlęca premium",
                },
                {
                    parameter: "Kolor",
                    value: "Ciemny brąz",
                },
                {
                    parameter: "Rozmiar siedziska",
                    value: '16"',
                },
                {
                    parameter: "Długość tybinki",
                    value: "Standardowa",
                },
                {
                    parameter: "Rodzaj łęku",
                    value: "Full Quarter Horse Bars",
                },
                {
                    parameter: "Wypełnienie paneli",
                    value: "Wełna syntetyczna",
                },
                {
                    parameter: "Materiał strzemion",
                    value: "Stal nierdzewna",
                },
                {
                    parameter: "Materiał popręgu",
                    value: "Skóra naturalna",
                },
                {
                    parameter: "Waga",
                    value: "12,5 kg",
                },
                {
                    parameter: "Maksymalne obciążenie",
                    value: "120 kg",
                },
                {
                    parameter: "Dla poziomu jeźdźca",
                    value: "Początkujący / Średniozaawansowany / Zaawansowany",
                },
                {
                    parameter: "Dopasowanie do konia",
                    value: "Konie średniej i szerokiej budowy",
                },
                {
                    parameter: "Kraj produkcji",
                    value: "Włochy",
                },
                {
                    parameter: "Producent",
                    value: "Premier Equine",
                },
                {
                    parameter: "Kod produktu",
                    value: "PE-WEST-16-BRN",
                },
                {
                    parameter: "Kod EAN",
                    value: "2011536235093",
                },
                {
                    parameter: "Gwarancja",
                    value: "24 miesiące",
                },
                {
                    parameter: "Zawartość zestawu",
                    value: "Siodło, strzemiona, puśliska",
                },
            ],
        },
    }

    const article = `
<section>
    <h2>Premier Equine ochraniacze crossowe Carbon tył czarne</h2>

    <p>
        <strong>Premier Equine ochraniacze crossowe Carbon tył czarne</strong> to rozwiązanie stworzone z myślą o jeźdźcach, którzy oczekują skutecznej ochrony końskich nóg podczas intensywnych treningów, jazdy terenowej oraz zawodów crossowych. Model został zaprojektowany tak, aby zapewnić <mark>wysoki poziom bezpieczeństwa, wygodę użytkowania oraz profesjonalny wygląd</mark>, niezależnie od poziomu zaawansowania konia i jeźdźca.
    </p>

    <p>
        Dzięki zastosowaniu nowoczesnych materiałów oraz ergonomicznej konstrukcji ochraniacze skutecznie zabezpieczają kończyny przed uderzeniami, otarciami i przeciążeniami. Jednocześnie ich profil nie ogranicza naturalnego ruchu konia, co ma szczególne znaczenie podczas skoków, dynamicznych zmian kierunku czy pokonywania przeszkód terenowych.
    </p>
</section>

<section>
    <h3>Zaawansowana ochrona Carbon</h3>

    <p>
        Ochraniacze wyposażono w <strong>wzmocnioną konstrukcję karbonową</strong>, której zadaniem jest absorpcja energii powstającej podczas przypadkowych uderzeń lub kontaktu z przeszkodami. To szczególnie ważne podczas treningów crossowych oraz jazdy w bardziej wymagającym terenie.
    </p>

    <p>
        Zewnętrzna warstwa została wykonana z trwałych materiałów odpornych na uszkodzenia mechaniczne i zabrudzenia, dzięki czemu produkt zachowuje estetyczny wygląd nawet przy regularnym użytkowaniu.
    </p>

    <ul>
        <li>Wzmocniona konstrukcja ochronna.</li>
        <li>Odporność na otarcia i uszkodzenia.</li>
        <li>Lepsza amortyzacja podczas ruchu.</li>
        <li>Stabilne utrzymanie ochraniacza na nodze konia.</li>
    </ul>
</section>

<section>
    <h3>Komfort użytkowania podczas treningów</h3>

    <p>
        Komfort konia podczas jazdy ma ogromne znaczenie, dlatego model Premier Equine Carbon został zaprojektowany z myślą o odpowiedniej wentylacji oraz wygodnym dopasowaniu. Wewnętrzne materiały wspierają cyrkulację powietrza i pomagają ograniczać przegrzewanie kończyn nawet podczas intensywnych sesji treningowych.
    </p>

    <p>
        Ergonomiczna budowa sprawia, że ochraniacze dobrze dopasowują się do anatomii końskiej nogi, nie powodując niepotrzebnego ucisku ani dyskomfortu.
    </p>

    <blockquote>
        Dobrze dopasowane ochraniacze nie tylko zwiększają bezpieczeństwo, ale również wspierają swobodę ruchu konia podczas pracy.
    </blockquote>
</section>

<section>
    <h3>Dla jakich dyscyplin sprawdzi się ten model?</h3>

    <p>
        <strong>Premier Equine ochraniacze crossowe Carbon</strong> zostały stworzone przede wszystkim z myślą o koniach aktywnie pracujących w bardziej wymagających dyscyplinach jeździeckich.
    </p>

    <div>
        <h4>Cross-country</h4>
        <p>
            Wysoki poziom ochrony i odporność na uszkodzenia sprawiają, że model świetnie sprawdza się podczas pokonywania przeszkód terenowych.
        </p>

        <h4>Skoki przez przeszkody</h4>
        <p>
            Ochraniacze pomagają zabezpieczyć kończyny podczas dynamicznych ruchów oraz kontaktu z drągami.
        </p>

        <h4>Jazda terenowa</h4>
        <p>
            Dodatkowa ochrona może okazać się przydatna podczas treningów poza ujeżdżalnią, szczególnie na bardziej wymagającym podłożu.
        </p>
    </div>
</section>

<section>
    <h3>Dlaczego warto wybrać markę Premier Equine?</h3>

    <p>
        <strong>Premier Equine</strong> od lat uznawana jest za jedną z marek oferujących wysokiej jakości wyposażenie jeździeckie dla wymagających użytkowników. Produkty tej firmy cenione są za połączenie funkcjonalności, estetyki oraz trwałości, co sprawia, że często wybierane są zarówno przez amatorów, jak i zawodników startujących w zawodach.
    </p>

    <p>
        Model Carbon wyróżnia się profesjonalnym wyglądem, klasycznym czarnym wykończeniem oraz wysoką trwałością materiałów, które zostały stworzone z myślą o regularnym użytkowaniu.
    </p>
</section>

<section>
    <h3>Najważniejsze zalety produktu</h3>

    <ul>
        <li><strong>Konstrukcja Carbon</strong> zwiększająca ochronę kończyn.</li>
        <li><strong>Oddychające materiały</strong> wspierające komfort użytkowania.</li>
        <li><strong>Ergonomiczny profil</strong> poprawiający dopasowanie.</li>
        <li><strong>Stabilne zapięcia</strong> ograniczające przesuwanie ochraniacza.</li>
        <li><strong>Klasyczny design</strong> pasujący do większości kompletów jeździeckich.</li>
        <li><strong>Uniwersalne zastosowanie</strong> podczas treningów i zawodów.</li>
    </ul>
</section>

<section>
    <h3>Podsumowanie</h3>

    <p>
        Jeśli szukasz rozwiązania zapewniającego wysoki poziom ochrony, wygody oraz trwałości, <strong>Premier Equine ochraniacze crossowe Carbon tył czarne</strong> mogą okazać się bardzo dobrym wyborem. To model stworzony z myślą o aktywnych koniach i wymagających jeźdźcach, którzy chcą zadbać o bezpieczeństwo podczas codziennej pracy oraz zawodów.
    </p>
</section>

    `

    return (
        <>
            <Hero/>
            <main className="w-[1100px] max-w-8/10 mx-auto">
                <Specifications {...specifications} />
                <Description
                    article={article}
                    title="Opis produktu"
                />
            </main>
        </>
    )
}