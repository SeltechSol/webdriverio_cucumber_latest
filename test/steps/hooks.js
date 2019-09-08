const {After, AfterAll, BeforeAll} = require('cucumber')

After((scenarioResult)=>{
    console.log(`--------------After Hook-----------`);
    console.log(`Scenario Result Status :${scenarioResult.result.status}`)
    console.log(`Scenario Name :${scenarioResult.pickle.name}`)
    console.log(`Scenario Steps :${scenarioResult.pickle.steps}`)
    console.log(`Feature Name :${scenarioResult.sourceLocation.uri}`)

    if(scenarioResult.result.status==="failed"){
        browser.saveScreenshot();
    }
    return scenarioResult.status;
})