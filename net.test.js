const { clickElement, putText, getText } = require("./lib/commands.js");
const { generateName } = require("./lib/util.js");
const puppeteer = require('puppeteer');

let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
});

afterEach(() => {
  page.close();
});

describe("Successful booking", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/index.php");
  });
    test ("Movie Selection", async () => {
      await page.click("body > nav > a.page-nav__day.page-nav__day_chosen > span.page-nav__day-week");
       await page.waitForSelector("span");
       await page.click("body > main > section:nth-child(1) > div.movie-seances__hall > ul");
       const expected = "Начало сеанса: 10:00"
      //  await page.click("body > main > section > div.buying-scheme > div.buying-scheme__wrapper")
      //  await page.waitForSelector("div");
      // await page.click("body > main > section > button");
      // await page.waitForSelector("button");
      // const expected = "ВЫ ВЫБРАЛИ БИЛЕТЫ:";
    })












  // test("Movie Selection", async () => {
  //   const link = await page.$(
  //     "body > nav > a.page-nav__day.page-nav__day_chosen > span.page-nav__day-week"
  //   );
  //   await link.click();
  //   await page.waitForSelector("span");
  //   const twoLink = await page.$(
  //     "body > main > section:nth-child(2) > div:nth-child(3) > ul > li"
  //   );
  //   await twoLink.click();
  //   await page.waitForSelector("li");
  //   const expected = "Унесенные ветром, Начало сеанса: 16:00";
  // });
//   test("Failed Order", async () => {
//     const link = await page.$(
//       "body > nav > a.page-nav__day.page-nav__day_chosen > a"
//     );
//     await link.click();
//     await page.waitForSelector("a");
//     const twolink = await page.$(
//       "body > main > section:nth-child(1) > div.movie-seances__hall > ul > li"
//     );
//     await twolink.click();
//     await page.waitForSelector("li");
//     const expected = "Терминатор-заржавел";
  
// });



















  // test("Ticket Booking", async () => {
  //   const link = await page.$(
  //     "body > nav > a.page-nav__day.page-nav__day_chosen"
  //   );
  //   await page.click();
  //   await page.waitForSelector("a");
  //   const twoLink = await page.$( 
  //     "body > main > section:nth-child(1) > div.movie-seances__hall > ul > li > a"
  //   );
  //   await page.click();
  //   await page.waitForSelector("a");

  // });





    // const sixLink = await page.$(
    //   "body > main > section > button"
    // );
    // await fiveLink.click();
    // await page.waitForSelector("button");
    // const sevenLink = await page.$(
    //   "body > main > section > div > button"
    // );
    // await sevenLink.click();
    // await page.waitForSelector("button");
    // const expected = "ЭЛЕКТРОННЫЙ БИЛЕТ";
   







//   test("The first link text 'Медиа Нетологии'", async () => {
//     const actual = await getText(page, "header a + a");
//     expect(actual).toContain("Медиа Нетологии");
//   });

//   test("The first link leads on 'Медиа' page", async () => {
//     await clickElement(page, "header a + a");
//     const actual = await getText(page, ".logo__media");
//     await expect(actual).toContain("Медиа");
//   });
// });

// test("Should look for a course", async () => {
//   await page.goto("https://netology.ru/navigation");
//   await putText(page, "input", "тестировщик");
//   const actual = await page.$eval("a[data-name]", (link) => link.textContent);
//   const expected = "Тестировщик ПО";
//   expect(actual).toContain(expected);
// });

// test("Should show warning if login is not email", async () => {
//   await page.goto("https://netology.ru/?modal=sign_in");
//   await putText(page, 'input[type="email"]', generateName(5));
 });
