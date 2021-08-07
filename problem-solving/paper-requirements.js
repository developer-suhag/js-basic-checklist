/* 
pageRequirements

// book1 has 100 pages
// book2 has 200 pages
// book3 has 300 pages
 */


function paperRequirements(book1, book2, book3) {
    const pagesInFirstBook = 100;
    const pagesInSecondBook = 200;
    const pagesInThridBook = 300;

    const totalPageInFirstBook = pagesInFirstBook * book1;
    const totalPageInSecondBook = pagesInSecondBook * book2;
    const totalPageInThirdBook = pagesInThridBook * book3;

    const totalPages = totalPageInFirstBook + totalPageInSecondBook + totalPageInThirdBook;
    return totalPages;
}

const totalPapers = paperRequirements(2, 7, 15);
console.log('Total pages will needed:', totalPapers);

const perPagePrice = 3;
const totalCost = perPagePrice * totalPapers;
console.log('Total Cost will be:', totalCost);