const Hello = artifacts.require("Hello");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Hello", function (accounts) {
  it("should assert true", async function () {
    await Hello.deployed();
    return assert.isTrue(true);
  });
  
  describe("greet()", () => {
   it("should return 'Hello, World!'", async () =>{ 
      const hello = await Hello.deployed();
      const result = await hello.greet();
      const expected = "Hello, World!";
      assert.equal(result, expected ,"greeted with 'Hello, world!'"); 
    });
  })
  describe("owner()",()=> {
    it("should return the owner" , async () => {
      const hello = await Hello.deployed();
      const result = await hello.owner();
      assert(result," the current owner "); 
    });
    it("shoud return the owner's address", async ()=> {
      const hello = await Hello.deployed();
      const result = await hello.owner();
      const expected = accounts[0];
      assert.equal(result, expected,"marche the owner's address");
    
    })
  })
  
  describe("setGreetie()", ()=>{
    it("shude setGreetie" , async () => {
      const hello = await Hello.deployed();
      const expected = "Hello, Human!";
      const greetie = "Human!";
      await hello.setGreetie(greetie);
      const actual = await hello.greet();
      assert.equal(actual, expected, "greered with 'Hello, Human!");
    })
  })
});
 