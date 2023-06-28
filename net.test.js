const { clickElement, putText, getText } = require("./lib/commands.js");
const { generateName } = require("./lib/util.js");

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
    await page.goto("http://qamid.tmweb.ru/client/payment.php");
  });

  test("Ticket Booking", async () => {
    const link = await page.$(
      "body > nav > a.page-nav__day.page-nav__day_chosen > span"
    );
    await link.click();
    await page.waitForSelector("span");
    const twoLink = await page.$(
      "body > main > section:nth-child(2) > a"
    );
    await link.click();
    await page.waitForSelector("a");
    const fourLink = await page.$(
      'body > main > section:nth-child(2) > div:nth-child(2) > ul > li > a'
    );
    await fourLink.click();
    await page.waitForSelector("a");
    const expected = "Унесенные ветром";
  });

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
