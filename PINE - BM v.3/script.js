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
    '<p>jedinečný ekosystém, který pracuje s vnímáním technologií už s dětmi v mateřské školce, prostupuje všemi stupni vzdělávacího systému a postupně se věnuje nadějným inovátorům, kteří mají potenciál založit svůj vlastní business, přičemž jim pak v jejich inovativním podnikání pomáhá růst.</p>',
    
]

const introHeadings = [
    '<h2>Plzeň rozvíjí Plzeňáky díky ekosystému PINE</h2>',
]

const peerClaims = [
    [
        '<h2>Naše Plzeňačka jde do další úrovně.</h2>',
        '<p>Rozvinula své talenty, zjistila, co dokáže, zkusila si, co obnáší podnikání a pomohla rozjet inovativní firmu. Díky ní a jejím přátelům prosperuje celé naše město.Plzeň se posouvá na další level a Plzeňačka tady zakládá svou vlastní rodinu.<br><b>Na světě je nový Plzeňáček…</b></p>'
    ],
    [
        '<h2>Náš Plzeňák jde do další úrovně.</h2>',
        '<p>Rozvinul své talenty, zjistil, co dokáže, zkusil si, co obnáší podnikání a pomohl rozjet inovativní firmu. Díky němu a jeho přátelům prosperuje celé naše město. Plzeň se posouvá na další level a Plzeňák tady zakládá svou vlastní rodinu.<br><b>Na světě je nová Plzeňačka…</b></p>'
    ]
]

const progressHeadings = [
    'Vývoj Plzeňáka',
    'Vývoj Plzeňačky'
]

// const photosInside = `<img src="https://via.placeholder.com/170x120.png?text=Mood fotka" alt="" class="first">
// <img src="https://via.placeholder.com/170x120.png?text=Mood fotka" alt="" class="second">
// <img src="https://via.placeholder.com/170x120.png?text=Mood fotka" alt="" class="third">`



const allText = [
    [
        "Rozvoj talentů",
        "Centrum robotiky",
        `<p>Centrum robotiky je místem vzdělávání, podpory a volnočasových aktivit v oblasti digitálních technologií. Nabízí kroužky a aktivity pro děti, kurzy pro seniory, vzdělávací semináře pro pedagogy, programy pro třídy základních i mateřských škol. Je součástí Správy informačních technologií města Plzně (SIT).</p>`,
        '#fcc200',
        '33%',
        '3%',
        '3%',
        '3%',
        'stuff/imgs/manPhase1.svg',
        'stuff/imgs/womanPhase1.svg'
    ],
    [
        "Rozvoj talentů",
        "Radovánek",
        `<p>Středisko volného času RADOVÁNEK je školským zařízením pro zájmové vzdělávání, jehož  zřizovatelem je Plzeňský kraj. Je tu pro děti, žáky, studenty a dospělé z celého kraje. Celoročně zajišťuje činnost pravidelnou, příležitostnou a spontánní a prázdninovou.</p>`,
        '#fcc200',
        '66%',
        '3%',
        '3%',
        '3%',
        'stuff/imgs/manPhase1.svg',
        'stuff/imgs/womanPhase1.svg'
    ],
    [
        "Rozvoj talentů",
        "Techmania",
        `<p>Plzeňské Science center Techmania je experimentální stanice pro zvídavé. Představuje most mezi neformálním vzděláváním a populární turistickou destinací. Cílem Techmanie je pomáhat žákům, studentům i rodinám s dětmi nacházet a rozvíjet osobní vztah k vědě a technice a v obecné rovině objevovat možnosti lidského poznání.</p>`,
        '#fcc200',
        '100%',
        '3%',
        '3%',
        '3%',
        'stuff/imgs/manPhase1.svg',
        'stuff/imgs/womanPhase1.svg'

    ],
    [
        "preinkubace",
        "SIT Port",
        `<p>SIT Port buduje technickou komunitu, kde se techničtí nadšenci potkávají s profesionálními mentory a nejrůznějšími odborníky z praxe. Nabízí studentům a mladým lidem prostor pro tvoření. Organizuje zajímavé projekty, díky kterým mohou rozvíjet svůj talent. Podporuje začínající podnikatele. Nabízí potřebnou oporu při rozjezdu vlastního businessu – mentoring, odborné poradenství, workshopy, zázemí, zafinancování prototypu, motivujeme akcemi jako jsou Startup Weekendy. SIT Port poskytuje zázemí pro každého, kdo hledá prostory k bastlení, sdílenou kancelář nebo moderní vybavení na výrobu prototypu.</p>`,
        '#7b6ce6',
        '100%',
        '25%',
        '3%',
        '3%',
        'stuff/imgs/manPhase2.svg',
        'stuff/imgs/womanPhase2.svg'
    ],
    [
        "preinkubace",
        "nvias",
        `<p>Nvias přetváří mladé generace z konzumentů na tvůrce. Vzdělává je v oblasti technologií a otevírá jim nový, neprobádaný svět. Pomáhá jim najít impuls ke tvoření. Děti se postupně naučí, jak ovládnout a naprogramovat technologie využívající strojové učení. V Nvias děti experimentují a aplikují nové dovednosti do reálných produktů.</p>`,
        '#7b6ce6',
        '100%',
        '50%',
        '3%',
        '3%',
        'stuff/imgs/manPhase2.svg',
        'stuff/imgs/womanPhase2.svg'
    ],
    [   
        "preinkubace",
        "Drony SIT",
        `<p>Drony SIT jsou úsekem Správy informačních technologií města Plzně. Jsou tu proto, aby díky inovacím pomáhali rozvoji oboru bezpilotního letectví, posouvali jeho hranice a byli profesionálním partnerem pro své zákazníky, inspirací pro mladé talenty i pomocí pro naši komunitu. Drony SIT jsou technologickým partnerem plzeňského Hasičského záchranného sboru.</p>`,
        '#7b6ce6',
        '100%',
        '75%',
        '3%',
        '3%',
        'stuff/imgs/manPhase2.svg',
        'stuff/imgs/womanPhase2.svg'
    ],
    [
        "preinkubace",
        "SIT Port Garage",
        `<p>SIT Port Garage je skvělé místo pro každého, kdo chce tvořit. Garáž znamená zázemí a moderní technologie v jednom – poskytujeme vybavení pro kutily, hardware i data, 3D tiskárny nebo CNC stroje. Navíc dokážeme zafinancovat specifické hardwarové vybavení i testování prototypů. V garáži pořádáme také zajímavé workshopy, které šijeme na míru členům SIT Port komunity a věnujeme se i mentoringu zakládání a řízení firmy, umíme poradit v oblasti práva, financí nebo třeba marketingu. Vyrazit odpoledne do garáže u nás dostává úplně nový rozměr!</p>`,
        '#7b6ce6',
        '100%',
        '100%',
        '3%',
        '3%',
        'stuff/imgs/manPhase3.svg',
        'stuff/imgs/womanPhase3.svg',
    ],
    [
        "inkubace",
        "BIC Port",
        `<p>BIC Port organizuje inkubační programy pro začínající firmy z Plzeňského kraje, posktyuje individuální konzultace. Nabízí možnosti technologické inkubace pro ambiciózní startupy a poskytuje možnost využití sdílených kanceláří v centru města.</p>`,
        '#00a8f0',
        '100%',
        '100%',
        '25%',
        '3%',
        'stuff/imgs/manPhase3.svg',
        'stuff/imgs/womanPhase3.svg',
    ],
    [
        "inkubace",
        "VR Lab",
        `<p>VR Lab je prostor vybavený řadou typů brýlí a ovladačů pro virtuální realitu, které lze s odbornou asistencí využít pro testování vlastních VR softwarů. VR Lab je přizpůsoben i pro vlastní školení uživatelů nebo obchodní jednání se zákazníky. VR Lab je prostor vybavený řadou typů brýlí a ovladačů pro virtuální realitu, které lze s odbornou asistencí využít pro testování vlastních VR softwarů. VR Lab je přizpůsoben i pro vlastní školení uživatelů nebo obchodní jednání se zákazníky.</p>`,
        '#00a8f0',
        '100%',
        '100%',
        '50%',
        '3%',
        'stuff/imgs/manPhase3.svg',
        'stuff/imgs/womanPhase3.svg',
    ],
    [
        "inkubace",
        "Mobility Innovation HUB",
        `<p>Mobility Innovation Hub je nový český projekt, který má podpořit mobilitu budoucnosti. Konkrétně pak propojuje státní sektor se soukromým. Jeho cílem je dostat do Česka globální investice, vytvořit prostředí pro inovativní projekty v oblasti mobility a jejich efektivní realizaci. Dále má podpořit konkurenceschopnost české ekonomiky. Mobility Innovation Hub spojuje partnery z komerčního i akademického sektoru. Přípravu a koordinaci projektu má na starosti národní agentura pro podporu investic a podnikání CzechInvest.</p>`,
        '#00a8f0',
        '100%',
        '100%',
        '75%',
        '3%',
        'stuff/imgs/manPhase4.svg',
        'stuff/imgs/womanPhase4.svg',
    ],
    [
        "inkubace",
        "Polygon pro autonomní tramvaj",
        `<p>Český polygon pro testování a certifikaci vozidel s autonomním řízením by měl do roku 2022 stát u západočeského Stříbra. Připravuje ho česká investiční skupina Accolade. Do České republiky by měl přitáhnout špičku automobilových vývojářů nejen z Evropy. Na polygonu bude možné testovat veškeré dopravní situace, a to i ty evropské. Okruh bude vedle městských uliček umět vytvořit i prostředí dálnice, silnic první třídy, okresek nebo jízdy v tunelu.</p>`,
        '#00a8f0',
        '100%',
        '100%',
        '100%',
        '3%',
        'stuff/imgs/manPhase4.svg',
        'stuff/imgs/womanPhase4.svg'
    ],
    [
        "akcelerace",
        "BIC",
        `<p>BIC Plzeň je podnikatelské a inovační centrum, které podporuje zakládání a rozvoj inovačního podnikání v plzeňském regionu od roku 1992. Působí v rámci sítí pro podporu podnikání a inovací a spolupracuje s řadou dalších partnerů na regionální, národní i mezinárodní úrovni. BIC poskytuje firmám přístup k financování inovací a mezinárodní síti partnerů.</p>`,
        '#2dd687',
        '100%',
        '100%',
        '100%',
        '25%',
        'stuff/imgs/manPhase4.svg',
        'stuff/imgs/womanPhase4.svg',
    ],
    [
        "akcelerace",
        "VTP",
        `<p>Vědeckotechnický park v Plzni je klíčovým rozvojovým projektem iniciovaným a realizovaným městem Plzeň. Je lokalizován v jedné z nejúspěšnějších průmyslových zón v České republice, v Městském industriálním parku Plzeň Borská pole v blízkosti Západočeské univerzity. Více než 10 tis. m2 kancelářských, poloprovozních a laboratorních ploch tvoří moderní infrastrukturu na podporu výzkumu, vývoje a inovací. Zásadní je také blízkost a možnost spolupráce se Západočeskou univerzitou v Plzni jak z hlediska využití výzkumných kapacit, tak z hlediska dostupnosti kvalifikované pracovní síly.</p>`,
        '#2dd687',
        '100%',
        '100%',
        '100%',
        '50%',
        'stuff/imgs/manPhase4.svg',
        'stuff/imgs/womanPhase4.svg',
    ],
    [
        "akcelerace",
        "TechTower",
        `<p>TechTower je unikátní prostor pro inovátory, technologické nadšence, programátory a začínající podnikatele. TechTower poskytuje flexibilní kancelářské a coworkingové prostory, restauraci i kavárnu, zázemí pro konference a workshopy, sdílené dílny a experimentální vybavení pro nápady, které mohou změnit svět. Město Plzeň investuje do projektu TechTower s cílem podpořit startupovou komunitu, zviditelnit inovativní firmy a přitáhnout pozornost investorů. TechTower je součástí ambice Plzně být dlouhodobě na špičce technologických inovací a poskytovat budoucím hvězdám byznysu to nejlepší zázemí.</p>`,
        '#2dd687',
        '100%',
        '100%',
        '100%',
        '100%',
        'stuff/imgs/manPhase5.svg',
        'stuff/imgs/womanPhase5.svg',
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
        'stuff/imgs/manPhase1.svg',
        'stuff/imgs/womanPhase1.svg'
    ]
]

checkPoints = [
    20/3, //Centrum Robotiky
    20/3, //Radovánek
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
    17.5, //Město + Plzeňák
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
    'Kroužky a tábory',
    `Vždělávání pedagogů`,
    `Naše firmy`,
    `Inovujeme Plzeň`,
    `Výzvy a Hackathony`,
    `Výuka podnikání`,
    `IOT Síť`,
    `5G testbed`,
    `Inovační coworking`,
    `CzechInvest`,
    `Plzeňské podnikatelské vouchery`,
    `RIS3 strategie`,
    `Enterprise Europe Network`
]

var deg = 0;
var path = 0;
var loops = 0;


// Nechá zmizet město, které není ve wrapperu
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
    for (let i = 0; i<displayNone.length; i++) {
        displayNone[i].style.display = `none`;
    }

    afterPar.classList.remove('pine-fadeOut');
    afterPar.classList.add('pine-fadeIn');
    counter = 0;
    
})

function startPine() {
    hideCities();

    megaWrapper.style.display ='initial'
    afterDesc.style.display = `initial`; 
    introDesc.style.display = `block`; 
    rightButton.style.display = `initial`;
    
    setTimeout(function() {
            rightButton.classList.remove("pine-fadeIn");
            rightButton.classList.add("pine-pulse");
        },3000)

}

// Kliknutí na tlačítko začít

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
    linkSec.textContent = "Zjistit více o "+`${allText[realPoint()][1]}`;
    description.style.lineHeight = '1.5em';
    description.innerHTML = allText[realPoint()][2];

    subHead.style.color = allText[realPoint()][3];
    linkSec.style.color = allText[realPoint()][3];
    linkArrowColor.style.fill = allText[realPoint()][3];

    firstBar.style.width = allText[realPoint()][4];
    secondBar.style.width = allText[realPoint()][5];
    thirdBar.style.width = allText[realPoint()][6];
    fourthBar.style.width = allText[realPoint()][7];
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
    // console.log('točíSe')
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