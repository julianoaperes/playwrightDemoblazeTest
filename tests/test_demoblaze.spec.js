import{test,expect} from "@playwright/test"

// Login into the Demoblaze https://www.demoblaze.com/
test('Login', async ({page})=> {

    await page.goto('https://www.demoblaze.com/');
    

})
