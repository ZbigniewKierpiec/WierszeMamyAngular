import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Poems } from '../Models/poems.model';


@Injectable({
  providedIn: 'root',
})
export class WierszeService {
  private poems: Poems[] = [
    {
      id: 1,
      title: 'czymże jest życie',
      name: 'czymże jest życie bez milosci , Bez czułych spojrzeń serca drżenia , Bez pocalonków bez tęsknoty , Bez tego życie sensu niema. I nie ma granic , czy podzielenia , W miłosci nie ma to znaczenia , Czy jesteś biedny , czy bogaty tego samego doznasz cierpenia , jeśli miłosci ci nie odwzajemnia tak bliska droga ci osoba , strzałą przebite twoje serce , ciernista twoja droga, lecz kochaj mocno i gorąco , bo czymże życie bez milości choć często rani cię okrutnie lecz bez niej byłoby jeszcze smutniej !.',
    },
    {
      id: 2,
      title: 'niepokój w oczach',
      name: 'te oczy , co cieszą i ranią, te chwile, które minąć muszą , te myśli które spać nie dają , czy one byc muszą?, ta radość co w smutek się zmienia , ten smutek co pali jak ogień , i wciąż ten niepokój w mej duszy , co rozum i rozsądek głuszy , jak ciężko samej z myślami , jak trudno jest życ tylko snami , jak gnębi ta myśl niepojęta , ze bylam już o krok od szczęścia!.',
    },
    {
      id: 3,
      title: 'dla miłego',
      name: 'każda minuta była trwogą  , czy znowu dziś zobaczę cię , niepewność serce moje rwała , usta szeptały imię twe , chciałam nauczyć się na pamieć , twej twarzy , włosów , twoich rąk , chciałam zatrzymać je na stałe , by były przy mnie , ze mną wciaż , patrzyłam ciągle gdzieś daleko jakbym tam dojrzeć mogła cię lecz ciebie zabrał los w nieznane gdzieś po świecie wodzi cię , nie wiem co robisz , o czym myślisz? , kto sercu twemu bliski jest , kto znowu w głowie ci zawrócil kogo znów stac na taki gest , lecz ciągle siebie pytam czy mnie pamiętasz i wrócisz tu , i czy będziemy razem szli , przez życia piękne dni.',
    },
    {
      id: 4,
      title: 'bezsenność',
      name: 'już pierwsza na zegarze , a ja nie mogę spać , cały dzień , pełen wrażeń , nie chce mi snu jeszcze dać , siedzę i piszę wiersze a wkoło cicho tak , już będą cykać świerszcze , a ja wciąż nie mogę spać !.',
    },
    {
      id: 5,
      title: 'pijak',
      name: 'idzie chwiejnym krokiem , z łzawym okiem , piosenki głośno śpiewa , aż zapatrzyły sie drzewa. ',
    },
    {
      id: 6,
      title: 'choinka',
      name: 'skrzy się i mieni tysiącem promieni , w bańkach odbija się świat , taka cudna pachnąca w zieleni , jak najpięknieszy kwiat , nasza chionka świąteczna taka wysoka do nieba a pod nią prezentów moc w tę wigilijną jedyną noc.',
    },
    {
      id: 7,
      title: 'wizerunek',
      name: 'oczy twoje przecudne , w oczach odbija się świat , gdy spojrzysz na mnie tak cudnie , to aż mi oddechu brak! , usta twe usta czerwone jak maliny w borze ja na twoich ustach , pocałunek złożę , włosy włosy twe czarne , jak bez księżyca noc , uwielbiam patrzeć na nie , i włożyc w twe włosy mą dłoń. ',
    },
    {
      id: 8,
      title: 'śmierć',
      name: 'pojawia śię w białym habicie , ponoć piękna i młoda , zabiera ludzkie życie , nieubłagana , zimna i wroga.',
    },
    {
      id: 9,
      title: 'droga',
      name: 'droga utarta udeptana , moja droga kochana , chodzę nią całe życie i podziwiam w zachwycie.',
    },
    {
      id: 10,
      title: 'opowiem wszystkim',
      name: 'opowiem słońcu i gwiazdom na błękicie , że bardziej cię kocham niż swoje życie , i deszczowi opowiem co swymi kropelkami , zalewa me okno jak ja swymi łzami , zalewam kartkę białą co wiersz na nie pisze , i wiatrowi opowiem i kwiatom w ogrodzie opowiem ja wszystkim jak ja kocham ciebie',
    },
    {
      id: 11,
      title: 'raz jeden tylko się żyje',
      name: 'raz jeden tylko sie żyje , więc się upajaj życiem , kochaj tańcz i śpiewaj , pokaż talenty ukryte , raz tylko jest nam dane , podziwiać piękno świata widzieć cudną naturę góry co śnieg je przygniata , raz jeden tylko możesz , tak igrać z przeznaczeniem , raz jeden bo kiedy umrzesz trumna będzie twym więzieniem !.',
    },
    {
      id: 12,
      title: 'abstynentka z wyboru',
      name: 'ty me ciało pełne udręki , wycierpiałoś srogie męki , zdrajcą ci byłam całe życie , już więcej wódki się nie chwycę , czy to koniak czy czysta stołowa zawsze będzie moja odmowa , nie pomogą i " złote słowa" , czy "kuszenie" czy czyjaś namowa , bo przysięgę serdeczną złożyłam że już więcej nie będę piła , ma przysiega jest prawie jak święta , wzmocnię rzeszę klubu abstynenta , jakże złudne jest ludzi mniemanie , że po wódce świat lepszym się stanie , świat jest piękny , także bez picia , głosić będę to do końca życia. ',
    },
    {
      id: 13,
      title: 'spacer',
      name: 'jest ciemno i zimno na dworze , a ja spaceruje sobie , ide wciąż przed siebie , i myślę o tobie.',
    },
    {
      id: 14,
      title: 'smutek',
      name: 'jakie smutne moje serce , jakie smutne moje  oczy , przecież wiem że mnie kochasz więc czemu się ze mną droczysz.',
    },
    {
      id: 15,
      title: 'jesteś wszystkim',
      name: 'jesteś światłem co rozjaśnia moje życię , drogą gwiażdzistą po niebie , jesteś dla mnie wszystkim , bo bardzo kocham ciebie.',
    },
    {
      id: 16,
      title: 'pisze wiersze dla ciebie',
      name: 'piszę wiersze dla ciebie , z ogromnej serca potrzeby , piszę byś miłość zrozumiał , i sam pokochał mnie kiedyś.',
    },
    {
      id: 17,
      title: 'przeprosiny',
      name: 'gdy tamte wspomnę dni , ból serce moje rozdziera , bo przez głupotę swoją straciłam przyjaciela , zraniłam tak bardzo cię , lecz wybacz proszę mi ! , nie miej pretensji do mnie , za te minione dni , nie jestem taka zła , nie wiem co we mnie wstąpiło , i tak ogromnie , serce twoje zraniło ! , co mam uczynić powiedz? byś znowu się do mnie uśmiechnął , by było jak dawniej ! , tego moje serce pragnie.',
    },
    {
      id: 18,
      title: 'dla ciebie miła',
      name: 'przyjaciółko moja miła , tyś me serce zasmuciła , gdybyś ty mnie dobrze znała , nigdy byś żle nie myślała , każde słowo nie ważyła zaufaniem mnie darzyła , tłumaczyła , wyjaśniała , jak byś we mnie wroga miała , takie życie smutne złe gdy wokoło boją się , bez powodu bez przyczyny , przypisują komuś winy , trzeba wiedzieć , trzeba zbadac , by wśród ludzi potem gadać , spójrz wokoło , otwórz oczy , a nie jedno cię zaskoczy , bo w przyjaciół gęstym gronie  , wróg się czai zemstą zionie , i znienacka cios da w plecy , choć dziś szczerze patrzy w oczy , tych się bój , co przytakują , a do zdrady sie szykują. ',
    },
    {
      id: 19,
      title: 'Och młodości, młodości ',
      name: ' Och, młodości, młodości,Czemuś się już skończyła!  Jakże  wspaniała  i piękna,Lecz jakże krótka byłaś.Wspominam chwile tamte,A w oczach moich łzy.Och, młodości, młodości!Już się nie wrócisz ty.Jakże bym chciała być młoda, A już jesień życia ma. Och, młodości, młodości,Jakże ty krótko trwasz!. ',
    },
    {
      id: 20,
      title: 'Samobójczyni',
      name: 'Dziewczyna samobójczyni,Wciąż pogłębia swą rozterkę.Z myślami swoimi, czy znosić moc niepowodzeń,Czy odejść cichutko, jak złodziej.Bo cóż jej życie warte,Wyciąga wciąż złą kartę.Myśli, myśli i wzdycha, Płacz się z jej piersi wyrywa.Zastanów się, dziewczyno, Nie jesteś ty jedyną. Co w swojej rozterce, Złamano niejedno serce!.  ',
    },
    {
      id: 21,
      title: 'przeprosiny na pożegnanie',
      name: 'wręczam ci tę czrewoną róże , dzis na  przeprosiny , wybacz każdą chwilę w której cię raniłam Głupia byłam przecież cię kocham więc miłość moją , dziś tobie oddaję i teraz na zawsze , się z tobą rozstaję bo czasem tak bywa w życiu tym niestety że bardzo siś kocha , a odchodzi się bez słowa.',
    },


  ];
  constructor() {}

  getPoems() {
    return(this.poems);
  }
}
