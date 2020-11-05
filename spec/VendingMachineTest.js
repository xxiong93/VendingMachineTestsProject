describe("Vending Machine", function(){
    var itemPrice = 50;
    var moneyInput = 100;
    beforeEach(function() {
        vendingMachine = new VendingMachine();

    });

    it("returns change after itemPrice is subtracted from moneyInput", function(){
        let change = vendingMachine.calculateReturnChange(itemPrice, moneyInput);

        expect(change).toBe(50);
    });
});