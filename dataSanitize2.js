// for (let i = 0; i < regexes.length; i++) {
//     for (let j = 0; j < sizes.length; j++) {
//         if (regexes[i].test(sizes[j])) {
//         matches.push(sizes[j].match(regexes[i]));
//         }
//     }
// }

// regexes.forEach(regex => regex.test(str) ? matches.push(str.match(regex)) : null);
// console.log(matches);

/menswear only

if (matchingREs.length === 1 && matchingREs.includes(WnumLnum)) {
    cleanStr = matches[0][2];
}


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
