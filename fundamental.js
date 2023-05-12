class bakery{
  constructor(name, location, stockCake, money){
    this.name = name;
    this.location = location;
    this.stockOfCake = stockCake
    this.hugeWallet = money
    
  }
  printLocation(){
    console.log(this.location)
  }
  bakeACake(){
    
    console.log(`The Stock right now is `,this.stockOfCake);
  }
  oneMoreCake() {
    if(this.hugeWallet <= 2){
      console.log("we Can't Make another 1 cake, we have no Money")
    } else {
    this.stockOfCake++
    this.hugeWallet -= 2
    this.bakeACake();
    }
  }
  actualWallet(){
    console.log(`We have actually :`, this.hugeWallet);
  }
  sellACake(){
    if(this.stockOfCake <= 0){
      console.log("We can't sell Cake, the stock is empty")
    }else {
    this.stockOfCake--
    this.hugeWallet += 3
    this.actualWallet();
    this.bakeACake();
  }
  }
}



const bakery1 = new bakery("Best bakery", "Berlin", 5, 15);

bakery1.printLocation();
bakery1.oneMoreCake();
bakery1.sellACake();