const {Given, When, Then} = require('cucumber');
const productPage = require('../pages/product.page');
const basePage = require('../base.page')



When(/^user types "(.*)" quantity in the quantity box$/,(qty)=>{
    console.log(`user types ${qty} quantity in the quantity`);
    basePage.webSetValue(productPage.quantityTextBox,10);
    //browser.pause(2000);
})

Then(/^user should see the "(.*)" button gets enabled$/,(buyNowText)=>{
    console.log(`user types ${buyNowText} quantity in the quantity box`);
    var heading = basePage.webIsEnabled(productPage.buyNowButton);
    console.log(`Product Page Heading : ${heading}`)
    browser.pause(2000);
})

When(/^user clicks to add the review$/,()=>{
    console.log(`user clicks to add the review`);
    basePage.webWaitForVisibleSel(productPage.reviewButtonSel,5000)
    basePage.webClick(productPage.reviewButton);
    //browser.pause(2000);
})

Then(/^user should see following two error messages$/,(dataTable)=>{
    const data = dataTable.raw();
    console.log(`user should see following two error messages`);
    basePage.webWaitForVisibleSel(productPage.reviewErrorMessagesSel,10000)
    for(let i=1 ; i<data.length ; i++){
        let errorText = basePage.webGetText(productPage.reviewErrorMessages[i-1]);
        console.log(`Expected Error : ${errorText} 
               - Actual Error : ${data[i][1]}`)
        expect(errorText).to.equal(data[i][1]);       
    }
    browser.pause(2000);
})