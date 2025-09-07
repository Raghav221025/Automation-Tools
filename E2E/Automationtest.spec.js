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
        await Testcases.Homepage("https://automationexercise.com/login")
        await Testcases.LoginUsercorrect();
    })
    test("Login User with incorrect",async({page})=>{
        await Testcases.Homepage("https://automationexercise.com/")
        await Testcases.LoginUserincorrect();

    })
    test("Logout User",async({page})=>{
        await Testcases.Homepage("https://automationexercise.com/")
        await Testcases.LogoutUser();
    })
    test("Register User with existing email",async({page})=>{
        await Testcases.Homepage("https://automationexercise.com/")
        await Testcases.RegisterUserExistingEmail();
    })
    test("Verify Test Cases Page",async({page})=>{
        await Testcases.Homepage("https://automationexercise.com/")
        await Testcases.VerifyTestCases();
    })
    test("Verify Products & Products Details",async({page})=>{
        await Testcases.Homepage("https://automationexercise.com/")
        await Testcases.VerifyproductDetails()
    })
    test("Search Product",async({page})=>{
        await Testcases.Homepage("https://automationexercise.com/")
        await Testcases.SearchProduct()
    })
    test("Verify Subscription in home page",async({page})=>{
        await Testcases.Homepage("https://automationexercise.com/")
        await Testcases.VerifySubscription()
    })

})




