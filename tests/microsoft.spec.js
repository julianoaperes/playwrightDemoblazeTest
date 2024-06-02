import{test,expect} from "@playwright/test"

// Login into the Demoblaze https://www.demoblaze.com/
test('Login', async ({page})=> {
       //Accessing the page
    await page.goto('https://login.microsoftonline.com/');
       //Locating the login BUTTON field by its PROPERTY and click on it
    await page.locator('id=i0116').click();
       // Filling the login INPUT BOX using CSS and SELECTORSHUB to provide the locator '#loginusername'
    await page.locator('#i0116').fill("juliano.peres-ext@ab-inbev.com");

    await page.locator("#idSIButton9").click();
       // Providing the password by CSS and SELECTORHUB 
    await page.locator("//input[@id='i0118']").fill("--");
       // Clicking on the "login" button using CSS
    await page.locator("#idSIButton9").click(); 

    await page.locator("#idSIButton9").click();

    await page.goto('https://tsc-qa.ab-inbev.com/#/mid-year-review/requests');

     await page.hover('div.c-dUEiTH > a > li.c-dUEiTH.c-cCFkOr.c-cCFkOr-dAlmDS-active-true.c-cCFkOr-IaaiB-isTriggerItem-true.c-dUEiTH-ihdDVLc-css');

     await page.waitForSelector('data-radis-focus-guard tabindex=0 style=outline: none; opacity 0; position: fixed; pointer-events: none', {state: 'visible'});
     
     await page.click('data-radis-focus-guard tabindex=0 style=outline: none; opacity 0; position: fixed; pointer-events: none');


});
   
    //await page.locator("button[title='Actions']").click();
   // await page.locator("//span[@class='ant-typography c-cMILyz']").click();
  

