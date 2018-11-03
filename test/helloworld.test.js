const ganache = require('ganache-cli');

const Web3 = require('web3');

const web3 = new Web3(ganache.provider());
    //  const helloworld  = require('../compile');//helloworld.bytecode  helloworld.interface
const {bytecode,interface}  = require('../compile');
beforeEach( async()=>{
    fetchAccounts = await web3.eth.getAccounts();
    console.log(fetchAccounts);
  //promise
});
 
describe('HelloWorld',()=>{

  it('deploy contract',()=>{})
})
