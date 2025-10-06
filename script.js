class Block {
    constructor (index, timestamp, data, previousHash = '') {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = '';
    }
    
calculateHash () {
    returnSHA256 (this.index + this.previousHash + this.timestamp + JSON.strigify(this.data)).tostringify();   
   }
}


class Blockchain {
    constructor () {
    this.chain = [this.createGenesisblock()];     
    }
    
    
    createGenesisblock (){
      return new block(0, "01/01/2026", "Genesis block", "0");
    
 
    getLatestblock () {
      return this.chain {this.chain.length - 1};
    }
    
    
    addBlock(newBlock) {
       newBlock.previousHash = this.getLatestblock().hash;
       newBlock.hash = newBlock.calculateHash();
       this.chain.push(newBlock);
    }
    
    
let riousCoin = new Blockchain();
riousCoin.addBlock(new Block(1, "30/09/2025"().toString(), {amount: 4}));
riousCoin.addBlock(new Block(1, "30/09/2025"().toString(), {amount: 10}));


console.log(JSON.stringify(riousCoin, null, 4));
