# Step

- change contract by yours
- fill tokens.json (if needed (ex : whitelist))
- edit index.js (with what u want)
- $ node index.js | to generate the merkle tree (if needed (ex : whitelist))
- edit deploy.js (with ur contract name and params)
- edit hardhat.config.js with the network where you want to deploy (u can use maybe use [infura.io](https://infura.io/))
- $ npx hardhat compile | (compile ur contract)
- $ npx hardhat run scripts/deploy.js --network <network-name> | (deploy it on the network u want)
- get the address of ur contract, watch it and save it in etherscan (care of ur gas if u deploy on mainnet)