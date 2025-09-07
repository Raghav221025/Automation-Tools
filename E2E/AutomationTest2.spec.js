import { test, expect } from '@playwright/test';
import { playwright } from '../src/pages/login';
test.describe('verify the automation',()=>{

    let Testcases;

    test.beforeEach(async({page})=>{
     Testcases=new playwright(page)
    })
    test("Verify Subscription in Cart page",async({page})=>{
        await Testcases.Homepage("https://automationexercise.com/")
        await Testcases.SubscriptionCartpage();
    })
    test("Add Products in Cart",async({page})=>{
        await Testcases.Homepage("https://automationexercise.com/")
        await Testcases.AddProductsCart();
    })
    test("Verify Product quantity in Cart",async({page})=>{
        await Testcases.Homepage("https://automationexercise.com/")
        await Testcases.ProductQuantityCart();
    })
    test("Place Order: Register while Checkout",async({page})=>{
        await Testcases.Homepage("https://automationexercise.com/")
        await Testcases.RegisterwhileCheckout();
    })
    test("Remove Products From Cart",async({page})=>{
        await Testcases.Homepage("https://automationexercise.com/")
        await Testcases.RemoveProductsFromCart();
    })
    test("View Category Products",async({page})=>{
        await Testcases.Homepage("https://automationexercise.com/")
        await Testcases.ViewCategoryProducts();
    })
    test("View & Cart Brand Products",async({page})=>{
        await Testcases.Homepage("https://automationexercise.com/")
        await Testcases.ViewCartBrandProducts();
    })
    test("Search Products and Verify Cart After Login",async({page})=>{
        await Testcases.Homepage("https://automationexercise.com/")
        await Testcases.SearchProductandCartAfterLogin();
    })
    test("Add review on product",async({page})=>{
        await Testcases.Homepage("https://automationexercise.com/")
        await Testcases.Addreviewonproduct();
    })
    test("Add to cart from Recommended items",async({page})=>{
        await Testcases.Homepage("https://automationexercise.com/")
        await Testcases.AddtocartfromRecommendeditems();
    })





})