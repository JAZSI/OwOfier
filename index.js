/**
 * @param {string} text The text to owoify
 */
function owo(text) {
    if(text instanceof String) {
        return "Error: input is not a string";
    }

    const uwus = [
        "(ﾉ´ з `)ノ",
        "( ´ ▽ ` ).｡ｏ♡",
        "(´,,•ω•,,)♡",
        "(*≧▽≦)",
        "ɾ⚈▿⚈ɹ",
        "( ﾟ∀ ﾟ)",
        "( •́ .̫ •̀ )",
        "(▰˘v˘▰)",
        "(・ω・)",
        "(ᗒᗨᗕ)",
        "(・`ω´・)",
        ":3",
        ">:3",
        "hehe",
        "xox",
        ">3<",
        "murr~",
        "UwU",
        "*gwomps*"
    ];

    const uwu = uwus[Math.floor(Math.random() * uwus.length)];

    text = text.replace(/love/g, "wuv");
    text = text.replace(/Love/g, "Wuv");

    text = text.replace(/mr/g, "mistuh");
    text = text.replace(/Mr/g, "Mistuh");

    text = text.replace(/dog/g, "doggo");
    text = text.replace(/Dog/g, "Doggo");

    text = text.replace(/cat/g, "katto");
    text = text.replace(/Cat/g, "Katto");
    
    text = text.replace(/fuck/g, "fwick");
    text = text.replace(/Fuck/g, "Fwick");
    text = text.replace(/fuk/g, "fwick");
    text = text.replace(/Fuk/g, "Fwick");

    text = text.replace(/shit/g, "shoot");
    text = text.replace(/Shit/g, "Shoot");

    text = text.replace(/stop/g, "shtap");
    text = text.replace(/Stop/g, "Shtap");

    text = text.replace(/the\b/g, "da");
    text = text.replace(/The\b/g, "Da");

    text = text.replace(/this\b/g, "dis");
    text = text.replace(/This\b/g, "Dis");

    text = text.replace(/with\b/g, "wif");
    text = text.replace(/With\b/g, "Wif");

    text = text.replace(/your\b/g, "ur");
    text = text.replace(/Your\b/g, "Ur");

    text = text.replace(/you\b/g, "u");
    text = text.replace(/You\b/g, "U");
      
    text = text.replace(/l/g, "w");
    text = text.replace(/L/g, "W");
    text = text.replace(/r/g, "w");
    text = text.replace(/R/g, "W");

    text = text.replace(/m+[aeiou]/g, "mw");
    text = text.replace(/M+[aeiou]/g, "Mw");
    text = text.replace(/M+[AEIOU]/g, "MW");

    text = text.replace(/n([aeiou])/g, "ny");
    text = text.replace(/N([aeiou])/g, "Ny");
    text = text.replace(/N([AEIOU])/g, "NY");

    text = text.replace(/,/g, "~");
    text = text.replace(/:\)/g, ":3");
    text = text.replace(/:O/g, "OwO");
    text = text.replace(/:o/g, "owo");
    text = text.replace(/:D/g, "UwU");
    text = text.replace(/XD/g, "X3");
    text = text.replace(/xD/g, "x3");
    
    return `${text} ${uwu}`;
};

module.exports = owo;
