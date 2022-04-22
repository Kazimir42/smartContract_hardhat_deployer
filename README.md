# Step

- change contract by yours
- fill tokens.json (if needed (ex : whitelist))
- node index.js to generate the merkle tree (if needed (ex : whitelist))
- edit deploy.js (with ur contract name and params)
- edit hardhat.config.js with the network where you want to deploy
- npx hardhat compile (compile ur contract)
- npx hardhat run scripts/deploy.js --network <network-name> (deploy it on the network u want)
