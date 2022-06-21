require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth ridge connect harvest square system genuine'; 
let testAccounts = [
"0xc05890b2aed8fcc93321cf03444134a8c7903d19faef90d0be6002e4d40a2716",
"0x6ddd6a4236c7ceb8460cb61d2eb2cee025e139638636cff5bdbe567c4c0f80c6",
"0x99743724c566a84b31a066de1d48fbe927de247004531b008ac9866366d1cb12",
"0x49a01247cf46fc49df48403f4188482d4e6f9f2f8c37d078fa902e5893f49b28",
"0x65fb05c00f4c9f05ee089a9c6896f2460a28dbde156bb9caf59af67fd8c36d12",
"0x0bd83a8f50dd26c4b8231611631ab7e54c6f2f1b2076fc69344de590b842347f",
"0xb0623c19dc0927826a1e60838253b330a61177363f089dfeb4c08eb7dc882644",
"0x99b313a8205845bbfd2327c7de83b5d940594f314e7c02aebf56cec2c3fd1de4",
"0x3727fb8a88fe3c04265cd1c85f933cef4e549fcb555ca6310497c75d147c27e8",
"0x8fbffb884b10fe7d1266afa1697df95118988729556b1c293a8baaa32066ea42"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

