require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remember protect imitate private flat segment'; 
let testAccounts = [
"0x9ef3a2726fc984990ff8ac6378da6fc47572159c43e9e5e3c42f227169eb78de",
"0x8840fae71e5f7c0598280c7c4f7cbb7692e27e6cc46449dda255d098f5f27eca",
"0xc5b1a2ae1fb1298b17b058aaff863caed16d8a0f5452b5be90e2e20d7fd7a375",
"0xa55d2ae5bdd2565d9d9f83f8edd3064e22aa197bccaa53c975a9ba51366c7d09",
"0x583b06b6dd2e1fa103bb67156d198c7d4969b0cbfe894ef40c96e092f65de554",
"0x413b022c58f8a53694aaed9d7955a512b73cca783c7ba349b2d00bbce03ee8c6",
"0x81dfdab81dcde6560dce0a85a8ff393a4c5bc1a052cc59c6ebf19752958aca2e",
"0xf94ec75a14bd2c52bc6c6918187227988974fb8c807c686dd1dbcb55b906e933",
"0xd2475f5685f54a132cad009755e4c7d450c453fae17e0ac44291fa63c9688406",
"0x3961cccbe150466fcc67bf7db68164a2d1cececb42de8c446a568aa9da468945"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


