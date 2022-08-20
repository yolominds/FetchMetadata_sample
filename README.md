# FetchMetadata_sample

This repo shows how to fetch a NFT metadata from interacting with its contract. The sample is based on gamefi blocwars. 
The ABI (blocwars.json) is got by : go to https://bscscan.com/address/0xf297d4fc4b058a970df371866202c3c8490b117b#code under the "Contract ABI", copy every thing and paste to a json file. 

# Install dependencies
 $ npm install 

# Compile ts
 $ tsc metadata_query_sample.ts

# Run
 $ node metadata_query_sample.js
 
# To fetch other nfts on different chain
## Change the chain rpc endpoint
## Change the nft address 
## change the ERC721/ERC1155 ABI 

