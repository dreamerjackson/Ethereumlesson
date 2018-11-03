const ganache = require('ganache-cli');

const Web3 = require('web3');

const web3 = new Web3(ganache.provider());
    //  const helloworld  = require('../compile');//helloworld.bytecode  helloworld.interface
const {bytecode,interface}  = require('../compile');
const assert = require('assert');

var helloworld;
beforeEach( async()=>{
    fetchAccounts = await web3.eth.getAccounts();
    helloworld =  await   new web3.eth.Contract(JSON.parse(interface)).deploy({data:bytecode,arguments:['jonson']}).send({from:fetchAccounts[0],gas:'1000000'});
    //console.log(fetchAccounts);
  //promise
});

describe('HelloWorld',()=>{

  it('deploy contract',()=>{

  //  console.log(helloworld);

    assert.ok(helloworld.options.address);
  })
})
