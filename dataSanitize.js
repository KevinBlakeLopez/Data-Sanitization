//electronics
const OneSize = /^\s*(One Size)\s*$/i

//men's accessories
const cmInch = /^\s*(1?\d{2})\s*(cm)\s*\/\s*([2-4]\d)\s*(in|inches)\s*$/i
const numUS = /^\s*(1?\d,?.?5?)\s*\|\s*(XS|S|M|L|[2-6]?XL|XXL)\s*$/i

//men's bags
const cmInchType2 = /^\s*(\d{2,3})\s*(cm)\s*\/\s*(\d{2})\s*(in|inches)\s*$/i
const OneSize1 = /^\s*(One Size)\s*$/i

//men's jackets and coats
const ITUSre = /^\s*(IT)\s*([4-6]?\d)\s*\|\s*(XXS|XS|S|M|L|[2-6]?XL|XXL)\s*$/i;
const USre = /^\s*(XXS|XS|S|M|L|[2-6]?XL|XXL)\s*$/i
const numUSType2 = /^\s*([4-6]?\d)\s*\|\s*(XXS|XS|S|M|L|[2-6]XL|XXL)\s*$/i

//men's pants
const USre2 = /^\s*(XXS|XS|S|M|L|[2-6]*XL|XXL)\s*$/i
const ITUSre2 = /^\s*(IT)\s*([3-6][0-9])\s*\|\s*(XS|S|M|L|[2-6]?XL|XXL)\s*$/i
const WnumLnum = /^\s*(W)\s*([2-4][0-9])\s*\|?\s*(L\d{2})?$/i
const ITUSDEre2 = /^\s*IT\s*([3-6][0-9])\s*-\s*(XS|S|M|L|[2-6]?XL|XXL)\s*-de\s*$/i

//men's shirts
const ITUSre3 = /^\s*(IT)\s*([3-6]\d)\s*\|?-?\s*(XXS|XS|S|M|L|[2-6]*XL|XXL)\s*$/i
const USre3 = /^\s*(XXS|XS|S|M|L|[2-6]*XL|XXL)\s*$/i

//men's shoes
const OneSize2 = /^\s*(One Size)\s*$/i

//men's shorts
const USre4 = /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL|One\s*Size)\s*$/i

//men's suits and blazers
const USre5 = /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*$/i

//men's sweaters
const USre6 = /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*$/i

//men's swim
const USre7 = /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*$/i

//men's underwear & socks
const USre8 = /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL|One\s*Size)\s*$/i

//women's accessories
const numUS2 = /^\s*(\d{1,2}\.?5?)\s*\s*\|\s*(XXS|XS|S|M|L|[2-6]?XL|XXL)\s*$/i
const cmInch2 = /^\s*(\d{2,3})\s*(cm)\s*\/\s*(\d{2})\s*(in|inches)\s*$/i
const cmUS = /^\s*(\d{2,3})\s*(cm)\s*\|\s*(XXS|XS|S|M|L|[2-6]?XL|XXL)\s*$/i
const ITUSre4 = /^\s*(IT)\s*([3-6]\d)\s*\|\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*$/i
const USre9 = /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL|One Size)\s*$/i
const ITUSDEre3 = /^\s*(IT)\s*([3-6]\d)\s*-?\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*-?\s*(de)\s*$/i

//women's bags
//"One Size" - 
const USre10 = /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL|One Size)\s*$/i

//women's dresses
//"US size"
const USre11 = /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL|One Size)\s*$/i
//"XL | 46"
const USnum = /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL|One Size)\s*\|\s*([3-5]\d)\s*$/i
// it52-xl-de
const ITUSDEre4 = /^\s*(IT)\s*([3-6]\d)\s*-?\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*-?\s*(de)\s*$/i
//US size
const USre12 = /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*$/i

//women's jackets and coats
//US size
const USre13 = /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL|One Size)\s*$/i
//it40-s-de
const ITUSDEre5 = /^\s*(IT)\s*([3-6]\d)\s*-?\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*-?(de)\s*$/i

//women's jewelry
//US size
const USre14 = /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL|One\s*Size)\s*$/i

//women's pants and jumpsuits
// 42 | S
const numUS1 = /^\s*([3-6]\d)\s*\|\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*$/i
const ITUSre5 = /^\s*(IT)\s*([3-6]\d)\s*\|\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*$/i
const ITre = /^\s*(IT)\s*([3-6]\d)\s*$/i
const USre15 = /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*$/i
const Wnum = /^\s*(W)\s*([2-4]\d)\s*$/i
const WnumITnum = /^\s*(W)\s*([2-4]\d)\s*\|\s*(IT)\s*([3-6]\d)\s*$/i
const USnum1 = /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*\|\s*([3-6]\d)\s*$/i

//women's shoes
const num = /^\s*([2-4]\d)\s*$/i
const EUUSre1 = /^\s*(EU)\s*([2-4]\d\.?5?)\s*\/\s*(US)\s*(1?\d\.?5?)\s*$/i
const OneSize3 = /^\s*(One Size)\s*$/i

//women's shorts
const ITUSre6 = /^\s*(IT)\s*([3-6]?\d)\s*\|\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*$/i
const Wnum1 = /^\s*(W)\s*([2-]?\d)\s*$/i
const USre16 = /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*$/i
const ITUSDEre6 = /^\s*(IT)\s*([3-6]?\d)\s*-?\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*-?(de)\s*$/i

//women's skirts
const ITUSre7 = /^\s*(IT)\s*([3-6]\d)\s*\|\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*$/i
const USre17 = /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL|One Size)\s*$/i
const ITUSDEre7 = /^\s*(IT)\s*([3-6]?\d)\s*-?\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*-?(de)\s*$/i

//women's sweaters
const ITUSre8 = /^\s*(IT)\s*([3-6]\d)\s*\|\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL)\s*$/i
const ITre1 = /^\s*(IT)\s*([3-6]\d)\s*$/i
const USre18 = /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL|One Size)\s*$/i
const USnum2 = /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL|One Size)\s*\|\s*([3-5]\d)\s*$/i

//women's swim
const ITUSre9 = /^\s*(IT)\s*([3-5]?\d)\s*\|\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL|One Size)\s*$/i

//women's tops
const ITUSre10 = /^\s*(IT)\s*([3-5]?\d)\s*\|\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL|One\s*Size)\s*$/i
const ITre2 = /^\s*(IT)\s*([3-5]\d)\s*$/i
const USre19 = /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL|One Size)\s*$/i
const USnum3 = /^\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL|One Size)\s*\|\s*([3-5]\d)\s*$/i
const ITUSDEre8 = /^\s*(IT)\s*([3-5]?\d)\s*-\s*(XXS|XS|S|M|M-L|L|[2-6]?XL|XXL|One\s*Size)\s*-(de)-$/i

const regexPatterns = {
    menswear: {
        accessories: [cmInch, numUS],
        bags: [cmInchType2, OneSize1],
        jackets_and_coats: [ITUSre, USre, numUSType2],
        pants: [USre2, ITUSre2, WnumLnum, ITUSDEre2],
        shirts: [ITUSre3, USre3],
        shoes: [OneSize2],
        shorts: [USre4],
        suits_and_blazers: [USre5],
        sweaters: [USre6],
        swim: [USre7],
        underwear_and_swim: [USre8]
    },
    womenswear: {
        accessories: [numUS2, cmInch2, cmUS, ITUSre4, USre9, ITUSDEre3],
        bags: [USre10],
        dresses: [USre11, USnum, ITUSDEre4, USre12],
        jackets_and_coats: [USre13, ITUSDEre5],
        jewelry: [USre14],
        pants_and_jumpsuits: [numUS1, ITUSre5, ITre, USre15, Wnum, WnumITnum, USnum1],
        shoes: [num, EUUSre1, OneSize3],
        shorts: [ITUSre6, Wnum1, USre16, ITUSDEre6],
        skirts: [ITUSre7, USre17, ITUSDEre7],
        sweaters: [ITUSre8, ITre1, USre18, USnum2],
        swim: [ITUSre9],
        tops: [ITUSre10, ITre2, USre19, USnum3, ITUSDEre8]
    },
    electronics: {
        OneSize: [OneSize]
    }
}

// for many articles of clothing
const regexMasterList = [OneSize, cmInch, numUS, cmInchType2, ITUSre, USre, numUSType2, WnumLnum, cmUS, USnum, ITre, Wnum, WnumITnum, num];

// let test = regexes.forEach(regex => regex.test(str) ? regexes.indexOf(regex) : null);
// console.log(test);

//
const sizes = [{gender: "menswear", category: "pants", size: "W25 | L34"}, "10 | XL", "100 cm / 40 Inches", "36", "42 | S", "56 cm|XS", "EU34.5/US4.5", "IT36 | S", "IT36", "L", "One Size", "W 24", "W25 | IT39", "it36-xs-de"];
//test string
const str = "W25 | L34";
const product = {gender: "menswear", category: "pants", size: "W25 | L34"};

// for (let i = 0; i < regexes.length; i++) {
//     for (let j = 0; j < sizes.length; j++) {
//         if (regexes[i].test(sizes[j])) {
//         matches.push(sizes[j].match(regexes[i]));
//         }
//     }
// }

// console.log(matches);
// console.log(str.match(W_pantsre));

const matches = [];
// regexes.forEach(regex => regex.test(str) ? matches.push(str.match(regex)) : null);

// console.log(matches);

let regexes;
function findRegexes(product) {
    if (product.gender === "menswear") {
        switch (product.category){
            case "pants":
                regexes = regexPatterns.menswear.pants
        }
    }
    
}

findRegexes(product);
regexes.forEach(regex => regex.test(product.size) ? matches.push(product.size.match(regex)) : null);
console.log(matches)

const matchingREs = regexes.filter(regex => regex.test(str));
console.log(matchingREs);

//menswear only

let cleanStr = "";

//accessories
if (matchingREs.length === 1 && matchingREs.includes(cmInch)) {
    cleanStr = matches[0][3];
}
//all other accessories don't work.

//jacket and coats  needs to be in SMLXLXXL
if (matchingREs.includes(USre)) {
    cleanStr = matches[0][1];
}
if (matchingREs.includes(numUSType2)) {
    cleanStr = matches[0][2];
}
if (matchingREs.includes(ITUSre)) {
    cleanStr = matches[0][3];
}

//

//////

if (matchingREs.length === 1 && matchingREs.includes(WnumLnum)) {
    cleanStr = matches[0][2];
}


if (matchingREs.includes(numShirt)) {
    cleanStr = matches[0][1];
}
if (matchingREs.includes(menShoesRE)) {
    cleanStr = matches[0][1];
}

if (matchingREs.includes(USre)) {
    cleanStr = matches[0][1];
}

console.log(cleanStr);
