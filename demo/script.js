const pineSpiral = document.querySelector('#pineSpiral');
const wrapper = document.querySelector('.wrapper');
const headline = document.querySelector('.headline');
const subHead = document.querySelector('.sub-head');
const description = document.querySelector('.desc');
// const photos = document.querySelector('.photos');
const person = document.querySelector('#person');
const backgroundPeer = document.querySelector('.peer');
const progressHeading = document.querySelector('.progressHeading');
const introHeading = document.querySelector(".introHeading");
const introPine = document.querySelector(".introPine");
const introDesc = document.querySelector(".introDesc");
const introGrad = document.querySelector('.introGrad')
const afterDesc = document.querySelector('.afterIntro')
const afterPar = document.querySelector('.afterPar')

const buttons = document.querySelectorAll('.circle');
const leftButton = document.querySelector('.arrows .left');
const rightButton = document.querySelector('.arrows .right');
const startButton = document.querySelector('.startPine')

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
    introDesc
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
    subHead,
    description,
    progressHeading,
    leftButton,
    wrapper,
    afterDesc,
    rightButton
]

const descs = [
    `<p>Středisko volného času RADOVÁNEK je školským zařízením pro zájmové vzdělávání. Jeho zřizovatelem je Plzeňský kraj na základě zákona č. 561/2004 Sb., o předškolním, základním, vyšším odborném a jiném vzdělávání (školský zákon) a vyhl. č. 74/2005 Sb. o zájmovém vzdělávání. Je příspěvkovou organizací. Činnost SVČ je určena pro děti, žáky, studenty a dospělé a to bez ohledu na místo jejich trvalého pobytu nebo jiné podmínky. Celoročně zajišťuje činnost pravidelnou, příležitostnou a spontánní a prázdninovou.</p>`,
    `<p>Plzeňské science center Techmania je experimentální stanice pro zvídavé. Představuje most mezi neformálním vzděláváním a populární turistickou destinací. Cílem Techmanie je pomáhat žákům, studentům i rodinám s dětmi nacházet a rozvíjet osobní vztah k vědě a technice a v obecné rovině objevovat možnosti lidského poznání.</p>`,
    `<p>Nvias přetváří mladé generace z konzumentů na tvůrce. Vzdělává je v oblasti technologií a otevírá jim nový, neprobádaný svět. Pomáhá jim najít impuls ke tvoření. Děti se postupně naučí, jak ovládnout a naprogramovat technologie využívající strojové učení. V Nvias děti experimentují a aplikují nové dovednosti do reálných produktů.</p>`,
    `<p>Jsme úsekem Správy informačních technologií města Plzně. Jsme tu proto, abychom díky inovacím pomáhali rozvoji oboru, posouvali jeho hranice a byli profesionálním partnerem pro naše zákazníky, inspirací pro mladé talenty i pomocí pro naši komunitu. Jsme úsekem Správy informačních technologií města Plzně. Jsme tu proto, abychom díky inovacím pomáhali rozvoji oboru, posouvali jeho hranice a byli profesionálním partnerem pro naše zákazníky, inspirací pro mladé talenty i pomocí pro naši komunitu.</p>`,
    `<p>SIT Port Garage je skvělé místo pro každého, kdo chce tvořit. Garáž znamená zázemí a moderní technologie v jednom – poskytujeme vybavení pro kutily, hardware i data, 3D tiskárny nebo CNC stroje. Navíc dokážeme zafinancovat specifické hardwarové vybavení i testování prototypů. V garáži pořádáme také zajímavé workshopy, které šijeme na míru členům SIT Port komunity a věnujeme se i mentoringu zakládání a řízení firmy, umíme poradit v oblasti práva, financí nebo třeba marketingu. Vyrazit odpoledne do garáže u nás dostává úplně nový rozměr!</p>`,
    `<p>VR Lab je prostor vybavený řadou typů brýlí a ovladačů pro virtuální realitu, které lze s odbornou asistencí využít pro testování vlastních VR softwarů. VR Lab je přizpůsoben i pro vlastní školení uživatelů nebo obchodní jednání se zákazníky. VR Lab je prostor vybavený řadou typů brýlí a ovladačů pro virtuální realitu, které lze s odbornou asistencí využít pro testování vlastních VR softwarů. VR Lab je přizpůsoben i pro vlastní školení uživatelů nebo obchodní jednání se zákazníky. </p>`,
    `<p>Mobility Innovation Hub je nový český projekt, který má podpořit mobilitu budoucnosti. Konkrétně pak propojuje státní sektor se soukromým. Jeho cílem je dostat do Česka globální investice, vytvořit prostředí pro inovativní projekty v oblasti mobility a jejich efektivní realizaci. Dále má podpořit konkurenceschopnost české ekonomiky. Mobility Innovation Hub aktuálně shání partnery z komerčního i akademického sektoru. Přípravu a koordinaci projektu ma na starosti národní agentura pro podporu investic a podnikání CzechInvest.</p>`,
    `<p>Český polygon pro testování a certifikaci vozidel s autonomním řízením by měl do roku 2022 stát u západočeského Stříbra. Připravuje ho česká investiční skupina Accolade.  Do České republiky by měl přitáhnout špičku automobilových vývojářů nejen z Evropy. Na polygonu bude možné testovat veškeré dopravní situace, a to i ty evropské. Polygony, na kterých se dnes testuje, umí nasimulovat hlavně přísně geometrická města pravých úhlů typu New York. Takto ověřené systémy jsou pak na pražském Starém městě, v uličkách Lisabonu nebo v centru Říma úplně ztracené. Ale právě takové prostředí budou umět ve Stříbře navodit. Okruh bude vedle městských uliček umět vytvořit i prostředí dálnice, silnic první třídy, okresek nebo jízdy v tunelu.</p>`,
    `<p>Vědeckotechnický park v Plzni je klíčovým rozvojovým projektem iniciovaným a realizovaným městem Plzeň. Je lokalizován v jedné z nejúspěšnějších průmyslových zón v České republice, v  Městském industriálním parku Plzeň Borská pole v blízkosti Západočeské univerzity. Více než 10 tis. m2 kancelářských, poloprovozních a laboratorních ploch tvoří moderní infrastrukturu na podporu výzkumu, vývoje a inovací. Vědeckotechnický park Plzeň těží z velmi výhodné geografické polohy s přímým dálničním spojením s  Prahou a s Německem (Norimberk). Zásadní je také blízkost a možnost spolupráce se Západočeskou univerzitou v Plzni jak z hlediska využití výzkumných kapacit, tak z hlediska dostupnosti kvalifikované pracovní síly.</p>`,
    `<p>Včel dramaticky ubývá, z kvalitního medu se stává nedostatkové zboží. Mezi největší příčiny úmrtnosti včel na světě patří varoáza, infekční nemoc způsobená roztočem Varroa Destructor (kleštík včelí), která včelaře trápí čím dál víc. Tato nemoc se běžně léčí pomocí chemikálií. Účinnost chemické terapie ale není dostatečná, dlouhodobě klesá a zbytky chemikálií se po ošetření včelstva často nacházejí ve vosku a medu. Včelaři se shodují, že nejúčinnější prevencí proti úbytku včelstev je udržování včel v dobré kondici zajištěním optimálních životních podmínek.</p>`,
    `<p>TechTower je unikátní prostor pro inovátory, technologické nadšence, programátory a začínající podnikatele. TechTower poskytuje flexibilní kancelářské a coworkingové prostory, restauraci i kavárnu, zázemí pro konference a workshopy, sdílené dílny a experimentální vybavení pro nápady, které mohou změnit svět. Město Plzeň investuje do projektu TechTower s cílem podpořit startupovou komunitu, zviditelnit inovativní firmy a přitáhnout pozornost investorů. TechTower je součástí ambice Plzně být dlouhodobě na špičce technologických inovací a poskytovat budoucím hvězdám byznysu to nejlepší zázemí.</p>`
]



// const photosInside = `<img src="https://via.placeholder.com/170x120.png?text=Mood fotka" alt="" class="first">
// <img src="https://via.placeholder.com/170x120.png?text=Mood fotka" alt="" class="second">
// <img src="https://via.placeholder.com/170x120.png?text=Mood fotka" alt="" class="third">`


const firstBar = document.querySelector('.fillingFirstQuaterBar');
const secondBar = document.querySelector('.fillingSecondQuaterBar');
const thirdBar = document.querySelector('.fillingThirdQuaterBar');
const fourthBar = document.querySelector('.fillingFourthQuaterBar');

const map = document.querySelector('#map img');
const map2 = document.querySelector('.second_img');

const názvy = [
    "Radovánek",
    "Techmania",
    "nvias",
    "Drony SIT",
    "SIT Port Garage",
    "VR Lab",
    "Mobility Innovation HUB",
    "Polygon pro autonomní tramvaj",
    "VTP",
    "HIVE",
    "TechTower"
]

const subNázvy = [
    'Centrum robotiky',
    'SIT Port',
    'BIC Port',
    'BIC'
]

const akce = [
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

const hexCodes = [
    // žlutá
    'fcc200',
    // fialová
    '7b6ce6',
    // modrá
    '00a8f0',
    // zelená
    '2dd687'
]

const imgPaths = [
    // Plzeňáček
    'stuff/imgs/lifecycleFirstQuater.svg',
    // Plzeňák lvl.2
    'stuff/imgs/lifecycleSecondQuater.svg',
    // lvl. 3
    'stuff/imgs/lifecycleThirdQuater.svg',
    // lvl. 4
    'stuff/imgs/lifecycleFourthQuater.svg'

]

var deg = 0;
var path = 0;
var timer = -1;

// Display:none
// Num of elements: 7

for (let i = 0; i<displayNone.length; i++) {
    displayNone[i].style.display = `none`;
}

startButton.addEventListener('click', function(e) {
    for (let i = 0; i<introOpacityTransitions.length; i++) {
        console.log(introOpacityTransitions[i]+" Zmizel")
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
    },2000)
    
});


function scrollUp() {
    path += 0.2;
    deg = -path;
    pineSpiral.style.transform = 'translate(-10vw, -30vw) rotate('+deg+'deg)';
    // pineSpiral.style.transform = 'rotate('+deg+'deg)';
    update();
}

function scrollDown() {
    path -= 0.2;
    deg = -path;
    pineSpiral.style.transform = 'translate(-10vw, -30vw) rotate('+deg+'deg)';
    // pineSpiral.style.transform = 'rotate('+deg+'deg)';
    update();
}

document.addEventListener('mouseout', function(e) {
    if (e.target === buttons[0] || e.target === buttons[1]) {
        console.log("Opustil to");
        timer = clearInterval(timer);
        timer = -1;
    }
    
});

buttons[0].addEventListener('mousedown', function(e) {
    console.log("Stlačil to");
    timer = setInterval(scrollDown, 0.1);
    update()
})

buttons[0].addEventListener('mouseup', function(e) {
    console.log("Pustil to");
    timer = clearInterval(timer);
    timer = -1;
    
})

var counter = 0;

buttons[1].addEventListener('mousedown', function(e) {
    if (counter !== 0) {
        console.log("Stlačil to");
        timer = setInterval(scrollUp, 0.1);
        update()
    }
    counter++;

})

buttons[1].addEventListener('mouseup', function(e) {
    console.log(counter)
    console.log("Pustil to");
    timer = clearInterval(timer);

    if (counter === 1) {
        rightButton.classList.remove('pulse');
        rightButton.classList.remove('fadeIn');

        document.querySelector('.afterIntro p').classList.remove("fadeIn");
        document.querySelector('.afterIntro p').classList.add("fadeOut");

        afterPar.style.display = "none";
        wrapper.style.display = "flex"
        pineSpiral.style.display = "initial"

        headline.style.display = "initial"
        subHead.style.display = "initial"
        description.style.display = "initial"

        progressHeading.style.display = "initial";
        backgroundPeer.style.display = "initial";

        

        setTimeout(function() {
            console.log("Viduna")
        },5000)

    }
    
})

function update() {
    // Progress bary
    if (realPath() > 0 && realPath() < 60) {
        console.log(realPath()/60*100);
        console.log(firstBar.style.width);
        wrapper.display = `block`
        
        firstBar.style.width = `${realPath()/60*100}%`;

        person.src = imgPaths[0]

        backgroundPeer.style.background = `linear-gradient(
            90deg,
            rgba(252, 194, 0, 0.25)  0%,
            rgba(255, 255, 255, 1) 60%
            )`
    }
    if (realPath() > 60 && realPath() < 129) {
        firstBar.style.width = `100%`;
        secondBar.style.width = `${(realPath()-60)/69*100}%`;
        
        person.src = imgPaths[1]
        
        backgroundPeer.style.background = `linear-gradient(
            90deg,
            #7a6ce673 0%,
            rgba(255, 255, 255, 1) 60%
            )`
        }
        if (realPath() > 129 && realPath() < 218) {
            firstBar.style.width = `100%`;
            secondBar.style.width = `100%`;
            thirdBar.style.width = `${(realPath()-60-69)/89*100}%`;
            
            backgroundPeer.style.background = `linear-gradient(
                90deg,
                #00a8f065 0%,
                rgba(255, 255, 255, 1) 60%
                )`
            var styleElem = document.head.appendChild(document.createElement("style"));
            styleElem.innerHTML = ".sub-head::before {background: #00a8f065;}";
            
        }
        if (realPath() > 218 && realPath() < 340) {
            firstBar.style.width = `100%`;
            secondBar.style.width = `100%`;
            thirdBar.style.width = `100%`;
            fourthBar.style.width = `${(realPath()-60-69-89)/122*100}%`;
            
            backgroundPeer.style.background = `linear-gradient(
                90deg,
                #2dd6875e 0%,
                rgba(255, 255, 255, 1) 60%
                )`
            }
            if (realPath() > 340 && realPath() < 360) {
        firstBar.style.width = `100%`;
        secondBar.style.width = `100%`;
        thirdBar.style.width = `100%`;
        fourthBar.style.width = `100%`;
    }
    
    if (realPath() < 24) {
      console.log("realPath < 0");
      i=0;
      j=0;
      k=0;

      firstBar.style.width = `1%`;
      secondBar.style.width = `1%`;
      thirdBar.style.width = `1%`;
      fourthBar.style.width = `1%`;
  }
    // Radovánek
  if (realPath() > 24 && realPath() < 38 ) {
    description.innerHTML = descs[0]
    headline.classList.add('.fadeIn')
    headline.textContent = názvy[0];
    subHead.textContent = subNázvy[0]
}
//   Techmania
if (realPath() > 43 && realPath() < 50 ) {
    description.innerHTML = descs[1]
    headline.textContent = názvy[1];
    subHead.textContent = subNázvy[0]
}
//   nvias
if (realPath() > 60 && realPath() < 71) {
    description.innerHTML = descs[2]
    headline.textContent = názvy[2];
    subHead.textContent = subNázvy[1]
}
//   drony Sit
if (realPath() > 75 && realPath() < 91) {
    description.innerHTML = descs[3]
    headline.textContent = názvy[3];
    person.src = imgPaths[1]
}
//   SIT Garage
if (realPath() > 104 && realPath() < 120) {
    description.innerHTML = descs[4]
    headline.textContent = názvy[4];
    person.src = imgPaths[1]
}
//   VR Lab
if (realPath() > 129 && realPath() < 140) {
    description.innerHTML = descs[5]
    headline.textContent = názvy[5];
    subHead.textContent = subNázvy[2]
    person.src = imgPaths[2]
    
}
//   nvias
if (realPath() > 152 && realPath() < 170) {
    description.innerHTML = descs[6]
    headline.textContent = názvy[6];
    person.src = imgPaths[2]
    headline.style.fontSize = 7+'vh';
}
//   nvias
if (realPath() > 174 && realPath() < 200) {
    headline.style.fontSize = 6+'vh';
    description.innerHTML = descs[7]
    headline.textContent = názvy[7];
    person.src = imgPaths[2]
}
//   nvias
if (realPath() > 218 && realPath() < 240) {
    headline.style.fontSize = 7+'vh';
    description.innerHTML = descs[8]
    headline.textContent = názvy[8];
    subHead.textContent = subNázvy[3]
    person.src = imgPaths[3]
}
//   nvias
if (realPath() > 255 && realPath() < 280) {
    description.innerHTML = descs[9]
    headline.textContent = názvy[9];
    person.src = imgPaths[3]
}
//   nvias
if (realPath() > 290 && realPath() < 350) {
    description.innerHTML = descs[10]
    headline.textContent = názvy[10];
    person.src = imgPaths[3]
  }
 };

function realPath() {
    let i = path/360;
    var j = Math.floor(i);
    i -= j;
    return 360*i;
}
