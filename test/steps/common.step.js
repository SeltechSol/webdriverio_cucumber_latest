const {Given, When, Then} = require('cucumber')
const mainPage = require('../pages/main.page');
const productPage = require('../pages/product.page')
const basePage = require('../base.page');

Given(/^user navigates to site$/,()=>{
    console.log("User navigates tot he site");
    browser.url('./');
    var btnText = mainPage.robotSelectionBtn.getText()
    console.log("Button Text : ",btnText)
   
    browser.pause(2000);
})

When(/^user navigates to product "(.*)" page$/,(prodUrl)=>{
    console.log(`User navigates to product ${prodUrl} page`);
    browser.url('./'+prodUrl);
    browser.pause(2000);
})

Then(/^user should see product page title "(.*)" is present$/,(prodTitle)=>{
    console.log("user should see product page is present");
    expect(browser.getTitle()).to.includes(prodTitle)
        // let str1 ="hello";
        // let str2 = "hello"
        // //equall
        // expect(str1).to.equal(str2);
        // expect(str1).to.not.equal("world");
        // // contains/includes
        // expect(str1).to.include("hell");
        // expect(str1).to.contains("hel")
        // // True
        // expect(true).to.be.true;
    
    browser.pause(2000);
})

When(/^user navigates to product page by clicking "(.*)" button$/,(prodBtn)=>{
    console.log(`user navigates to product page by clicking ${prodBtn} button`);
    basePage.webClick(mainPage.robotSelectionBtn);
    //browser.pause(2000);
})

Then(/^user should see product page heading "(.*)" is present$/,(prodHeading)=>{
    console.log(`user should see product page ${prodHeading} heading`);
    //prodHeading
    var heading = basePage.webGetText(productPage.productPageHeading);
    var quantity = basePage.webGetText(productPage.quantityLabel);
    var reviewHeading = basePage.webGetText(productPage.reviewsHeading);
    console.log(`Product Page Heading : ${heading}`)
    console.log(`Product quantity : ${quantity}`)
    console.log(`Product Review Heading : ${reviewHeading}`)
    //expect(browser.getTitle()).to.includes(prodHeading)
    browser.pause(2000);
})