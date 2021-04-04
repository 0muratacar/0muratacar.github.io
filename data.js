var models = [
    {
        name: "Istanbul",
        url: `https://www.youtube.com/embed/hljZphKH7e0?start=` + Math.floor(Math.random() * 100),
        radio: `https://www.youtube.com/embed/QjjxeaQBtRo`,
        flag: "https://img-uzayspor.mncdn.com/500/turkbayragi.jpg",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385398.5897809314!2d28.731994487814784!3d41.00498228699284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1617285522199!5m2!1str!2str"
    },
    {
        name: "New York",
        url: "https://www.youtube.com/embed/tGx-EMuruq8?start=" + Math.floor(Math.random() * 100),
        radio: `https://www.youtube.com/embed/qq2oWbldWbA`,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
        , map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059445135!2d-74.25986613799748!3d40.69714941774136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1617285571137!5m2!1str!2str"
    },
    {
        name: "Tokyo",
        url: "https://www.youtube.com/embed/0nTO4zSEpOs?start=" + Math.floor(Math.random() * 100),
        radio: `https://www.youtube.com/embed/lHLChGEwdwQ`,
        flag: "http://www.onlinetercumanlik.com/bayrak/japonya_bayragi/japonya_buyuk.gif",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1662980.6524248242!2d138.64862155777902!3d35.50405354021067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2sTokyo%2C%20Japonya!5e0!3m2!1str!2str!4v1617285605610!5m2!1str!2str"


    },
    {
        name: "Athens",
        url: "https://www.youtube.com/embed/fTCIVX1Mi6Y?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/befZad39grg",
        flag: "https://www.bayraklar.info/data/flags/big/gr.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50310.60400157867!2d23.703319876009438!3d37.990832008341805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd1f067043f1%3A0x2736354576668ddd!2sAtina%2C%20Yunanistan!5e0!3m2!1str!2str!4v1617285630645!5m2!1str!2str"
    },
    {
        name: "Berlin",
        url: "https://www.youtube.com/embed/CTxS_DNSyqg?start=" + Math.floor(Math.random() * 100),
        radio: `https://www.youtube.com/embed/gzWKPP3ftF0`,
        flag: "https://ulkelerbayraklar.com/wp-content/uploads/2017/12/almanya_bayrag%CC%86%C4%B1-800x445.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310846.42014112294!2d13.144554017505376!3d52.50651327145429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin%2C%20Almanya!5e0!3m2!1str!2str!4v1617285659884!5m2!1str!2str"

    },
    {
        name: "Los Angeles",
        url: "https://www.youtube.com/embed/YZuqKkAS4b8?start=" + Math.floor(Math.random() * 100),
        radio: `https://www.youtube.com/embed/gnyW6uaUgk4`,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.2740658098!2d-118.69192119136834!3d34.020161304907774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20Kaliforniya%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1617285107322!5m2!1str!2str"
    },
    {
        name: "Antarctica",
        url: "https://www.youtube.com/embed/F8rzb4nQs5I?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/tb0B3auGbtA",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/True_South_Antarctic_Flag.svg/1200px-True_South_Antarctic_Flag.svg.png"
        , map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17804202.617377397!2d0!3d-74.19502160516944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa4b9967b3390754b%3A0x6e52be1f740f2075!2sAntarktika!5e0!3m2!1str!2str!4v1617285700001!5m2!1str!2str"
    },
    {
        name: "Paris",
        url: "https://www.youtube.com/embed/Y5TNhAMEm5g?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/nFK0pxzADP8",
        flag: "https://www.dhresource.com/0x0s/f2-albu-g4-M00-7B-63-rBVaEVnLHO2Ad4RBAAD9MQ7eKrY805.jpg/90x150cm-fransa-bayra-canl-renk-ve-uv-solmaya.jpg"
        , map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.9472264891!2d2.2770202225119434!3d48.85883773935407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20Fransa!5e0!3m2!1str!2str!4v1617285744298!5m2!1str!2str"
    },
    {
        name: "Vienna",
        url: "https://www.youtube.com/embed/rJ2IY6rp-G8?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/WEsJ0un-AME",
        flag: "https://ulkelerbayraklar.com/wp-content/uploads/2017/12/avusturya-bayrag%CC%86%C4%B1.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170129.53089218406!2d16.23997687377501!3d48.2205998177616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d079e5136ca9f%3A0xfdc2e58a51a25b46!2sViyana%2C%20Avusturya!5e0!3m2!1str!2str!4v1617285781207!5m2!1str!2str"
    },


    {
        name: "Buenos Aires",
        url: "https://www.youtube.com/embed/0lrcjmhcYRw?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/36YnV9STBqc",
        flag: "https://www.bayraklar.info/data/flags/ultra/ar.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.26483379626!2d-58.503338603933564!3d-34.61580373602787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20Arjantin!5e0!3m2!1str!2str!4v1617285815548!5m2!1str!2str"
    },

    {
        name: "Baku",
        url: "https://www.youtube.com/embed/Qdq__PK5B0w?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/eOAhq8pddEs",
        flag: "https://aztc.gov.az/uploads/flag.jpg"
        , map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194473.42999466046!2d49.71487539548641!3d40.39450797992698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2sBak%C3%BC%2C%20Azerbaycan!5e0!3m2!1str!2str!4v1617285840188!5m2!1str!2str"
    },
    {
        name: "Switzerland",
        url: "https://www.youtube.com/embed/kVxTrhojpFI?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/IvuwTft-0cM",
        flag:"https://besthqwallpapers.com/Uploads/30-5-2019/94712/thumb2-4k-swiss-flag-european-countries-3d-waves-flag-of-switzerland.jpg"
        , map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1398183.4084449343!2d7.103154603217783!3d46.807714224365775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c64ef6f596d61%3A0x5c56b5110fcb7b15!2zxLBzdmnDp3Jl!5e0!3m2!1str!2str!4v1617285884523!5m2!1str!2str"
    },

    {
        name: "Nassau",
        url: "https://www.youtube.com/embed/_0kW5FJaOkw?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/HsHetqB6f14",
        flag: "http://www.onlinetercumanlik.com/bayrak/bahamalar_bayragi/bahamalar_buyuk.gif",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115681.442584522!2d-77.4771334448459!3d25.03254413721698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x892f7c99b981dbc9%3A0x2aef01d3485e50d2!2sNassau%2C%20Bahamalar!5e0!3m2!1str!2str!4v1617285915928!5m2!1str!2str"

    },

    {
        name: "Sarajevo",
        url: "https://www.youtube.com/embed/ZjSecFsLUaM?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/GQK1pi9GOsU",
        flag: "https://www.bayraklar.info/data/flags/ultra/ba.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92005.5076554819!2d18.312951641838083!3d43.8937019113143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758cbb1ed719bd1%3A0x562ecda6de87b33e!2sSaraybosna%2C%20Bosna%20Hersek!5e0!3m2!1str!2str!4v1617286002516!5m2!1str!2str"
    },
    {
        name: "Vatican",
        url: "https://www.youtube.com/embed/ihBQqXzfc4s?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/_S802cHbRyk",
        flag: "https://i.pinimg.com/originals/12/3b/db/123bdb3f660c9d836ba20dfcb14f548c.png"
        , map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5938.980723522062!2d12.447683826723594!3d41.903816266880426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1325890a57d42d3d%3A0x94f9ab23a7eb0!2s00120%20Vatikan!5e0!3m2!1str!2str!4v1617286023535!5m2!1str!2str"
    },

    {
        name: "Brazil",
        url: "https://www.youtube.com/embed/uhcocK-td5E?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/ful0qGqtSgQ",
        flag: "https://w3t8w3k2.stackpathcdn.com/wp-content/uploads/2018/06/brezilya-bayragi.jpg"
        , map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31754347.84251272!2d-69.69033405940056!3d-13.702504800393095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c59c7ebcc28cf%3A0x295a1506f2293e63!2sBrezilya!5e0!3m2!1str!2str!4v1617286049866!5m2!1str!2str"
    },
    {
        name: "Cape Verde",
        url: "https://www.youtube.com/embed/DWsX7Wjd_es?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/wXV39pybgJU",
        flag: "https://www.bayraklar.info/data/flags/big/cv.png"
        , map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1963454.106583035!2d-25.11000012973367!3d16.02021370036511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9358f2159115131%3A0x6b1af236f918ea1f!2sCape%20Verde!5e0!3m2!1str!2str!4v1617286084265!5m2!1str!2str"
    },
    {
        name: "Delhi",
        url: "https://www.youtube.com/embed/J9mpXixJptg?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/ajR6OSLMq6U",
        flag: "https://www.bayraklar.info/data/flags/ultra/in.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223994.25250202004!2d76.95126436699663!3d28.692332876622267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d047309fff32f%3A0xfc5606ed1b5d46c3!2sDelhi%2C%20Hindistan!5e0!3m2!1str!2str!4v1617286110933!5m2!1str!2str"
    },
    {
        name: "Dubai",
        url: "https://www.youtube.com/embed/JXe-1dIlCw4?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/J8z-lelMDjc",
        flag: "https://www.bayraklar.info/data/flags/ultra/ae.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462565.1975869988!2d54.94755420335059!3d25.075085309151454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20Dubai%20Emirli%C4%9Fi%20-%20Birle%C5%9Fik%20Arap%20Emirlikleri!5e0!3m2!1str!2str!4v1617286144614!5m2!1str!2str"
    },

    {
        name: "Sofia",
        url: "https://www.youtube.com/embed/ez1KCblQ6iM?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/qq2oWbldWbA",
        flag: "https://www.bayraklar.info/data/flags/ultra/bg.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187673.3086944028!2d23.183862811427588!3d42.69534680317215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8682cb317bf5%3A0x400a01269bf5e60!2sSofya%2C%20Bulgaristan!5e0!3m2!1str!2str!4v1617286172811!5m2!1str!2str"
    },

    {
        name: "Ottawa",
        url: "https://www.youtube.com/embed/DOxooCnQ7P0?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/azl07uA79pA",
        flag: "https://www.turkrehber.ca/assets/images/blogs/covers/kanada-bayragi.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d359539.2054179669!2d-76.08043933821044!3d45.249814031216594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b25f5113af%3A0x8a6a51e131dd15ed!2sOttava%2C%20Ontario%2C%20Kanada!5e0!3m2!1str!2str!4v1617286207822!5m2!1str!2str"
    },
    {
        name: "Ankara",
        url: "https://www.youtube.com/embed/DulbJU8jEII?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/Ra8dgbsSbVc",
        flag: "https://img-uzayspor.mncdn.com/500/turkbayragi.jpg",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195884.96090361063!2d32.6226804798303!3d39.90329227726917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0xbdc57b0c0842b8d!2sAnkara!5e0!3m2!1str!2str!4v1617286232705!5m2!1str!2str"

    },

    {
        name: "Shanghai",
        url: "https://www.youtube.com/embed/Ff29nDLBzaA?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/rGPXugD0ekU",
        flag: "https://images.freeimages.com/images/large-previews/200/china-flag-1444024.jpg",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d873449.7820334237!2d120.91629453314131!3d31.22313379317916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b27040b1f53c33%3A0x295129423c364a1!2zxZ5hbmdoYXksIMOHaW4!5e0!3m2!1str!2str!4v1617286257346!5m2!1str!2str"
    },
    {
        name: "San Francisco",
        url: "https://www.youtube.com/embed/pQP8lmjGnp4?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/YSBO7Zl8mU4",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
        , map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.17073734755!2d-122.50764006026725!3d37.75767927558743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20Kaliforniya%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1617286289781!5m2!1str!2str"
    },
    {
        name: "London",
        url: "https://www.youtube.com/embed/bsmVP0kcKnI?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/3ZswT0i7KsI",
        flag: "https://3.bp.blogspot.com/-Db_y67QpHwM/V4QapAPWtJI/AAAAAAAAAOM/an_uhqWk1sYiAkgo4Bze4sdNo0lO3NWFgCLcB/s1600/Union_flag_1606_%2528Kings_Colors%2529.svg.png"
        , map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47340002653!2d-0.24168120642536509!3d51.52855824164916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2zTG9uZHJhLCBCaXJsZcWfaWsgS3JhbGzEsWs!5e0!3m2!1str!2str!4v1617286316528!5m2!1str!2str"
    },
    {
        name: "Norway",
        url: "https://www.youtube.com/embed/SMKPKGW083c?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/DH3vi7Av5Vs",
        flag: "https://www.bayraklar.info/data/flags/w580/no.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14595502.94462157!2d0.10902761883654306!3d63.47706100735687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x461268458f4de5bf%3A0xa1b03b9db864d02b!2zTm9ydmXDpw!5e0!3m2!1str!2str!4v1617286345884!5m2!1str!2str"
    },
    {
        name: "Izmir",
        url: "https://www.youtube.com/embed/dqwNC1DQIq8?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/FxIYcHf3Jmo",
        flag: "https://img-uzayspor.mncdn.com/500/turkbayragi.jpg",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200066.14127024243!2d26.939632585195547!3d38.4175916758296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd862a762cacd%3A0x628cbba1a59ce8fe!2zxLB6bWly!5e0!3m2!1str!2str!4v1617286375785!5m2!1str!2str"
    },
    {
        name: "Tehran",
        url: "https://www.youtube.com/embed/VhB925QAlJk?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/IXrK-zGBsRg",
        flag: "https://www.bayraklar.info/data/flags/ultra/ir.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207372.70304423055!2d51.209733794532!3d35.696732950539506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3dcd9%3A0xf0b3697c567024bc!2zVGFocmFuLCDEsHJhbg!5e0!3m2!1str!2str!4v1617286398496!5m2!1str!2str"
    },
    {
        name: "Lyon",
        url: "https://www.youtube.com/embed/5oDtbniATlc?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/nFK0pxzADP8",
        flag: "https://www.dhresource.com/0x0s/f2-albu-g4-M00-7B-63-rBVaEVnLHO2Ad4RBAAD9MQ7eKrY805.jpg/90x150cm-fransa-bayra-canl-renk-ve-uv-solmaya.jpg"
        , map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89077.16417715291!2d4.765081157966247!3d45.75793410288789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea516ae88797%3A0x408ab2ae4bb21f0!2sLyon%2C%20Fransa!5e0!3m2!1str!2str!4v1617286428440!5m2!1str!2str"
    },
    {
        name: "Venedic",
        url: "https://www.youtube.com/embed/Y5jLAnZte2o?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/TqQaLuW2wjg",
        flag: "https://www.bayraklar.info/data/flags/w580/it.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d358560.61749345454!2d12.107150506964253!3d45.404200752530734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eb1daf1d63d89%3A0x7ba3c6f0bd92102f!2sVenedik%2C%20%C4%B0talya!5e0!3m2!1str!2str!4v1617286449562!5m2!1str!2str"
    },
    {
        name: "Manchester",
        url: "https://www.youtube.com/embed/-1mgjHDYhGY?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/Mq1y-lu_-Zc",
        flag: "https://3.bp.blogspot.com/-Db_y67QpHwM/V4QapAPWtJI/AAAAAAAAAOM/an_uhqWk1sYiAkgo4Bze4sdNo0lO3NWFgCLcB/s1600/Union_flag_1606_%2528Kings_Colors%2529.svg.png"
        , map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75993.25869269183!2d-2.2935023472472884!3d53.47222497479299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4d4c5226f5db%3A0xd9be143804fe6baa!2sManchester%2C%20Birle%C5%9Fik%20Krall%C4%B1k!5e0!3m2!1str!2str!4v1617286485631!5m2!1str!2str"
    },
    {
        name: "World Live",
        url: "https://www.youtube.com/embed/8KGXSjtS5pk?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/2gO1v2GPMFk",
        flag: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Flag-map_of_the_world_%281900%29.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9435910.20005871!2d-16.74945547433575!3d-42.829472761176135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x65a81cae36eb8ff%3A0xa6342257f310534f!2sAtlas%20Okyanusu!5e0!3m2!1str!2str!4v1617286638490!5m2!1str!2str"
    },
    {
        name: "Hong Kong",
        url: "https://www.youtube.com/embed/Sl3KJnVRFtA?start=" + Math.floor(Math.random() * 100),
        radio: "https://www.youtube.com/embed/rGPXugD0ekU",
        flag: "https://images.freeimages.com/images/large-previews/200/china-flag-1444024.jpg",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236161.63669657268!2d113.98761384556074!3d22.35266321504567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403e2eda332980f%3A0xf08ab3badbeac97c!2sHong%20Kong!5e0!3m2!1str!2str!4v1617286665208!5m2!1str!2str"

    }
];

