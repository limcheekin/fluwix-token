var FluwixToken = artifacts.require("./FluwixToken.sol");

module.exports = function (deployer, network, accounts) {
  const initialAccount = accounts[0]
  const initialBalance = '1000000000'
  const name = 'FluwixToken'
  const symbol = 'FWX'
  deployer.deploy(FluwixToken, name, symbol, initialAccount, initialBalance);
};
