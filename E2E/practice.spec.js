import { test, expect } from '@playwright/test';
import { playwright } from '../src/pages/login';
test.describe("Automation excerise",()=>{

    let automation;

    test.beforeEach(async({page})=>{
     automation=new playwright(page)
    })

    test("category names",async({page})=>{
        await automation.navigatePage();
        await automation.text();


    })

    test("Brands names",async({page})=>{
        await page.goto("https://www.automationexercise.com/")
    })


     test("t-shirt names",async({page})=>{
        await page.goto("https://www.automationexercise.com/")
        await expect(page.locator("//h2[normalize-space()='Category']")).toBeVisible()
     })
     test("pant names",async({page})=>{
        await page.goto("https://www.automationexercise.com/")
        await expect(page.locator("//h2[normalize-space()='Category']")).toBeVisible()        
    })
    test("add to product",async({page})=>{
        await page.goto("//a[normalize-space()='Home']")
        await expect(page.locator("//h2[normalize-space()='Features Items']")).toContainText()
        await page.locator("//body[1]/section[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]").click()
        await page.locator("//button[normalize-space()='Continue Shopping']").click()
        await page.locator("//body[1]/section[2]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/a[1]").click()
        await page.locator("//button[normalize-space()='Continue Shopping']").click()
        await page.locator("//body[1]/section[2]/div[1]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/div[1]/a[1]").click()
        await page.locator("//button[normalize-space()='Continue Shopping']").click()
        await page.locator("//a[normalize-space()='Cart']").click()
        await page.locator("//a[normalize-space()='Proceed To Checkout']").click()
    })





})