class ProductPage {
    get productPageHeading() {return $('div.cart > h3')}
    get productPageHeadingSel() {return ('div.cart > h3')}

    get quantityLabel() {return $('div.small-3 label')}
    get reviewsHeading() {return $('h4')}
    get quantityTextBox() {return $("//div[@class='row']//input[@type='number']")}
    get buyNowButton(){return $('#buyNowButton')}

    get addAReviewLabel(){return $('#comment-form > h3');};
    get reviewEmailTxtBox(){return $('#review-email');};
    get reviewTextTxtBox(){return $('label > textarea');};
    get submitBtn(){return $("//button[.='Submit Review']");};
    get errorEmailText(){return $('p.form-error');};
    get errorReviewText(){return $("//p[contains(.,'A review')]");};
    get reviewButton(){return $("//button[.='Submit Review']")}
    get reviewButtonSel(){return ("//button[.='Submit Review']")}
    get reviewErrorMessages() {return $$('p.form-error.is-visible')}
    get reviewErrorMessagesSel() {return ('p.form-error.is-visible')}
  
}

module.exports = new ProductPage();