import {test,expect}from'@playwright/test'
import locator from '../Testcaselocator/locator.json'
import Details from '../pages/Testcasedata/Testcasedata.json'
export class playwright{

    constructor(page){
    this.currentPage=(page);
    }
    async navigatePage(){
        await this.currentPage.goto("https://www.automationexercise.com/")
                
    }
    async text(){
        await expect(this.currentPage.locator("//h2[normalize-space()='Category']")).toContainText("Category")
        await this.currentPage.locator("//a[normalize-space()='Women']").click()
        await expect(this.currentPage.locator("//div[@id='Women']//a[contains(text(),'Dress')]")).toContainText("Dress")
        await expect(this.currentPage.locator("//a[normalize-space()='Tops']")).toContainText("Tops")
        await expect(this.currentPage.locator("//a[normalize-space()='Saree']")).toContainText("Saree")
        await this.currentPage.locator("//a[normalize-space()='Men']").click()
        await expect(this.currentPage.locator("//a[normalize-space()='Tshirts']")).toContainText("Tshirts")
        await expect(this.currentPage.locator("//a[normalize-space()='Jeans']")).toContainText("Jeans")
        await this.currentPage.locator("//a[normalize-space()='Kids']").click()
        await expect(this.currentPage.locator("//div[@id='Kids']//a[contains(text(),'Dress')]")).toContainText("Dress")
        await expect(this.currentPage.locator("//a[normalize-space()='Tops & Shirts']")).toContainText("Tops & Shirts")
    }
    async Brands(){
        await this.currentPage.locator("//a[@href='/brand_products/Polo']").click()
        await this.currentPage.locator("//div[@class='col-sm-9 padding-right']//div[2]//div[1]//div[2]//ul[1]//li[1]//a[1]").click()
        await expect(this.currentPage.locator("//body//section//p[4]")).toContainText(" Polo")
        await this.currentPage.goBack()
        await this.currentPage.locator("//div[@class='col-sm-9 padding-right']//div[2]//div[1]//div[2]//ul[1]//li[1]//a[1]").click()
        await expect(this.currentPage.locator("//body//section//p[4]")).toContainText(" Polo")
        await this.currentPage.goBack()
        await this.currentPage.locator("//body[1]/section[1]/div[1]/div[2]/div[2]/div[1]/div[4]/div[1]/div[2]/ul[1]/li[1]/a[1]").click()
        await expect(this.currentPage.locator("//body//section//p[4]")).toContainText(" Polo")
        await this.currentPage.goBack()
        await this.currentPage.locator("//body[1]/section[1]/div[1]/div[2]/div[2]/div[1]/div[5]/div[1]/div[2]/ul[1]/li[1]/a[1]").click()
        await expect(this.currentPage.locator("//body//section//p[4]")).toContainText(" Polo")
        await this.currentPage.goBack()
        await this.currentPage.locator("//body[1]/section[1]/div[1]/div[2]/div[2]/div[1]/div[6]/div[1]/div[2]/ul[1]/li[1]/a[1]").click()
        await expect(this.currentPage.locator("//body//section//p[4]")).toContainText("Polo")
        await this.currentPage.goBack()
        await this.currentPage.locator("//body[1]/section[1]/div[1]/div[2]/div[2]/div[1]/div[7]/div[1]/div[2]/ul[1]/li[1]/a[1]").click()
        await expect(this.currentPage.locator("//body//section//p[4]")).toContainText(" Polo")

    }

    async tShirt(){
        await this.currentPage.locator("//a[normalize-space()='Men']").click()
        await this.currentPage.locator("//a[normalize-space()='Tshirts']").click()
        await expect(this.currentPage.locator("//body/section/div[@class='container']/div[@class='row']/div[@class='col-sm-9 padding-right']/div[@class='features_items']/div[2]/div[1]/div[1]/div[1]/p[1]")).toContainText("Men Tshirt")
        await expect(this.currentPage.locator("//span[normalize-space()='Pure Cotton V-Neck T-Shirt']")).toContainText("Pure Cotton V-Neck T-Shirt")
        await expect(this.currentPage.locator("//div[@class='productinfo text-center']//p[contains(text(),'Green Side Placket Detail T-Shirt')]")).toContainText("Green Side Placket Detail T-Shirt")
        await expect(this.currentPage.locator("//div[@class='productinfo text-center']//p[contains(text(),'Premium Polo T-Shirts')]")).toContainText("Premium Polo T-Shirts")
        await expect(this.currentPage.locator("//div[@class='productinfo text-center']//p[contains(text(),'Pure Cotton Neon Green Tshirt')]")).toContainText("Pure Cotton Neon Green Tshirt")
        await expect(this.currentPage.locator("//div[@class='productinfo text-center']//p[contains(text(),'GRAPHIC DESIGN MEN T SHIRT - BLUE')]")).toContainText("GRAPHIC DESIGN MEN T SHIRT - BLUE")

    }
    async pant(){
        await this.currentPage.locator("//a[normalize-space()='Men']").click()
        await this.currentPage.locator("//a[normalize-space()='Jeans']").click()
        await expect(this.currentPage.locator("//div[@class='productinfo text-center']//p[contains(text(),'Soft Stretch Jeans')]")).toContainText("Soft Stretch Jeans")
        await expect(this.currentPage.locator("//div[@class='productinfo text-center']//p[contains(text(),'Regular Fit Straight Jeans')]")).toContainText("Regular Fit Straight Jeans")
        await expect(this.currentPage.locator("//body[1]/section[1]/div[1]/div[2]/div[2]/div[1]/div[4]/div[1]/div[1]/div[1]/p[1]")).toContainText("Grunt Blue Slim Fit Jeans")

    }
    async RegisterUser(){
        await expect(this.currentPage.locator(locator.Homepage)).toBeVisible()
        await this.currentPage.locator(locator.click).click()
        await expect(this.currentPage.locator(locator.NewuserSignup)).toBeVisible()
        await this.currentPage.locator(locator.Name).fill(Details.Name)
        await this.currentPage.locator(locator.Email).fill(Details.Email)
        await this.currentPage.locator(locator.signup).click()
        test.setTimeout(100000)
        await expect(this.currentPage.locator(locator.AccountInformation)).toBeVisible()
        await this.currentPage.locator(locator.Genderclick).click()
        await this.currentPage.locator(locator.Password).fill(Details.Password)
        await this.currentPage.locator(locator.Days).selectOption(Details.Days)
        await this.currentPage.locator(locator.Months).selectOption(Details.Months)
        await this.currentPage.locator(locator.Years).selectOption(Details.Years)
        await this.currentPage.locator(locator.Firstname).fill(Details.Firstname)
        await this.currentPage.locator(locator.Lastname).fill(Details.Lastname)
        await this.currentPage.locator(locator.Address).fill(Details.Address)
        await this.currentPage.locator(locator.Country).selectOption(Details.Country)
        await this.currentPage.locator(locator.State).fill(Details.State)
        await this.currentPage.locator(locator.City).fill(Details.City)
        await this.currentPage.locator(locator.Zipcode).fill(Details.Zipcode)
        await this.currentPage.locator(locator.Mobilenumber).fill(Details.Mobilenumber)
        await this.currentPage.locator(locator.CreateAccount).click()
        await expect(this.currentPage.locator(locator.ClickCreatedAccount)).toBeVisible()
        await this.currentPage.locator(locator.ClickContinue).click()
        await expect(this.currentPage.locator(locator.VerifyUsername)).toBeVisible()
        await this.currentPage.locator(locator.ClickDeleteAccount).click()
        await expect(this.currentPage.locator(locator.VerifyDeleteAccount)).toBeVisible()
        await this.currentPage.locator(locator.ContinueClick).click()

    }
    async Homepage(url){
       await this.currentPage.goto(url)

    }
}











