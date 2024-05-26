import{test,expect} from "@playwright/test"

// Login into the Demoblaze https://www.demoblaze.com/
test('Login', async ({page})=> {
    //Accessing the page
    await page.goto('https://www.demoblaze.com/');
    //Locating the login field by its PROPERTY 
    await page.locatork('id=login2').click();
    // Filling the login INPUT BOX using CSS and SELECTORSHUB to provide the locator '#loginusername'
    await page.locator('#loginusername').fill('juliano.a.peres@gmail.com');


    
})
