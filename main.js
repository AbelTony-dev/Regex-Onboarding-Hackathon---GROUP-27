const htmlTag = /<\/?\w+(\s+\w+="[^"]*")*\s*\/?>/g;
const hashtag = /#\w+/g;
const email = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
const url = /https?:\/\/[^\s/$.?#].[^\s]*/g;
const time = /(?:[01]\d|2[0-3]):[0-5]\d(?:\s[AP]M)?/g;
const creditCard = /(?:\d{4}[-\s]?){3}\d{4}/g;
const currency = /\$\d{1,3}(?:,\d{3})*(?:\.\d{2})?/g;
const phone = /(\(\d{3}\)\s?|\d{3}[-.\s]?)\d{3}[-.\s]?\d{4}/g;

const test = `only one i have is test@aaa.com, 
http://test.app, (2344) 3233-03030, 00032-33939-93033-1111, 
14:30, <div>, #example, $190.43.`;

const emailMatches = text.match(email);
const urlMatches = text.match(url);
const phoneMatches = text.match(phone);
const creditCardMatches = text.match(creditCard);
const timeMatches = text.match(time);
const htmlTagMatches = text.match(htmlTag);
const hashtagMatches = text.match(hashtag);
const currencyMatches = text.match(currency);

console.log('Emails:', emailMatches);
console.log('URLs:', urlMatches);
console.log('Phones:', phoneMatches);
console.log('Credit Cards:', creditCardMatches);
console.log('Times:', timeMatches);
console.log('HTML Tags:', htmlTagMatches);
console.log('Hashtags:', hashtagMatches);
console.log('Currencies:', currencyMatches);