const HDWalletProvider = require("@truffle/hdwallet-provider");

const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString().trim();

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },

    // Useful for deploying to a public network.
    // It's important to wrap the provider as a function.
    rinkeby: {
      provider: () =>
        new HDWalletProvider(
          privateKey,
          `https://rinkeby.infura.io/v3/59427091d14941beabc41caadcf2b6f9`
        ),
      network_id: 4, // Rinkeby's id
      gas: 5500000,
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },
  }
};
