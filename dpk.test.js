const { deterministicPartitionKey, makeHash } = require("./dpk");





describe("deterministicPartitionKey", () => {

  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal '1' when given partitionKey 1", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: 1 });
    expect(trivialKey).toBe("1");
  });

  it("Returns the hash of json when given partitionKey prop isn't present", () => {
    const event = { someThing: 1 };
    const key = deterministicPartitionKey(event);
    expect(key).toBe(makeHash(JSON.stringify(event)));
  });


  it("Returns the hash of partitionKey when given partitionKey is longer", () => {
    const event = { partitionKey: "A".repeat(500) };
    const key = deterministicPartitionKey(event);

    let hash = makeHash("A".repeat(500));
    expect(key).toBe(hash);
  });

});
