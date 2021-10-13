import React from 'react';
import styled from 'styled-components';


function MyInterests() {
    return (
        <Container>
            <Header>Zainteresowania<span style={{color: "red"}}><b>:</b> </span></Header>

            <Interest>
                <Subtitle>Turystyka motocyklowa</Subtitle>
                <Text>
                    Do pewnych rzeczy człowiek musi dorosnąć - tak było i w tym wypadku. Motocyklizmem zaraził mnie mój
                    brat Sebastian. To On i jego pierwsza Honda zaszczepiły we mnie ziarno, które w niedługim czasie zaczęło bardzo
                    intensywnie rozwijać się w mojej świadomośći. Już po roku od pierwszego
                    przejazdu na jego motocyklu zdałem prawo jazdy na kat. A2 i kupiłem swojego pierwszego rumaka.
                </Text>
            </Interest>
            <Interest>
                <Subtitle>Strzelectwo Sportowe</Subtitle>
                <Text>
                    Od zawsze wszelkiego rodzaju wozy bojowe, samoloty i prosta broń palna budziły we mnie pociąg do posiadania
                    własnej jednostki broni. Jestem członkiem Klubu Strzeleckiego LOK w Krakowie. Kiedy moje finanse przybiorą pełnoprawną
                    nazwę pensji, a nie tylko "kieszonkowego" to na pewno zakupem, który będzie w top 5 listy zakupów będzie własna
                    broń sportowa. Ta pasja zrzesza ludzi pozytywnych, radosnych i otwartych na nowe znajomości. Chcę być jej częścią
                    oraz stać się sportowcem na wysokim poziomie.
                </Text>
            </Interest>
            <Interest>
                <Subtitle>Gra na instrumentach</Subtitle>
                <Text>
                    Muzyka gościła w mojej rodzinie od pokoleń. <br />
                    Babcia na akordeonie, wujkowie - wirtuozi i artyści, począwczy od "liścia", przez gitarę po kontrabas, kuzynostwo
                    któremu dużo nie brakuje do perfekcji w swojej dziedzinie gry na gitarze i skrzypcach, aż do mnie. Początkowo był to
                    klarnet, ale z biegiem czasu perkusja, gitara zwykła oraz basowa, jak również harmonijka ustna go wyparły.
                    Niestety życie w bloku mocno ogranicza moją pasję z wiadomych powodów.
                    <br /> <br />
                    Muzyka towarzyszyła i towarzyszy mi <u>ZAWSZE</u>.
                    Czy to podczas jazdy samochodem, czy przy gotowaniu, czy nawet przy pisaniu kodu do projektów.
                </Text>
            </Interest>
            <Interest>
                <Subtitle>Gry komputerowe</Subtitle>
                <Text>
                    Podstawówka miło kojarzy mi się z jednym komputerem na całą rodzinę i z graniem z nią w Delux Ski Jump.
                    Ta kwadratowa grafika miała coś w sobie, coś co zrzeszało rodzinę i pozwalało na wspólne spędzanie czasu wzajemnie
                    sobie dogadując jak to powinno się "wyjść z progu". Późniejsza gra Heroes III również nie była tego pozbawiona.
                    Czasy się zmieniły, grafika poszła do przodu, a twórcy gier jak CD Project Red wypuszczają na świat perełkę
                    Wiedźmina 3 - oczywiście wraz z dodatkami. Jestem wielkim fanem tej produckji.
                    Jeżeli chodzi o gry zespołowe, to aktualnie Liga Legend (League Of Legends) przoduje, ale Rocket Leauge też czasem 
                    pojawia się na ekranie.
                </Text>
            </Interest>

        </Container>
    )
}

export default MyInterests;

const Container = styled.div`
    width: auto;
    height: auto;
    margin-top: 1rem;
    background-color: #fff;
    margin-left: 5%;
    margin-right: 5%;
    box-shadow: 0 0 1rem rgb(206,208,210);
    border-radius: 1rem;
    padding: 4rem;
`

const Header = styled.h1`
    font-size: 3.5rem;
`

const Interest = styled.div`
    width: auto;
    margin-top: 2rem;
    margin-left: 3rem;
    margin-right: 3rem;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgb(206,208,210);
`

const Subtitle = styled.h1`
    font-size: 2.8rem;
`

const Text = styled.p`
    font-size: 2rem;
    padding: 2rem;
    line-height: 2.3rem;
`