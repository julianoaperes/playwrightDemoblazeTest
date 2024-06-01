import{test,expect} from "@playwright/test"

// Login into the Demoblaze https://www.demoblaze.com/
test('Login', async ({page})=> {
       //Accessing the page
    await page.goto('https://www.demoblaze.com/');
       //Locating the login BUTTON field by its PROPERTY and click on it
    await page.locator('id=login2').click();
       // Filling the login INPUT BOX using CSS and SELECTORSHUB to provide the locator '#loginusername'
    await page.locator('#loginusername').fill("juliano.a.peres@gmail.com");
       // Providing the password by CSS and SELECTORHUB 
    await page.locator("input[id='loginpassword']").fill("Ju@1986_");
       // Clicking on the "login" button using CSS
    await page.locator("//button[normalize-space()='Log in']").click(); 
       // Verify logout link 
   // const logoutlink = await page.locator("//a[normalize-space()=Log out']").click();

     //await expect(logoutlink).toBeVisible();






    
})
