var models = [
    {
        name: "Budapest/Hungary", // Budaştepe/Macaristan
        url: "https://www.youtube.com/embed/B_Hfmp-z7AE?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/D0-IAD9kNKk",
        flag: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1169908.41636303!2d18.169692006656312!3d47.07335764104836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741c334d1d4cfc9%3A0x400c4290c1e1160!2sBudape%C5%9Fte%2C%20Macaristan!5e0!3m2!1str!2str!4v1617618691355!5m2!1str!2str"
    },
    {
        name: "Mexico City/Mexico", // Meksika/Meksika
        url: "https://www.youtube.com/embed/W-zf6fgo4A8?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/8nuw287xTcY",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/125px-Flag_of_Mexico.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15007902.862829406!2d-111.63906434829171!3d23.31435153858137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84043a3b88685353%3A0xed64b4be6b099811!2sMeksika!5e0!3m2!1str!2str!4v1617620317857!5m2!1str!2str" 
    },
    {
        name: "Skopje/Macedonia", // Üsküp/Makedonya
        url: "https://www.youtube.com/embed/5Z9tHSyqVW4?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/9vShtp1KadQ",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_North_Macedonia.svg/125px-Flag_of_North_Macedonia.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15007902.862829406!2d-111.63906434829171!3d23.31435153858137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84043a3b88685353%3A0xed64b4be6b099811!2sMeksika!5e0!3m2!1str!2str!4v1617620317857!5m2!1str!2str"
    },
    {
        name: "Cairo/Egypt", // Kahire/Mısır
        url: "https://www.youtube.com/embed/Sr1Yb0xiRbA?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/GI6dOS5ncFc",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/800px-Flag_of_Egypt.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.33564057917!2d31.223444935197637!3d30.059558098303366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2zS2FoaXJlLCBNxLFzxLFy!5e0!3m2!1str!2str!4v1617622996434!5m2!1str!2str" 
    },
    {
        name: "Kathmandu/Nepali", // Katmandu/Nepal
        url: "https://www.youtube.com/embed/EgeqKqwebZI?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/JCdhsttnvcA",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/60px-Flag_of_Nepal.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.27689225424!2d85.29111337616108!3d27.709031933186687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKatmandu%2044600%2C%20Nepal!5e0!3m2!1str!2str!4v1617623933475!5m2!1str!2str" 
    },
    {
        name: "Abuja/Nigeria", // Abuja/Nijerya
        url: "https://www.youtube.com/embed/D_gKkrS42lU?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/0O7_-_iA1cc",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/125px-Flag_of_Nigeria.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126083.25122683121!2d7.324316727176904!3d9.054496624537117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Nijerya!5e0!3m2!1str!2str!4v1617624167127!5m2!1str!2str"
    },
    {
        name: "Oslo/Norway", // Oslo/Norveç
        url: "https://www.youtube.com/embed/CxwJrzEdw1U?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/DH3vi7Av5Vs",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/125px-Flag_of_Norway.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d128083.26573308172!2d10.64503593265034!3d59.89395286063323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e61f267f039%3A0x7e92605fd3231e9a!2zT3NsbywgTm9ydmXDpw!5e0!3m2!1str!2str!4v1617624664897!5m2!1str!2str"
    },
    {
        name: "Tashkent/Uzbekistan", // Taşkent/Özbekistan
        url: "https://www.youtube.com/embed/vxjOsSoERfo?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/NMp1Uxu6QQM",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/125px-Flag_of_Uzbekistan.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95942.46804113487!2d69.20932710288486!3d41.28270522594135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2zVGHFn2tlbnQsIMOWemJla2lzdGFu!5e0!3m2!1str!2str!4v1617625553698!5m2!1str!2str"
    },
    {
        name: "Islamabad/Pakistan", // İslamabad/Pakistan
        url: "https://www.youtube.com/embed/7_WuTK9fH9Y?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/ZR0NVT5YL0g?start=12",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/125px-Flag_of_Pakistan.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212644.8169176803!2d72.94602464919134!3d33.61632322093019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2zxLBzbGFtYWJhdCwgSXNsYW1hYmFkLCDEsHNsYW1hYmFkIEJhxZ9rZW50IELDtmxnZXNpLCBQYWtpc3Rhbg!5e0!3m2!1str!2str!4v1617625995551!5m2!1str!2str" 
    },
    {
        name: "Warsaw/Poland", // Varşova/Polonya
        url: "https://www.youtube.com/embed/B0natYYDaso?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/X2ufwj4FhrU?start=8",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/125px-Flag_of_Poland.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156388.3543850038!2d20.92111258629628!3d52.233065320889196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sVar%C5%9Fova%2C%20Polonya!5e0!3m2!1str!2str!4v1617626601187!5m2!1str!2str" 
    },
    {
        name: "Warsaw/Portuguese", // Lisbon/Portekiz
        url: "https://www.youtube.com/embed/O1dgtYkfQZU?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/qs75nhUmkPA",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/125px-Flag_of_Portugal.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99579.84795959883!2d-9.230243763494911!3d38.743739596270565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331a61e4f33b%3A0x400ebbde49036d0!2sLizbon%2C%20Portekiz!5e0!3m2!1str!2str!4v1617633062184!5m2!1str!2str"
    },
    {
        name: "Bucharest/Romania", // Bükreş/Romanya
        url: "https://www.youtube.com/embed/KVOpXFFsfKw?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/uiy4CdxqAb0",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/125px-Flag_of_Romania.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91160.56672528596!2d26.02459802814397!3d44.43792692047133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f93abf3cad4f%3A0xac0632e37c9ca628!2zQsO8a3JlxZ8sIFJvbWFueWE!5e0!3m2!1str!2str!4v1617634100329!5m2!1str!2str"
    },
    {
        name: "Moscow/Russia", // Moskova/Rusya
        url: "https://www.youtube.com/embed/lyh2kAjcmSY?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/ILxuNIx8w14",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/125px-Flag_of_Russia.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577325.3463670198!2d36.82514088019102!3d55.5815244828845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2sMoskova%2C%20Rusya!5e0!3m2!1str!2str!4v1617639548862!5m2!1str!2str"
    },
    {
        name: "Singapore/Singapore", // Signapur/Signapur
        url: "https://www.youtube.com/embed/Psr4HZmWHnQ?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/y62cznynwDI",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/125px-Flag_of_Singapore.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19036281522!2d103.70416557452107!3d1.3143393776514143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11238a8b9375%3A0x887869cf52abf5c4!2sSingapur!5e0!3m2!1str!2str!4v1617639934914!5m2!1str!2str"
    },
    {
        name: "Riyadh/Saudi Arabia", // Riyad/Suudi Arabistan
        url: "https://www.youtube.com/embed/G5KCKKia61o?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/kpJIt4_DW6U",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/125px-Flag_of_Saudi_Arabia.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463876.93971471715!2d46.542344118761015!3d24.725555344345064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyad%2011564%2C%20Suudi%20Arabistan!5e0!3m2!1str!2str!4v1617640212181!5m2!1str!2str"
    },
    {
        name: "Santiago/Chile", // Santiago/Şili
        url: "https://www.youtube.com/embed/yZc9vCXLPAo?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/3g22qRZpNt0",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/125px-Flag_of_Chile.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212999.1973474117!2d-70.76991373599695!3d-33.47242276949835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5410425af2f%3A0x8475d53c400f0931!2sSantiago%2C%20Santiago%20Metropolitan%20b%C3%B6lgesi%2C%20%C5%9Eili!5e0!3m2!1str!2str!4v1617640695003!5m2!1str!2str"
    },
    {
        name: "Bangkok/Thailand", // Bangkok/Tayland
        url: "https://www.youtube.com/embed/KpYbH8NSXYY?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/QtnHheKchbQ",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/125px-Flag_of_Thailand.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248057.18773170395!2d100.49302641228302!3d13.72489362049206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6032280d61f3%3A0x10100b25de24820!2sBangkok%2C%20Tayland!5e0!3m2!1str!2str!4v1617641184998!5m2!1str!2str" 
    },
    {
        name: "Kiev/Ukraine", // Kiev/Ukrayna
        url: "https://www.youtube.com/embed/G8-oblRKVFk?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/sd6IlinYcEk",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/125px-Flag_of_Ukraine.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162757.72582758652!2d30.39260882459542!3d50.40217023835587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2sKiev%2C%20Ukrayna%2C%2002000!5e0!3m2!1str!2str!4v1617641422157!5m2!1str!2str" 
    },
    {
        name: "Hanoi/Vietnam", // Hanoi/Vietnam
        url: "https://www.youtube.com/embed/wKyI2Mxna6w?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/lhS0B-8j02g",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/125px-Flag_of_Vietnam.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7864040.491066362!2d101.4154119805539!3d15.758357529189878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31157a4d736a1e5f%3A0xb03bb0c9e2fe62be!2sVietnam!5e0!3m2!1str!2str!4v1617641807704!5m2!1str!2str" 
    },
    {
        name: "Athens/Greece", // Atina/Yunanistan
        url: "https://www.youtube.com/embed/KNQq21nrOQE?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/WEsJ0un-AME",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/125px-Flag_of_Greece.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50310.55761009113!2d23.703319971790553!3d37.99089965315185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd1f067043f1%3A0x2736354576668ddd!2sAtina%2C%20Yunanistan!5e0!3m2!1str!2str!4v1617643056489!5m2!1str!2str" 
    }
];

