let Web3 = require("web3")
let web3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org/")); //connect to specific chain endpoint
let ERC721 = require("./blocwars.json");
let fs = require("fs");

let BlocwarsAddress = "0xf297D4FC4B058a970dF371866202c3c8490b117b" //nft address
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
// j from begining item normally 0 or 1 , j ends at max NFT Supply
async function meta() {
  for(var j = 1; j < 301; j++) {
    try{
    const client = await new web3.eth.Contract(ERC721, BlocwarsAddress.toLocaleLowerCase());
    const uri = await client.methods.tokenURI(j).call()
    console.log(j, uri)
    const response = await fetch(uri);
    const data = await response.json();
    var pathToJSONFile = `./blocwars_js/${j}.json`
    fs.writeFileSync(pathToJSONFile, JSON.stringify(data));
  } 
  catch(error){
    console.log("connection error", error) ;
    await sleep(3000);
  }

}
}
meta();