import { test, expect } from '@playwright/test';

test.describe('verify the automation',()=> {


    test("create account",async({page})=>{
        await page.goto("https://www.automationexercise.com/login")
        await page.locator("//input[@placeholder='Name']").fill("Raghav12")
        await page.locator("//input[@data-qa='signup-email']").fill("raghav13@gmail.com")
        await page.locator("//button[normalize-space()='Signup']").click()   
        await expect(page.locator("//b[normalize-space()='Enter Account Information']")).toBeVisible()
        await page.locator("//input[@id='id_gender1']").click()
        await page.locator("//input[@id='password']").fill("raghav10")
        await page.locator("//select[@id='days']").selectOption("22")
        await page.locator("//select[@id='months']").selectOption("12")
        await page.locator("//select[@id='years']").selectOption("2003")
        await page.locator("//input[@id='first_name']").fill("raghav")
        await page.locator("//input[@id='last_name']").fill("R")
        await page.locator("//input[@id='address1']").fill("subbiya dever street")
        await page.locator("//select[@id='country']").selectOption("India")
        await page.locator("//input[@id='state']").fill("tamilnadu")
        await page.locator("//input[@id='city']").fill("coimbatore")
        await page.locator("//input[@id='zipcode']").fill("641045")
        await page.locator("//input[@id='mobile_number']").fill("9659166839")
        await page.locator("//button[normalize-space()='Create Account']").click()
    })


    test("verify Headers",async({page})=>{
        await page.goto("https://www.automationexercise.com/login")
        await page.locator("//input[@data-qa='login-email']").fill("raghav11@gmail.com")
        await page.locator("//input[@placeholder='Password']").fill("raghav10")
        await page.locator("//button[normalize-space()='Login']").click()
        const Raghav=["Home","Products","Cart","Logout","Delete Account","Test Cases","API Testing","Video Tutorials","Contact us"," Logged in as Raghav"] 
        for(let i=0;i<Raghav.length;i++){
        await expect(page.locator(`//ul[@class="nav navbar-nav"]//li[${i + 1}]`)).toContainText(Raghav[i])
        }
    })
    test("text Automation",async({page})=>{
        await page.goto("https://www.automationexercise.com/")
        await expect(page.locator("//div[@class='item active']//h1[1]")).toBeVisible()
        await expect(page.locator("//div[@class='item active']//h2[contains(text(),'Full-Fledged practice website for Automation Engin')]")).toBeVisible()
        await expect(page.locator("//div[@class='item active']//p[contains(text(),'All QA engineers can use this website for automati')]")).toBeVisible()
    }) 
    
    
})

