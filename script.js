const SHA256 = require('crypto-js/sha256');


class Block {
    constructor (index, timestamp, data,
 previousHash = '') {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = '';
    }
    
calculateHash () {
    return SHA256 (this.index + this.previousHash
 + this.timestamp + 
JSON.stringify(this.data)).toString();   
   }
}


class Blockchain {
    constructor () {
    this.chain = [this.createGenesisblock()];     
    }
    
    
    createGenesisblock (){
      return new Block(0, "01/01/2026",
 "Genesis block", "0");
}    
 
    getLatestblock() {
      return this.chain [this.chain.length - 1];
    }
    
    
    addBlock(newBlock) {
       newBlock.previousHash =
 this.getLatestblock().hash;
       newBlock.hash = newBlock.calculateHash();
       this.chain.push(newBlock);
    }
    
isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
        const currentBlock = this.chain[i];
        const previousBlock = this.chain[i - 1];

        
        if (currentBlock.hash !== 
currentBlock.calculateHash()) {
            return false;
        }

        
        if (currentBlock.previousHash !== 
previousBlock.hash) {
            return false;
        }
    }

    return true;
}
}

let riousCoin = new Blockchain();
       riousCoin.addBlock(
    new Block(
riousCoin.chain.length,
 "10/03/2026",
{ amount: 4 }));

       riousCoin.addBlock(
   new Block(
riousCoin.chain.length,
 "12/03/2026",
{ amount: 10 }));    


console.log("Blockchain valid? " +
riousCoin.isChainValid());
riousCoin.chain[1].data = { amount: 100 };
console.log("Blockchain valid? " +
riousCoin.isChainValid());
console.log("\nFinal Blockchain:");
console.log(JSON.stringify(riousCoin, null, 4));






