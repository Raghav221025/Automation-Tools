import { test, expect } from '@playwright/test';
import { playwright } from '../src/pages/login';
test.describe('verify the automation',()=>{

    let Testcases;

    test.beforeEach(async({page})=>{
     Testcases=new playwright(page)
    })

    test("Register User",async({page})=>{
        await Testcases.Homepage("https://automationexercise.com/login")
        await Testcases.RegisterUser();
    })

    test("Login User with correct",async({page})=>{
        await page.goto("https://automationexercise.com/login")
        await expect(page.locator("//a[normalize-space()='Home']")).toBeVisible()
        await page.locator("//a[normalize-space()='Signup / Login']").click()
        await expect(page.locator("//h2[normalize-space()='Login to your account']")).toBeVisible()
        await page.locator("//input[@data-qa='login-email']").fill("raghav10@gmail.com")
        await page.locator("//input[@placeholder='Password']").fill("raghav10")
        await page.locator("//button[normalize-space()='Login']").click()
        await expect(page.locator("//li[10]//a[1]")).toBeVisible()
        await page.locator("//a[normalize-space()='Delete Account']").click()
        await page.locator("//a[normalize-space()='Continue']").click()
    })
    test("Login User with incorrect",async({page})=>{
        await page.goto("https://automationexercise.com/")
        await expect(page.locator("//a[normalize-space()='Home']")).toBeVisible()
        await page.locator("//a[normalize-space()='Signup / Login']").click()
        await page.locator("//input[@data-qa='login-email']").fill("raghav96@gmail.com")
        await page.locator("//input[@placeholder='Password']").fill("raghav96")
        await page.locator("//button[normalize-space()='Login']").click()
        await expect(page.locator("//p[normalize-space()='Your email or password is incorrect!']")).toBeVisible()  
    })
    test("Logout User",async({page})=>{
        await page.goto("https://automationexercise.com/")
        await expect(page.locator("//a[normalize-space()='Home']")).toBeVisible()
        await page.locator("//a[normalize-space()='Signup / Login']").click()
        await page.locator("//input[@data-qa='login-email']").fill("raghav100@gmail.com")
        await page.locator("//input[@placeholder='Password']").fill("raghav10")
        await page.locator("//button[normalize-space()='Login']").click()
        await expect(page.locator("//li[10]//a[1]")).toBeVisible()
        await page.locator("//a[normalize-space()='Logout']").click()
    })
    test("Register User with existing email",async({page})=>{
        await page.goto("https://automationexercise.com/")
        await expect(page.locator("//a[normalize-space()='Home']")).toBeVisible()
    })

    test("github check",async({page})=>{
        await page.goto("https://automationexercise.com/")
        await expect(page.locator("//a[normalize-space()='Home']")).toBeVisible()
    })


})




