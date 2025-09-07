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
        await this.currentPage.locator(locator.Click).click()
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
        await this.currentPage.locator(locator.ClickDeleteAccount).click()
        await expect(this.currentPage.locator(locator.VerifyDeleteAccount)).toBeVisible()
        await this.currentPage.locator(locator.ClickContinue).click()

    }
    async Homepage(url){
       await this.currentPage.goto(url)
    }
    async LoginUsercorrect(){
        await expect(this.currentPage.locator(locator.Homepage)).toBeVisible()
        await this.currentPage.locator(locator.Click).click()
        await expect(this.currentPage.locator(locator.Loginusersignup)).toBeVisible()
        await this.currentPage.locator(locator.LoginEmail).fill(Details.EmailD)
        await this.currentPage.locator(locator.LoginPassword).fill(Details.PasswordD)
        await this.currentPage.locator(locator.Login).click()
        await this.currentPage.locator(locator.ClickDeleteAccount).click()
        await this.currentPage.locator(locator.ClickContinue).click()
    }
    async LoginUserincorrect(){
        await expect(this.currentPage.locator(locator.Homepage)).toBeVisible()
        await this.currentPage.locator(locator.Click).click()
        await this.currentPage.locator(locator.LoginEmail).fill(Details.Email3)
        await this.currentPage.locator(locator.LoginPassword).fill(Details.Password3)
        await this.currentPage.locator(locator.Login).click()
        await expect(this.currentPage.locator(locator.IncorrectMailMsg)).toBeVisible()  
    }    
    async LogoutUser(){
        await expect(this.currentPage.locator(locator.Homepage)).toBeVisible()
        await this.currentPage.locator(locator.Click).click()
        await this.currentPage.locator(locator.LoginEmail).fill(Details.Email4)
        await this.currentPage.locator(locator.LoginPassword).fill(Details.Password4)
        await this.currentPage.locator(locator.Login).click()
        await this.currentPage.locator(locator.Logout).click()
    }
    async RegisterUserExistingEmail(){
        await expect(this.currentPage.locator(locator.Homepage)).toBeVisible()
        await this.currentPage.locator(locator.Click).click()
        await expect(this.currentPage.locator(locator.NewuserSignup)).toBeVisible()
        await this.currentPage.locator(locator.Name).fill(Details.Name5)
        await this.currentPage.locator(locator.Email).fill(Details.Email5)
        await this.currentPage.locator(locator.signup).click()
        await expect(this.currentPage.locator(locator.ExcistingMail)).toBeVisible()
    }
    async VerifyTestCases(){
        await expect(this.currentPage.locator(locator.Homepage)).toBeVisible()
        await this.currentPage.locator(locator.TestcaseButton).click()
        await expect(this.currentPage.locator(locator.Testcasevisible)).toBeVisible()
    }
    async VerifyproductDetails(){
        await expect(this.currentPage.locator(locator.Homepage)).toBeVisible()
        await this.currentPage.locator(locator.Product).click()
        await expect(this.currentPage.locator(locator.Allproducts)).toBeVisible()
        await this.currentPage.locator(locator.Viewproducts).click()
        await expect(this.currentPage.locator(locator.Singleproduct)).toBeVisible()
    }
    async SearchProduct(){
        await expect(this.currentPage.locator(locator.Homepage)).toBeVisible()
        await this.currentPage.locator(locator.Product).click()
        await expect(this.currentPage.locator(locator.Allproducts)).toBeVisible()
        await this.currentPage.locator(locator.Firstproduct).fill(Details.ProductName)
        await this.currentPage.locator(locator.ArrowButton).click()
        await expect(this.currentPage.locator(locator.searchedProduct)).toBeVisible()
        await expect(this.currentPage.locator(locator.Allproducts)).toBeVisible()
    }
    async VerifySubscription(){
        await expect(this.currentPage.locator(locator.Homepage)).toBeVisible()
        await expect(this.currentPage.locator(locator.Subscription)).toBeVisible()
        await this.currentPage.locator(locator.SubscriptionEmail).fill(Details.Email10)
        await this.currentPage.locator(locator.SubscriptionArrow).click()
        await expect(this.currentPage.locator(locator.SubscriptionSuccess)).toBeVisible()
    }
    async SubscriptionCartpage(){
        await expect(this.currentPage.locator(locator.Homepage)).toBeVisible()
        await this.currentPage.locator(locator.Cart).click()
        await expect(this.currentPage.locator(locator.Subscription)).toBeVisible()
        await this.currentPage.locator(locator.SubscriptionEmail).fill(Details.Email11)
        await this.currentPage.locator(locator.Arrow).click()
        await expect(this.currentPage.locator(locator.SubscriptionSuccess)).toBeVisible()
    }
    async AddProductsCart(){
        await expect(this.currentPage.locator(locator.Homepage)).toBeVisible()
        await this.currentPage.locator(locator.Product).click()
        await this.currentPage.locator(locator.AddCart).click()
        await this.currentPage.locator(locator.ContinueShopping).click()
        await this.currentPage.locator(locator.AddCart2).click()
        await this.currentPage.locator(locator.ContinueShopping).click()
        await this.currentPage.locator(locator.Cart).click()
        await expect(this.currentPage.locator(locator.CartVisible)).toBeVisible()
        await expect(this.currentPage.locator(locator.Product1Visible)).toBeVisible()
        await expect(this.currentPage.locator(locator.Product2Visible)).toBeVisible()
    }
    async ProductQuantityCart(){
        await expect(this.currentPage.locator(locator.Homepage)).toBeVisible()
        for (let i = 0; i < 4; i++){
        await this.currentPage.locator(locator.AddCart).click()
        await this.currentPage.locator(locator.ContinueShopping).click()
        }
        await this.currentPage.locator(locator.Cart).click()
        await expect(this.currentPage.locator(locator.Quantity4)).toBeVisible()
    }
    async RegisterwhileCheckout(){
        await expect(this.currentPage.locator(locator.Homepage)).toBeVisible()
        await this.currentPage.locator(locator.AddCart).click()
        await this.currentPage.locator(locator.ContinueShopping).click()
        await this.currentPage.locator(locator.Cart).click()
        await expect(this.currentPage.locator(locator.CartVisible2)).toBeVisible()
        await this.currentPage.locator(locator.ProceedCheckout).click()
        await this.currentPage.locator(locator.RegisterLogin).click()
        await this.currentPage.locator(locator.Name).fill(Details.Name14)
        await this.currentPage.locator(locator.Email).fill(Details.Email14)
        await this.currentPage.locator(locator.signup).click()
        await this.currentPage.locator(locator.Gender).click()
        await this.currentPage.locator(locator.Password).fill(Details.Password14)
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
        await this.currentPage.locator(locator.Cart).click()
        await this.currentPage.locator(locator.ProceedCheckout).click()
        await expect(this.currentPage.locator(locator.AddressDeliver)).toBeVisible()
        await this.currentPage.locator(locator.ReviewMessage).fill(Details.ReviewMessage)
        await this.currentPage.locator(locator.Placeorder).click()
        await this.currentPage.locator(locator.CardName).fill(Details.CardName)
        await this.currentPage.locator(locator.CardNumber).fill(Details.CardNumber)
        await this.currentPage.locator(locator.Placeholder).fill(Details.Placeholder)
        await this.currentPage.locator(locator.PlaceholderMonth).fill(Details.PlaceholderMonth)
        await this.currentPage.locator(locator.placeholderYear).fill(Details.PlaceholderYear)
        await this.currentPage.locator(locator.Submit).click()
        await expect(this.currentPage.locator(locator.OrderConfirmed)).toBeVisible()
        await this.currentPage.locator(locator.ClickDeleteAccount).click()
        await this.currentPage.locator(locator.ClickContinue).click()
    }
    async RemoveProductsFromCart(){
        await expect(this.currentPage.locator(locator.Homepage)).toBeVisible()
        await this.currentPage.locator(locator.Product15).click()
        await this.currentPage.locator(locator.ContinueShopping).click()
        await this.currentPage.locator(locator.Cart).click()
        await expect(this.currentPage.locator(locator.CartVisible2)).toBeVisible()
        await this.currentPage.locator(locator.Xbutton).click()
    }
    async ViewCategoryProducts(){
        await expect(this.currentPage.locator(locator.Homepage)).toBeVisible()
        await expect(this.currentPage.locator(locator.Category)).toBeVisible()
        await this.currentPage.locator(locator.WomenBrand).click()
        await this.currentPage.locator(locator.WomenDress).click()
        await expect(this.currentPage.locator(locator.Features)).toBeVisible()
        await this.currentPage.locator(locator.MenBrand).click()
        await this.currentPage.locator(locator.MenTshirt).click()
        await expect(this.currentPage.locator(locator.Features)).toBeVisible()
    }
    async ViewCartBrandProducts(){
        await expect(this.currentPage.locator(locator.Homepage)).toBeVisible()
        await this.currentPage.locator(locator.Product).click()
        await expect(this.currentPage.locator(locator.BrandProduct)).toBeVisible()
        await this.currentPage.locator(locator.Polo).click()
        await expect(this.currentPage.locator(locator.Features)).toBeVisible()
        await this.currentPage.locator(locator.BrandProduct2).click()
        await expect(this.currentPage.locator(locator.Features)).toBeVisible()
    }
    async SearchProductandCartAfterLogin(){
        await expect(this.currentPage.locator(locator.Homepage)).toBeVisible()
        await this.currentPage.locator(locator.Product).click()
        await expect(this.currentPage.locator(locator.Features)).toBeVisible()
        await this.currentPage.locator(locator.Firstproduct).fill(Details.FirstProduct)
        await this.currentPage.locator(locator.ArrowButton).click()
        await expect(this.currentPage.locator(locator.ProductInfo)).toBeVisible()
        await this.currentPage.locator(locator.AddToCart).click()
        await this.currentPage.locator(locator.ContinueShopping).click()
        await this.currentPage.locator(locator.Cart).click()
        await expect(this.currentPage.locator(locator.CartInfo)).toBeVisible()
        await this.currentPage.locator(locator.Click).click()
        await this.currentPage.locator(locator.LoginEmail).fill(Details.LoginEmail)
        await this.currentPage.locator(locator.LoginPassword).fill(Details.LoginPassword)
        await this.currentPage.locator(locator.Login).click()
        await this.currentPage.locator(locator.Cart).click()
        await expect(this.currentPage.locator(locator.CartInfo)).toBeVisible()
    }
    async Addreviewonproduct(){
        await expect(this.currentPage.locator(locator.Homepage)).toBeVisible()
        await this.currentPage.locator(locator.Product).click()
        await expect(this.currentPage.locator(locator.Features)).toBeVisible()
        await this.currentPage.locator(locator.ViewProduct21).click()
        await expect(this.currentPage.locator(locator.CategoryTab)).toBeVisible()
        await this.currentPage.locator(locator.Name21).fill(Details.Firstname)
        await this.currentPage.locator(locator.Email21).fill(Details.LoginEmail)
        await this.currentPage.locator(locator.Review).fill(Details.Review)
        await this.currentPage.locator(locator.ReviewButton).click()
        await expect(this.currentPage.locator(locator.ThankReview)).toBeVisible()
    }
    async AddtocartfromRecommendeditems(){
        await expect(this.currentPage.locator(locator.RecommendedItems)).toBeVisible()
        await this.currentPage.locator(locator.RecommendedProduct).click()
        await this.currentPage.locator(locator.ContinueShopping).click()
        await this.currentPage.locator(locator.Cart22).click()
        await expect(this.currentPage.locator(locator.CartInfo)).toBeVisible()
    }
    
}











