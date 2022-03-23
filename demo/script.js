const pineSpiral = document.querySelector('#pineSpiral');
const wrapper = document.querySelector('.wrapper');
const headline = document.querySelector('.headline');
const subHead = document.querySelector('.sub-head');
const description = document.querySelector('.desc');
// const photos = document.querySelector('.photos');
const linkSection = document.querySelector('.linkSec')
const linkArrowColor = document.querySelector('#linkArrow');
const linkSec = document.querySelector('link');

const navArrows = document.querySelectorAll('.navArrow');
const navBlock = document.querySelector('.block');

const person = document.getElementById('person');
const backgroundPeer = document.querySelector('.peer');
const progressHeading = document.querySelector('.peerHeadline');
const introHeading = document.querySelector(".introHeading");
const introPine = document.querySelector(".introPine");
const introDesc = document.querySelector(".introDesc");
const introGrad = document.querySelector('.introGrad')
const afterDesc = document.querySelector('.afterIntro')
const afterPar = document.querySelector('.afterPar')

const leftButton = document.querySelector('.left')
const rightButton = document.querySelector('.right')
const startButton = document.querySelector('.startPine')

const city = document.querySelector('#svgPineCity');

const firstQuater = document.querySelector('#linear-gradient')
const secondQuater = document.querySelector('#linear-gradient-2')
const thirdQuater = document.querySelector('#linear-gradient-3')
const fourthQuater = document.querySelector('#linear-gradient-4')

const firstBar = document.querySelector('.fillingFirstQuaterBar');
const secondBar = document.querySelector('.fillingSecondQuaterBar');
const thirdBar = document.querySelector('.fillingThirdQuaterBar');
const fourthBar = document.querySelector('.fillingFourthQuaterBar');

const pop = new Audio('sounds/popSound.mp3')
pop.volume = 0.1;

var opacityTransitions = [
    backgroundPeer,
    pineSpiral,
    headline,
    subHead,
    description,
    progressHeading,
    leftButton,
    rightButton,
    wrapper,
    introHeading,
    introPine,
    introDesc,
]

var introOpacityTransitions = [
    introPine,
    introDesc,
    startButton,
    introGrad
]

var displayNone = [
    backgroundPeer,
    pineSpiral,
    headline,
    description,
    subHead,
    // progressHeading,
    wrapper,
    afterDesc,
    rightButton,
    leftButton,
    linkSec,
    // linkSection,
    // navArrows[0],
    // navArrows[1],
    // navArrows[2],
    // navArrows[3],
]

var displayNoneRegular = [
    headline,
    description,
    subHead,
    afterDesc,
    linkSec,
]

const introDescs = [
    '<p>jedinečný ekosystém, který pracuje s vnímáním technologií už s dětmi v mateřské školce, prostupuje všemi stupni vzdělávacího systému a postupně se věnuje nadějným inovátorům, kteří mají potenciál založit svůj vlastní business, přičemž jim pak v jejich inovativním podnikání pomáhá růst.</p>',
    
]

const introHeadings = [
    '<h2>Plzeň rozvíjí Plzeňáky díky ekosystému PINE</h2>',
]

const peerClaims = [
    [
        '<h2>Plzeň a Plzeňačka jdou<br>do dalšího levelu</h2>',
        '<p>Plzeňačka rozvinula své talenty a díky nim prosperuje město i ona sama.<br>Plzeň se posouvá na další level a Plzeňačka zakládá rodinu. <br><b>Na světě je nový Plzeňák.</b></p>'
    ],
    [
        '<h2>Plzeň a Plzeňák jdou<br>do dalšího levelu</h2>',
        '<p>Plzeňák rozvinul své talenty a díky nim prosperuje město i on sám. <br>Plzeň se posouvá na další level a Plzeňák zakládá rodinu. <br><b>Na světě je nová Plzeňačka.</b></p>'
    ]
]

const progressHeadings = [
    'Vývoj Plzeňáka',
    'Vývoj Plzeňačky',
]

// const photosInside = `<img src="https://via.placeholder.com/170x120.png?text=Mood fotka" alt="" class="first">
// <img src="https://via.placeholder.com/170x120.png?text=Mood fotka" alt="" class="second">
// <img src="https://via.placeholder.com/170x120.png?text=Mood fotka" alt="" class="third">`



const allText = [

    [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        'stuff/imgs/manPhase1.svg',
        'stuff/imgs/manPhaseWoman.svg'
    ],
    [
        "Rozvoj talentů",
        "Radovánek",
        `<p>Středisko volného času RADOVÁNEK je školským zařízením pro zájmové vzdělávání. Jeho zřizovatelem je Plzeňský kraj na základě zákona č. 561/004 Sb., o předškolním, základním, vyšším odborném a jiném vzdělávání (školský zákon) a vyhl. č. 74/2005 Sb. o zájmovém vzdělávání. Je příspěvkovou organizací. Činnost SVČ je určena pro děti, žáky, studenty a dospělé a to bez ohledu na místo jejich trvalého pobytu nebo jiné podmínky. Celoročně zajišťuje činnost pravidelnou, příležitostnou a spontánní a prázdninovou.</p>`,
        '#fcc200',
        '50%',
        '3%',
        '3%',
        '3%',
        'stuff/imgs/manPhase1.svg',
        'stuff/imgs/manPhaseWoman.svg'
    ],
    [
        "Rozvoj talentů",
        "Techmania",
        `<p>Plzeňské science center Techmania je experimentální stanice pro zvídavé. Představuje most mezi neformálním vzděláváním a populární turistickou destinací. Cílem Techmanie je pomáhat žákům, studentům i rodinám s dětmi nacházet a rozvíjet osobní vztah k vědě a technice a v obecné rovině objevovat možnosti lidského poznání.</p>`,
        '#fcc200',
        '100%',
        '3%',
        '3%',
        '3%',
        'stuff/imgs/manPhase1.svg',
        'stuff/imgs/manPhaseWoman.svg'

    ],
    [
        "preinkubace",
        "nvias",
        `<p>Nvias přetváří mladé generace z konzumentů na tvůrce. Vzdělává je v oblasti technologií a otevírá jim nový, neprobádaný svět. Pomáhá jim najít impuls ke tvoření. Děti se postupně naučí, jak ovládnout a naprogramovat technologie využívající strojové učení. V Nvias děti experimentují a aplikují nové dovednosti do reálných produktů.</p>`,
        '#7b6ce6',
        '100%',
        '33%',
        '3%',
        '3%',
        'stuff/imgs/manPhase2.svg',
        'stuff/imgs/lifecycleSecondQuaterWoman.svg'
    ],
    [   
        "preinkubace",
        "Drony SIT",
        `<p>Jsme úsekem Správy informačních technologií města Plzně. Jsme tu proto, abychom díky inovacím pomáhali rozvoji oboru, posouvali jeho hranice a byli profesionálním partnerem pro naše zákazníky, inspirací pro mladé talenty i pomocí pro naši komunitu. Jsme úsekem Správy informačních technologií města Plzně. Jsme tu proto, abychom díky inovacím pomáhali rozvoji oboru, posouvali jeho hranice a byli profesionálním partnerem pro naše zákazníky, inspirací pro mladé talenty i pomocí pro naši komunitu.</p>`,
        '#7b6ce6',
        '100%',
        '66%',
        '3%',
        '3%',
        'stuff/imgs/manPhase2.svg',
        'stuff/imgs/lifecycleSecondQuaterWoman.svg'
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
        'stuff/imgs/lifecycleSecondQuaterWoman.svg'
    ],
    [
        "inkubace",
        "VR Lab",
        `<p>VR Lab je prostor vybavený řadou typů brýlí a ovladačů pro virtuální realitu, které lze s odbornou asistencí využít pro testování vlastních VR softwarů. VR Lab je přizpůsoben i pro vlastní školení uživatelů nebo obchodní jednání se zákazníky. VR Lab je prostor vybavený řadou typů brýlí a ovladačů pro virtuální realitu, které lze s odbornou asistencí využít pro testování vlastních VR softwarů. VR Lab je přizpůsoben i pro vlastní školení uživatelů nebo obchodní jednání se zákazníky. </p>`,
        '#00a8f0',
        '100%',
        '100%',
        '33%',
        '3%',
        'stuff/imgs/manPhase3.svg',
        'stuff/imgs/lifecycleThirdQuaterWoman.svg',
    ],
    [
        "inkubace",
        "Mobility Innovation HUB",
        `<p>Mobility Innovation Hub je nový český projekt, který má podpořit mobilitu budoucnosti. Konkrétně pak propojuje státní sektor se soukromým. Jeho cílem je dostat do Česka globální investice, vytvořit prostředí pro inovativní projekty v oblasti mobility a jejich efektivní realizaci. Dále má podpořit konkurenceschopnost české ekonomiky. Mobility Innovation Hub aktuálně shání partnery z komerčního i akademického sektoru. Přípravu a koordinaci projektu ma na starosti národní agentura pro podporu investic a podnikání CzechInvest.</p>`,
        '#00a8f0',
        '100%',
        '100%',
        '66%',
        '3%',
        'stuff/imgs/manPhase4.svg',
        'stuff/imgs/lifecycleThirdQuaterWoman.svg'
    ],
    [
        "inkubace",
        "Polygon pro autonomní tramvaj",
        `<p>Český polygon pro testování a certifikaci vozidel s autonomním řízením by měl do roku 2022 stát u západočeského Stříbra. Připravuje ho česká investiční skupina Accolade.  Do České republiky by měl přitáhnout špičku automobilových vývojářů nejen z Evropy. Na polygonu bude možné testovat veškeré dopravní situace, a to i ty evropské. Polygony, na kterých se dnes testuje, umí nasimulovat hlavně přísně geometrická města pravých úhlů typu New York. Takto ověřené systémy jsou pak na pražském Starém městě, v uličkách Lisabonu nebo v centru Říma úplně ztracené. Ale právě takové prostředí budou umět ve Stříbře navodit. Okruh bude vedle městských uliček umět vytvořit i prostředí dálnice, silnic první třídy, okresek nebo jízdy v tunelu.</p>`,
        '#00a8f0',
        '100%',
        '100%',
        '100%',
        '3%',
        'stuff/imgs/manPhase4.svg',
        'stuff/imgs/lifecycleThirdQuaterWoman.svg'
    ],
    [
        "akcelerace",
        "VTP",
        `<p>Vědeckotechnický park v Plzni je klíčovým rozvojovým projektem iniciovaným a realizovaným městem Plzeň. Je lokalizován v jedné z nejúspěšnějších průmyslových zón v České republice, v  Městském industriálním parku Plzeň Borská pole v blízkosti Západočeské univerzity. Více než 10 tis. m2 kancelářských, poloprovozních a laboratorních ploch tvoří moderní infrastrukturu na podporu výzkumu, vývoje a inovací. Vědeckotechnický park Plzeň těží z velmi výhodné geografické polohy s přímým dálničním spojením s  Prahou a s Německem (Norimberk). Zásadní je také blízkost a možnost spolupráce se Západočeskou univerzitou v Plzni jak z hlediska využití výzkumných kapacit, tak z hlediska dostupnosti kvalifikované pracovní síly.</p>`,
        '#2dd687',
        '100%',
        '100%',
        '100%',
        '33%',
        'stuff/imgs/manPhase4.svg',
        'stuff/imgs/lifecycleFourthQuaterWoman.svg',
    ],
    [
        "akcelerace",
        "HIVE",
        `<p>Včel dramaticky ubývá, z kvalitního medu se stává nedostatkové zboží. Mezi největší příčiny úmrtnosti včel na světě patří varoáza, infekční nemoc způsobená roztočem Varroa Destructor (kleštík včelí), která včelaře trápí čím dál víc. Tato nemoc se běžně léčí pomocí chemikálií. Účinnost chemické terapie ale není dostatečná, dlouhodobě klesá a zbytky chemikálií se po ošetření včelstva často nacházejí ve vosku a medu. Včelaři se shodují, že nejúčinnější prevencí proti úbytku včelstev je udržování včel v dobré kondici zajištěním optimálních životních podmínek.</p>`,
        '#2dd687',
        '100%',
        '100%',
        '100%',
        '66%',
        'stuff/imgs/manPhase5.svg',
        'stuff/imgs/lifecycleFourthQuaterWoman.svg',
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
        'stuff/imgs/lifecycleFourthQuaterWoman.svg',
    ],
    [
        "Level Up!",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        'stuff/imgs/manPhase1vg',
        'stuff/imgs/lifecycleFirstQuaterWoman.svg'
    ]
]

checkPoints = [
    0,
    10, //Radovánek
    10, //Techmania
    12.5, //nvias
    5, //Drony SIT
    15, //SIT Garage
    12.5, //VR Lab
    17.5, //Mobility Innovation HUB
    15, //Polygon
    20, //VTP
    22.5, //Hive
    22.5, //TechTower
    17.5, //Město + Plzeňák
]

buildings = [
    document.getElementById('YelBuil1'),
    document.getElementById('YelBuil2'),
    document.getElementById('PurpBuil1'),
    document.getElementById('PurpBuil2'),
    document.getElementById('PurpBuil3'),
    document.getElementById('BlueBuil1'),
    document.getElementById('BlueBuil2'),
    document.getElementById('BlueBuil3'),
    document.getElementById('GreenBuil1'),
    document.getElementById('GreenBuil2'),
    document.getElementById('GreenBuil3'),
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
const imgPaths = [
    // Plzeňáček
    'stuff/imgs/lifecycleFirstQuater.svg',
    // Plzeňák lvl.2
    'stuff/imgs/lifecycleSecondQuater.svg',
    // lvl. 3
    'stuff/imgs/lifecycleThirdQuater.svg',
    // lvl. 4
    'stuff/imgs/lifecycleFourthQuater.svg',
    //Plzeňačka
    'stuff/imgs/lifecycleFirstQuaterWoman.svg',
    //Plzeňačka lvl.2
    'stuff/imgs/lifecycleSecondQuaterWoman.svg',
    //Plzeňačka lvl.3
    'stuff/imgs/lifecycleThirdQuaterWoman.svg',
    //Plzeňačka lvl.4
    'stuff/imgs/lifecycleFourthQuaterWoman.svg',
]
var deg = 0;
var path = 0;
var loops = 0;

// Display:none
// Num of elements: 7


// Nechá zmizet město, které není ve wrapperu
for (let i = 0; i<displayNone.length; i++) {
    displayNone[i].style.display = `none`;
}
function hideCities() {
    city.style.opacity = '0'
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

hideCities();


// Kliknutí na tlačítko začít

var counter = 0;
var pathPoint = 0

function scrollUp() {
    path += checkPoints[realPoint()];
    deg = -path;
    spiralMove(deg);
    // pineSpiral.style.transform = 'translate(-10vw, -30vw) rotate('+deg+'deg)';
    // pineSpiral.style.transform = 'rotate('+deg+'deg)';
    updatePath();
}

function scrollDown() {
    path -= checkPoints[realPoint()];
    deg = -path;
    spiralMove(deg);
    // pineSpiral.style.transform = 'translate(-10vw, -30vw) rotate('+deg+'deg)';
    // pineSpiral.style.transform = 'rotate('+deg+'deg)';
    updatePath();
}

function pathChecker() {
    if (realPoint() < 0) {realPoint() = 11; console.log("Tal hele ty")}
    else console.log("Nic se nestalo");
    if (realPoint() > 13) {
        realPoint() = 0;
        loops ++;
    }
}

startButton.addEventListener('click', function(e) {
    for (let i = 0; i<introOpacityTransitions.length; i++) {
        introOpacityTransitions[i].classList.remove("fadeIn");
        introOpacityTransitions[i].classList.add("fadeOut");
    }
    setTimeout(function() {
        introHeading.classList.remove("fadeIn");
        introHeading.classList.add("fadeOut");
    }
        ,1.0*1000)

    setTimeout(function() {
        for (let i = 0; i<introOpacityTransitions.length; i++) {
            introOpacityTransitions[i].style.display = `none`;
            introHeading.style.display = `none`;
        }
        afterDesc.style.display = `initial`;
        
    }
    ,1.0*2000)
    // Zobrazí button - right arrow
    setTimeout(function() {
        rightButton.style.display = `initial`;
    },4000)

    setTimeout(function() {
        rightButton.classList.remove("fadeIn");
        rightButton.classList.add("pulse");
    },4000)
    
    setTimeout(function() {
        leftButton.style.display = `initial`;
    },3000)

    
});

leftButton.addEventListener('mouseup', function(e) {
    path-=checkPoints[realPoint()]
    if (realPoint() == 12) loops--;
    scrollUp();
    pathPoint++;
    counter++
    
})
rightButton.addEventListener('mouseup', function(e) {
    path+=checkPoints[realPoint()]
    if (realPoint() == 12) loops++;
    scrollUp();
    pathPoint++;
    counter++
    if (counter === 1) {
        startIt()
    }
    
})

function updatePath() {
    subHead.textContent = allText[realPoint()][0];
    headline.textContent = allText[realPoint()][1];
    linkSec.innerHTML = "Zjistit více o "+`${allText[realPoint()][1]}`;
    description.style.lineHeight = '1.5em';
    description.innerHTML = allText[realPoint()][2];

    subHead.style.color = allText[realPoint()][3];
    linkSec.style.color = allText[realPoint()][3];
    linkArrowColor.style.fill = allText[realPoint()][3];

    firstBar.style.width = allText[realPoint()][4];
    secondBar.style.width = allText[realPoint()][5];
    thirdBar.style.width = allText[realPoint()][6];
    fourthBar.style.width = allText[realPoint()][7];

    if (loops%2 == 0) {person.src = allText[realPoint()][8]; rightButton.textContent = "dopředu";}
    else {person.src = allText[realPoint()][9];}

    if (realPoint() > 0 && realPoint() < 13) {
        try {shine(buildings[realPoint()-1])}
        catch(error) {}
    } 
    if (realPoint() == 0 && loops > 0) {
        cityGrow();
    }


    playSound(pop);

}

function startIt() {
    rightButton.classList.remove('fadeIn');

    document.querySelector('.afterIntro p').classList.remove("fadeIn");
    document.querySelector('.afterIntro p').classList.add("fadeOut");

    afterPar.style.display = "none";
    wrapper.style.display = "flex"
    pineSpiral.style.display = "initial"

    headline.style.display = "initial"
    subHead.style.display = "initial"
    description.style.display = "initial";
    linkSec.style.display = "initial"

    // progressHeading.style.display = "initial";
    backgroundPeer.style.display = "initial";
}
function realPath() {
    let i = path/360;
    var j = Math.floor(i);
    i -= j;
    console.log('real path is '+360*i)
    return 360*i;
}

function realPoint() {
    let index = pathPoint/13;
    let j = Math.floor(index);
    index -= j;
    return Math.round(13*index);

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
    // pineSpiral.style.transitionDuration = "1s"
    // pineSpiral.style.transform = 'translate(-10vw, -30vw) rotate('+deg+'deg)';
}

function cityGrow() {
    hideEverything();
    fade(rightButton)
    rightButton.style.pointerEvents = 'none';
    city.classList.add('fadeIn')
    // description.style.lineHeight = '2em';
    
    subHead.innerHTML = "";
    linkSec.innerHTML = "";
    description.innerHTML = peerClaims[loops%2][1];
    headline.innerHTML = peerClaims[loops%2][0];
    
    showEverything();
    
    fade(city);
    hideCities();
    rightButton.style.pointerEvents = 'auto';
    rightButton.textContent = "zkusit znovu"

    
}

function playSound(audio) {
    audio.currentTime = 0;
    audio.play();
  }