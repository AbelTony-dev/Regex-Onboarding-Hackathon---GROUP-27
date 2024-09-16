const test = `only one i have is test@aaa.com, 
http://test.app, (2344) 3233-03030, 00032-33939-93033-1111, 
14:30, <div>, #example, $190.43.`;

const emailMatches = text.match(emailRegex);
const urlMatches = text.match(urlRegex);
const phoneMatches = text.match(phoneRegex);
const creditCardMatches = text.match(creditCardRegex);
const timeMatches = text.match(timeRegex);
const htmlTagMatches = text.match(htmlTagRegex);
const hashtagMatches = text.match(hashtagRegex);
const currencyMatches = text.match(currencyRegex);

console.log('Emails:', emailMatches);
console.log('URLs:', urlMatches);
console.log('Phones:', phoneMatches);
console.log('Credit Cards:', creditCardMatches);
console.log('Times:', timeMatches);
console.log('HTML Tags:', htmlTagMatches);
console.log('Hashtags:', hashtagMatches);
console.log('Currencies:', currencyMatches);