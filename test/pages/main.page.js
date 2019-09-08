class MainPage {
 
 get robotSelectionBtn()  {return $('a.fancy')}
 get robotSelectionBtnSel() {return ('a.fancy')}

 buyProdButton(prodName){
     return $("//h5[contains(.,'"+prodName+"')]//following-sibling::a")
 }


}
module.exports=new MainPage();