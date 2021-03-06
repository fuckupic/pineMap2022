const megaWrapper = document.querySelector('.pine-megaWrapper');

const pineSpiral = document.querySelector('#pine-pineSpiral');
const wrapper = document.querySelector('.pine-wrapper');
const headline = document.querySelector('.pine-headline');
const subHead = document.querySelector('.pine-sub-head');
const description = document.querySelector('.pine-desc');
// const photos = document.querySelector('.photos');
const linkSection = document.querySelector('.pine-linkSec')
const linkArrowColor = document.querySelector('#pine-linkArrow');
const linkSec = document.querySelector('.pine-link');

const navArrows = document.querySelectorAll('.pine-navArrow');
const navBlock = document.querySelector('.pine-block');

const person = document.getElementById('pine-person');
const backgroundPeer = document.querySelector('.pine-peer');
const progressHeading = document.querySelector('.pine-peerHeadline');
const introHeading = document.querySelector(".pine-introHeading");
const introPine = document.querySelector(".pine-introPine");
const introDesc = document.querySelector(".pine-introDesc");
const introGrad = document.querySelector('.pine-introGrad')
const afterDesc = document.querySelector('.pine-afterIntro')
const afterPar = document.querySelector('.pine-afterPar')

const rightButton = document.querySelector('.pine-right');
const startButton = document.querySelector('.pine-startPine');
const endButton = document.querySelector('.pine-btn-close');

// const city = document.querySelector('#svgPineCity');

const firstQuater = document.querySelector('#pine-linear-gradient')
const secondQuater = document.querySelector('#pine-inear-gradient-2')
const thirdQuater = document.querySelector('#pine-linear-gradient-3')
const fourthQuater = document.querySelector('#pine-linear-gradient-4')

const firstBar = document.querySelector('.pine-fillingFirstQuaterBar');
const secondBar = document.querySelector('.pine-fillingSecondQuaterBar');
const thirdBar = document.querySelector('.pine-fillingThirdQuaterBar');
const fourthBar = document.querySelector('.pine-fillingFourthQuaterBar');

const cityBuilds = document.getElementById('cityBuilds');

// BM Site - code
const sections = document.querySelectorAll('.section');
const foots = document.querySelectorAll('.foot');
const headerBM = document.querySelector('.container');


const pop = new Audio('/pruvodce/sounds/popSound.mp3')
pop.volume = 0.01;

var opacityTransitions = [
    backgroundPeer,
    pineSpiral,
    headline,
    subHead,
    description,
    progressHeading,
    // leftButton,
    rightButton,
    wrapper,
    introHeading,
    introPine,
    introDesc,
]

// var introOpacityTransitions = [
//     introPine,
//     introDesc,
//     startButton,
//     introGrad
// ]

var displayNone = [
    megaWrapper,
    backgroundPeer,
    pineSpiral,
    headline,
    description,
    subHead,
    wrapper,
    afterDesc,
    rightButton,
    endButton,
    linkSec,
    linkSection
]

var displayNoneRegular = [
    headline,
    description,
    subHead,
    afterDesc,
    linkSection,
    linkSec
]

const introDescs = [
    '<p>jedine??n?? ekosyst??m, kter?? pracuje s vn??m??n??m technologi?? u?? s d??tmi v mate??sk?? ??kolce, prostupuje v??emi stupni vzd??l??vac??ho syst??mu a postupn?? se v??nuje nad??jn??m inov??tor??m, kte???? maj?? potenci??l zalo??it sv??j vlastn?? business, p??i??em?? jim pak v jejich inovativn??m podnik??n?? pom??h?? r??st.</p>',
    
]

const introHeadings = [
    '<h2>Plze?? rozv??j?? Plze????ky d??ky ekosyst??mu PINE</h2>',
]

const peerClaims = [
    [
        '<h2>Na??e Plze??a??ka <br>jde do dal???? ??rovn??.</h2>',
        '<p>Rozvinula sv?? talenty, zjistila, co dok????e, zkusila si, co obn?????? podnik??n?? a pomohla rozjet inovativn?? firmu. D??ky n?? a jej??m p????tel??m prosperuje cel?? na??e m??sto.Plze?? se posouv?? na dal???? level a Plze??a??ka tady zakl??d?? svou vlastn?? rodinu.<br><b>Na sv??t?? je nov?? Plze??????ek???</b></p>'
    ],
    [
        '<h2>N???? Plze????k <br>jde do dal???? ??rovn??.</h2>',
        '<p>Rozvinul sv?? talenty, zjistil, co dok????e, zkusil si, co obn?????? podnik??n?? a pomohl rozjet inovativn?? firmu. D??ky n??mu a jeho p????tel??m prosperuje cel?? na??e m??sto. Plze?? se posouv?? na dal???? level a Plze????k tady zakl??d?? svou vlastn?? rodinu.<br><b>Na sv??t?? je nov?? Plze??a??ka???</b></p>'
    ]
]

const progressHeadings = [
    'V??voj Plze????ka',
    'V??voj Plze??a??ky'
]

// const photosInside = `<img src="https://via.placeholder.com/170x120.png?text=Mood fotka" alt="" class="first">
// <img src="https://via.placeholder.com/170x120.png?text=Mood fotka" alt="" class="second">
// <img src="https://via.placeholder.com/170x120.png?text=Mood fotka" alt="" class="third">`



const allText = [
    [
        "Rozvoj talent??",
        "Centrum robotiky",
        `<p>Centrum robotiky je m??stem vzd??l??v??n??, podpory a volno??asov??ch aktivit v oblasti digit??ln??ch technologi??. Nab??z?? krou??ky a aktivity pro d??ti, kurzy pro seniory, vzd??l??vac?? semin????e pro pedagogy, programy pro t????dy z??kladn??ch i mate??sk??ch ??kol. Je sou????st?? Spr??vy informa??n??ch technologi?? m??sta Plzn?? (SIT).</p>`,
        '#fcc200',
        '33%',
        '3%',
        '3%',
        '3%',
        '../pruvodce/stuff/imgs/manPhase1.svg',
        '../pruvodce/stuff/imgs/womanPhase1.svg',
        'https://centrumrobotiky.eu/'
    ],
    [
        "Rozvoj talent??",
        "Radov??nek",
        `<p>St??edisko voln??ho ??asu RADOV??NEK je ??kolsk??m za????zen??m pro z??jmov?? vzd??l??v??n??, jeho??  z??izovatelem je Plze??sk?? kraj. Je tu pro d??ti, ????ky, studenty a dosp??l?? z cel??ho kraje. Celoro??n?? zaji????uje ??innost pravidelnou, p????le??itostnou a spont??nn?? a pr??zdninovou.</p>`,
        '#fcc200',
        '66%',
        '3%',
        '3%',
        '3%',
        '../pruvodce/stuff/imgs/manPhase1.svg',
        '../pruvodce/stuff/imgs/womanPhase1.svg',
        'https://www.radovanek.cz/'
    ],
    [
        "Rozvoj talent??",
        "Techmania",
        `<p>Plze??sk?? Science center Techmania je experiment??ln?? stanice pro zv??dav??. P??edstavuje most mezi neform??ln??m vzd??l??v??n??m a popul??rn?? turistickou destinac??. C??lem Techmanie je pom??hat ????k??m, student??m i rodin??m s d??tmi nach??zet a rozv??jet osobn?? vztah k v??d?? a technice a v obecn?? rovin?? objevovat mo??nosti lidsk??ho pozn??n??.</p>`,
        '#fcc200',
        '100%',
        '3%',
        '3%',
        '3%',
        '../pruvodce/stuff/imgs/manPhase1.svg',
        '../pruvodce/stuff/imgs/womanPhase1.svg',
        'https://techmania.cz/'

    ],
    [
        "preinkubace",
        "SIT Port",
        `<p>SIT Port buduje technickou komunitu, kde se techni??t?? nad??enci potk??vaj?? s profesion??ln??mi mentory a nejr??zn??j????mi odborn??ky z praxe. Nab??z?? student??m a mlad??m lidem prostor pro tvo??en??. Organizuje zaj??mav?? projekty, d??ky kter??m mohou rozv??jet sv??j talent. Podporuje za????naj??c?? podnikatele. Nab??z?? pot??ebnou oporu p??i rozjezdu vlastn??ho businessu ??? mentoring, odborn?? poradenstv??, workshopy, z??zem??, zafinancov??n?? prototypu, motivujeme akcemi jako jsou Startup Weekendy. SIT Port poskytuje z??zem?? pro ka??d??ho, kdo hled?? prostory k bastlen??, sd??lenou kancel???? nebo modern?? vybaven?? na v??robu prototypu.</p>`,
        '#7b6ce6',
        '100%',
        '25%',
        '3%',
        '3%',
        '../pruvodce/stuff/imgs/manPhase2.svg',
        '../pruvodce/stuff/imgs/womanPhase2.svg',
        'https://www.sitport.cz/'
    ],
    [
        "preinkubace",
        "nvias",
        `<p>Nvias p??etv?????? mlad?? generace z konzument?? na tv??rce. Vzd??l??v?? je v oblasti technologi?? a otev??r?? jim nov??, neprob??dan?? sv??t. Pom??h?? jim naj??t impuls ke tvo??en??. D??ti se postupn?? nau????, jak ovl??dnout a naprogramovat technologie vyu????vaj??c?? strojov?? u??en??. V Nvias d??ti experimentuj?? a aplikuj?? nov?? dovednosti do re??ln??ch produkt??.</p>`,
        '#7b6ce6',
        '100%',
        '50%',
        '3%',
        '3%',
        '../pruvodce/stuff/imgs/manPhase2.svg',
        '../pruvodce/stuff/imgs/womanPhase2.svg',
        'https://www.nvias.org/'
    ],
    [   
        "preinkubace",
        "Drony SIT",
        `<p>Drony SIT jsou ??sekem Spr??vy informa??n??ch technologi?? m??sta Plzn??. Jsou tu proto, aby d??ky inovac??m pom??hali rozvoji oboru bezpilotn??ho letectv??, posouvali jeho hranice a byli profesion??ln??m partnerem pro sv?? z??kazn??ky, inspirac?? pro mlad?? talenty i pomoc?? pro na??i komunitu. Drony SIT jsou technologick??m partnerem plze??sk??ho Hasi??sk??ho z??chrann??ho sboru.</p>`,
        '#7b6ce6',
        '100%',
        '75%',
        '3%',
        '3%',
        '../pruvodce/stuff/imgs/manPhase2.svg',
        '../pruvodce/stuff/imgs/womanPhase2.svg',
        'https://www.dronysit.cz/'
    ],
    [
        "preinkubace",
        "SIT Port Garage",
        `<p>SIT Port Garage je skv??l?? m??sto pro ka??d??ho, kdo chce tvo??it. Gar???? znamen?? z??zem?? a modern?? technologie v jednom ??? poskytujeme vybaven?? pro kutily, hardware i data, 3D tisk??rny nebo CNC stroje. Nav??c dok????eme zafinancovat specifick?? hardwarov?? vybaven?? i testov??n?? prototyp??. V gar????i po????d??me tak?? zaj??mav?? workshopy, kter?? ??ijeme na m??ru ??len??m SIT Port komunity a v??nujeme se i mentoringu zakl??d??n?? a ????zen?? firmy, um??me poradit v oblasti pr??va, financ?? nebo t??eba marketingu. Vyrazit odpoledne do gar????e u n??s dost??v?? ??pln?? nov?? rozm??r!</p>`,
        '#7b6ce6',
        '100%',
        '100%',
        '3%',
        '3%',
        '../pruvodce/stuff/imgs/manPhase3.svg',
        '../pruvodce/stuff/imgs/womanPhase3.svg',
        'https://www.sitport.cz/zazemi/'
    ],
    [
        "inkubace",
        "BIC Port",
        `<p>BIC Port organizuje inkuba??n?? programy pro za????naj??c?? firmy z Plze??sk??ho kraje, posktyuje individu??ln?? konzultace. Nab??z?? mo??nosti technologick?? inkubace pro ambici??zn?? startupy a poskytuje mo??nost vyu??it?? sd??len??ch kancel?????? v centru m??sta.</p>`,
        '#00a8f0',
        '100%',
        '100%',
        '25%',
        '3%',
        '../pruvodce/stuff/imgs/manPhase3.svg',
        '../pruvodce/stuff/imgs/womanPhase3.svg',
        'https://www.bicport.cz/'
    ],
    [
        "inkubace",
        "VR Lab",
        `<p>VR Lab je prostor vybaven?? ??adou typ?? br??l?? a ovlada???? pro virtu??ln?? realitu, kter?? lze s odbornou asistenc?? vyu????t pro testov??n?? vlastn??ch VR softwar??. VR Lab je p??izp??soben i pro vlastn?? ??kolen?? u??ivatel?? nebo obchodn?? jedn??n?? se z??kazn??ky. VR Lab je prostor vybaven?? ??adou typ?? br??l?? a ovlada???? pro virtu??ln?? realitu, kter?? lze s odbornou asistenc?? vyu????t pro testov??n?? vlastn??ch VR softwar??. VR Lab je p??izp??soben i pro vlastn?? ??kolen?? u??ivatel?? nebo obchodn?? jedn??n?? se z??kazn??ky.</p>`,
        '#00a8f0',
        '100%',
        '100%',
        '50%',
        '3%',
        '../pruvodce/stuff/imgs/manPhase3.svg',
        '../pruvodce/stuff/imgs/womanPhase3.svg',
        'https://virtual-lab.cz/'
    ],
    [
        "inkubace",
        "Mobility Innovation HUB",
        `<p>Mobility Innovation Hub je nov?? ??esk?? projekt, kter?? m?? podpo??it mobilitu budoucnosti. Konkr??tn?? pak propojuje st??tn?? sektor se soukrom??m. Jeho c??lem je dostat do ??eska glob??ln?? investice, vytvo??it prost??ed?? pro inovativn?? projekty v oblasti mobility a jejich efektivn?? realizaci. D??le m?? podpo??it konkurenceschopnost ??esk?? ekonomiky. Mobility Innovation Hub spojuje partnery z komer??n??ho i akademick??ho sektoru. P????pravu a koordinaci projektu m?? na starosti n??rodn?? agentura pro podporu investic a podnik??n?? CzechInvest.</p>`,
        '#00a8f0',
        '100%',
        '100%',
        '75%',
        '3%',
        '../pruvodce/stuff/imgs/manPhase4.svg',
        '../pruvodce/stuff/imgs/womanPhase4.svg',
        'https://www.czechinvest.org/cz/Homepage/Novinky/Cerven-2020/V-Cesku-vznika-unikatni-projekt-na-podporu-mobility-budoucnosti'
    ],
    [
        "inkubace",
        "Polygon pro autonomn?? tramvaj",
        `<p>??esk?? polygon pro testov??n?? a certifikaci vozidel s autonomn??m ????zen??m by m??l do roku 2022 st??t u z??pado??esk??ho St????bra. P??ipravuje ho ??esk?? investi??n?? skupina Accolade. Do ??esk?? republiky by m??l p??it??hnout ??pi??ku automobilov??ch v??voj?????? nejen z Evropy. Na polygonu bude mo??n?? testovat ve??ker?? dopravn?? situace, a to i ty evropsk??. Okruh bude vedle m??stsk??ch uli??ek um??t vytvo??it i prost??ed?? d??lnice, silnic prvn?? t????dy, okresek nebo j??zdy v tunelu.</p>`,
        '#00a8f0',
        '100%',
        '100%',
        '100%',
        '3%',
        '../pruvodce/stuff/imgs/manPhase4.svg',
        '../pruvodce/stuff/imgs/womanPhase4.svg',
        'https://zdopravy.cz/plzen-jako-laborator-chytre-dopravy-do-roku-2027-ma-vyjet-autonomni-tramvaj-82346/'
    ],
    [
        "akcelerace",
        "BIC",
        `<p>BIC Plze?? je podnikatelsk?? a inova??n?? centrum, kter?? podporuje zakl??d??n?? a rozvoj inova??n??ho podnik??n?? v plze??sk??m regionu od roku 1992. P??sob?? v r??mci s??t?? pro podporu podnik??n?? a inovac?? a spolupracuje s ??adou dal????ch partner?? na region??ln??, n??rodn?? i mezin??rodn?? ??rovni. BIC poskytuje firm??m p????stup k financov??n?? inovac?? a mezin??rodn?? s??ti partner??.</p>`,
        '#2dd687',
        '100%',
        '100%',
        '100%',
        '25%',
        '../pruvodce/stuff/imgs/manPhase4.svg',
        '../pruvodce/stuff/imgs/womanPhase4.svg',
        'https://www.bicport.cz/o-programu/'
    ],
    [
        "akcelerace",
        "VTP",
        `<p>V??deckotechnick?? park v Plzni je kl????ov??m rozvojov??m projektem iniciovan??m a realizovan??m m??stem Plze??. Je lokalizov??n v jedn?? z nej??sp????n??j????ch pr??myslov??ch z??n v ??esk?? republice, v M??stsk??m industri??ln??m parku Plze?? Borsk?? pole v bl??zkosti Z??pado??esk?? univerzity. V??ce ne?? 10 tis. m2 kancel????sk??ch, poloprovozn??ch a laboratorn??ch ploch tvo???? modern?? infrastrukturu na podporu v??zkumu, v??voje a inovac??. Z??sadn?? je tak?? bl??zkost a mo??nost spolupr??ce se Z??pado??eskou univerzitou v Plzni jak z hlediska vyu??it?? v??zkumn??ch kapacit, tak z hlediska dostupnosti kvalifikovan?? pracovn?? s??ly.</p>`,
        '#2dd687',
        '100%',
        '100%',
        '100%',
        '50%',
        '../pruvodce/stuff/imgs/manPhase4.svg',
        '../pruvodce/stuff/imgs/womanPhase4.svg',
        'http://www.vtpplzen.cz/'
    ],
    [
        "akcelerace",
        "TechTower",
        `<p>TechTower je unik??tn?? prostor pro inov??tory, technologick?? nad??ence, program??tory a za????naj??c?? podnikatele. TechTower poskytuje flexibiln?? kancel????sk?? a coworkingov?? prostory, restauraci i kav??rnu, z??zem?? pro konference a workshopy, sd??len?? d??lny a experiment??ln?? vybaven?? pro n??pady, kter?? mohou zm??nit sv??t. M??sto Plze?? investuje do projektu TechTower s c??lem podpo??it startupovou komunitu, zviditelnit inovativn?? firmy a p??it??hnout pozornost investor??. TechTower je sou????st?? ambice Plzn?? b??t dlouhodob?? na ??pi??ce technologick??ch inovac?? a poskytovat budouc??m hv??zd??m byznysu to nejlep???? z??zem??.</p>`,
        '#2dd687',
        '100%',
        '100%',
        '100%',
        '100%',
        '../pruvodce/stuff/imgs/manPhase5.svg',
        '../pruvodce/stuff/imgs/womanPhase5.svg',
        'https://www.techtower.cz/'
    ],
    [
        "Level Up!",
        "",
        "",
        "",
        "100%",
        "100%",
        "100%",
        "100%",
        '../pruvodce/stuff/imgs/manPhase1.svg',
        '../pruvodce/stuff/imgs/womanPhase1.svg'
    ]
]

checkPoints = [
    20/3, //Centrum Robotiky
    20/3, //Radov??nek
    20/3, //Techmania
    6.25, //SIT Port
    6.25, //nvias
    10, //Drony SIT
    10, //SIT Garage
    6.25, //BIC Port
    8.75, //VR Lab
    15, //Mobility Innovation HUB
    15, //Polygon
    20, //BIC
    22.5, //VTP
    22.5, //TechTower
    17.5, //M??sto + Plze????k
]

buildings = [
    document.querySelector('#yellowBuilds #phase1-4'),
    document.querySelector('#yellowBuilds #phase2-4'),
    document.querySelector('#yellowBuilds #phase3-4'),
    document.querySelector('#purpleBuilds #phase1-3'),
    document.querySelector('#purpleBuilds #phase2-3'),
    document.querySelector('#purpleBuilds #phase3-3'),
    document.querySelector('#purpleBuilds #phase4-3'),
    document.querySelector('#blueBuilds #phase1-2'),
    document.querySelector('#blueBuilds #phase2-2'),
    document.querySelector('#blueBuilds #phase3-2'),
    document.querySelector('#blueBuilds #phase4-2'),
    document.querySelector('#greenBuilds #phase1'),
    document.querySelector('#greenBuilds #phase2'),
    document.querySelector('#greenBuilds #phase3'),
    document.querySelector('#greenBuilds #phase4')
]

const levely = [
    'Krou??ky a t??bory',
    `V??d??l??v??n?? pedagog??`,
    `Na??e firmy`,
    `Inovujeme Plze??`,
    `V??zvy a Hackathony`,
    `V??uka podnik??n??`,
    `IOT S????`,
    `5G testbed`,
    `Inova??n?? coworking`,
    `CzechInvest`,
    `Plze??sk?? podnikatelsk?? vouchery`,
    `RIS3 strategie`,
    `Enterprise Europe Network`
]

var deg = 0;
var path = 0;
var loops = 0;


// Nech?? zmizet m??sto, kter?? nen?? ve wrapperu
for (let i = 0; i<displayNone.length; i++) {
    displayNone[i].style.display = `none`;
}

function hideCities() {
    for (let index = 0; index < buildings.length; index++) {
        buildings[index].style.opacity = '0'
        
    }
}

function hideEverything() {
    for (let index = 0; index < displayNoneRegular.length; index++) {
        fade(displayNoneRegular[index])
    }
}

function showEverything() {
    for (let index = 0; index < displayNoneRegular.length; index++) {
        unfade(displayNoneRegular[index])
    }
}

endButton.addEventListener('click', function(e) {
    for (let i = 0; i < sections.length-1; i++) {
        sections[i].classList.add('pine-fadeIn');
        sections[i].style.display = 'block';
    }
    
    for (let i = 0; i < foots.length; i++) {
        sections[i].classList.add('pine-fadeIn');
        foots[i].style.display = 'block';
    }
    
    headerBM.classList.add('pine-fadeIn');
    headerBM.style.display = 'block';

    for (let i = 0; i<displayNone.length; i++) {
        displayNone[i].style.display = `none`;
    }


    afterPar.classList.remove('pine-fadeOut');
    afterPar.classList.add('pine-fadeIn');
    counter = 0;
    
})

var numberOfOpenings = 0;

function startPine() {
    if (numberOfOpenings == 0){hideCities()}
    numberOfOpenings++;

    megaWrapper.style.display ='initial'
    afterDesc.style.display = `initial`; 
    introDesc.style.display = `block`; 
    rightButton.style.display = `initial`;

    for (let i = 0; i < sections.length-1; i++) {
        sections[i].style.display = 'none';
      }

    for (let i = 0; i < foots.length; i++) {
        foots[i].style.display = 'none';
    }

    headerBM.style.display = 'none'
    


    
    setTimeout(function() {
            rightButton.classList.remove("pine-fadeIn");
            rightButton.classList.add("pine-pulse");
        },3000)

}

// Kliknut?? na tla????tko za????t

var counter = 0;
var pathPoint = 0

function scrollUp() {
    path += checkPoints[realPoint()];
    deg = -path;
    spiralMove(deg);
    updatePath();
}

function scrollDown() {
    path -= checkPoints[realPoint()];
    deg = -path;
    spiralMove(deg);
    updatePath();
}


rightButton.addEventListener('mouseup', function(e) {
    path+=checkPoints[realPoint()]
    if (realPoint() == (allText.length - 1)) loops++;
    scrollUp();
    pathPoint++;
    counter++
    if (counter === 1) {
        startIt()
    }
    
})

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '39') {
        path+=checkPoints[realPoint()]
        if (realPoint() == (allText.length - 1)) loops++;
        scrollUp();
        pathPoint++;
        counter++
        if (counter === 1) {
        startIt()
    }
    }
}


function updatePath() {
    subHead.textContent = allText[realPoint()][0];
    headline.textContent = allText[realPoint()][1];
    linkSec.textContent = "Zjistit v??ce o "+`${allText[realPoint()][1]}`;
    description.style.lineHeight = '1.5em';
    description.innerHTML = allText[realPoint()][2];

    subHead.style.color = allText[realPoint()][3];
    linkSec.style.color = allText[realPoint()][3];
    linkArrowColor.style.fill = allText[realPoint()][3];

    firstBar.style.width = allText[realPoint()][4];
    secondBar.style.width = allText[realPoint()][5];
    thirdBar.style.width = allText[realPoint()][6];
    fourthBar.style.width = allText[realPoint()][7];
    linkSec.setAttribute('href', allText[realPoint()][10]);

    shine(buildings[realPoint()]);

    if (loops%2 == 0) {person.src = allText[realPoint()][8];}
    else {person.src = allText[realPoint()][9];}

    if (realPoint() == (allText.length - 1) && loops > 0) {
        cityGrow();
        linkSec.style.display = "none"
        linkSection.style.display = "none"
    }
    if (realPoint() == 0 && loops > 0) {
        linkSec.style.display = "initial"
        linkSection.style.display = "initial"
    }


    playSound(pop);

}

function startIt() {
    rightButton.classList.remove('pine-fadeIn');
    document.querySelector('.pine-megaWrapper span').classList.add("pine-fadeOut");

    document.querySelector('.pine-afterIntro p').classList.remove("pine-fadeIn");
    document.querySelector('.pine-afterIntro p').classList.add("pine-fadeOut");

    afterPar.style.display = "none";

    endButton.style.display = "flex"

    wrapper.style.display = "flex"
    pineSpiral.style.display = "initial"

    headline.style.display = "initial"
    subHead.style.display = "initial"
    description.style.display = "initial";
    linkSection.style.display = "initial"
    linkSec.style.display = "initial"

    // progressHeading.style.display = "initial";
    backgroundPeer.style.display = "block";
}
function realPath() {
    let i = path/360;
    var j = Math.floor(i);
    i -= j;
    // console.log('real path is '+360*i)
    return 360*i;
}

function realPoint() {
    let index = pathPoint/(allText.length);
    let j = Math.floor(index);
    index -= j;
    return Math.round(allText.length*index);

}

function pathToTheEnd() {
    let i = path/360;
    var j = Math.ceil(i);
    j -= i;
    return 360*j;
}

function shine(element) {
    try {
        element.style.opacity = 1;
    } catch(error) {}
}

function unfade(element) {
    if (element.classList.contains('fadeOut')) {   
        element.classList.remove('fadeOut');
        element.classList.add('fadeIn');
    }
}
function fade(element) {
    if (element.classList.contains('fadeIn')) {
        element.classList.remove('fadeIn');
        element.classList.add('fadeOut');
    }
}

function spiralMove(degrees) {
    // pineSpiral.style.transitionDuration = "0.2s";
    pineSpiral.style.transform = 'translate(-10vw, -30vw) rotate('+degrees+'deg)'
    // console.log('to????Se')
    // pineSpiral.style.transitionDuration = "1s"
    // pineSpiral.style.transform = 'translate(-10vw, -30vw) rotate('+deg+'deg)';
}

function cityGrow() {
    description.innerHTML = peerClaims[loops%2][1];
    headline.innerHTML = peerClaims[loops%2][0];
    hideCities();

    
}

function playSound(audio) {
    audio.currentTime = 0;
    audio.play();
}

function sumArray(array) {
    const sum = array.reduce((partialSum, a) => partialSum + a, 0);
    // console.log(sum);
}