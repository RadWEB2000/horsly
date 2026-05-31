import { Hero } from "@/views/company-view";

const article = `
<h2>Stajnia Krajkowo – nowoczesne centrum jeździeckie w sercu Wielkopolski</h2>

<p><strong>Stajnia Krajkowo</strong>, znana również jako <strong>Riding Center IDMAR Krajkowo</strong>, to nowoczesny ośrodek jeździecki położony w malowniczej okolicy niedaleko Mosiny. Obiekt powstał z pasji do koni i sportów jeździeckich, oferując doskonałe warunki zarówno dla zawodników, jak i miłośników rekreacyjnej jazdy konnej.</p>

<p>Centrum wyróżnia się rozbudowaną infrastrukturą, która pozwala na organizację zawodów jeździeckich na wysokim poziomie. Do dyspozycji jeźdźców pozostaje imponująca hala sportowa, nowoczesna rozprężalnia oraz komfortowe zaplecze dla koni i ich opiekunów. Dzięki zastosowaniu wysokiej jakości podłoża kwarcowego z geowłókniną obiekt zapewnia odpowiednie warunki do treningów przez cały rok.</p>

<p><mark>Riding Center IDMAR Krajkowo należy do najnowocześniejszych ośrodków jeździeckich w regionie Wielkopolski.</mark> Na terenie obiektu znajduje się kilkaset boksów dla koni, przestrzeń dla koniowozów oraz rozbudowana infrastruktura umożliwiająca organizację zawodów regionalnych i ogólnopolskich.</p>

<h3>Dlaczego warto odwiedzić Stajnię Krajkowo?</h3>

<ul>
    <li><strong>Nowoczesna hala jeździecka</strong> umożliwiająca treningi niezależnie od pogody.</li>
    <li><strong>Profesjonalne zaplecze dla koni</strong> z komfortowymi boksami.</li>
    <li><strong>Wysokiej jakości podłoże sportowe</strong> zapewniające bezpieczeństwo podczas treningów i zawodów.</li>
    <li><strong>Możliwość udziału w wydarzeniach jeździeckich</strong> organizowanych przez ośrodek.</li>
    <li><strong>Przyjazna atmosfera</strong> tworzona przez osoby związane z jeździectwem.</li>
</ul>

<table>
    <thead>
        <tr>
            <th>Informacja</th>
            <th>Szczegóły</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Lokalizacja</td>
            <td>Krajkowo koło Mosiny, woj. wielkopolskie</td>
        </tr>
        <tr>
            <td>Profil działalności</td>
            <td>Sport i rekreacja jeździecka</td>
        </tr>
        <tr>
            <td>Infrastruktura</td>
            <td>Hala sportowa, rozprężalnia, boksy dla koni</td>
        </tr>
        <tr>
            <td>Wydarzenia</td>
            <td>Zawody regionalne i ogólnopolskie</td>
        </tr>
    </tbody>
</table>

<p>Dzięki połączeniu nowoczesnej infrastruktury, doświadczenia oraz miłości do koni, <em>Stajnia Krajkowo</em> stała się miejscem rozpoznawalnym na mapie polskiego jeździectwa. To przestrzeń stworzona zarówno dla ambitnych zawodników, jak i osób, które dopiero rozpoczynają swoją przygodę z końmi.</p>


`

export default function CompanyPage(){
    return (
        <>
            <Hero/>
            <main
                className="w-[1250px] my-20 max-w-8/10 mx-auto"
            >
                <article
                    className="prose max-w-full"
                    dangerouslySetInnerHTML={{__html:article}}
                />
            </main>
        </>
    )
}