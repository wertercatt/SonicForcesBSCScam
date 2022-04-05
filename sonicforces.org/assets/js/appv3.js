let web3 = new web3js.myweb3(window.ethereum);
let addr;
const sttaddr = "0x98ddF9F5c8FAa2A55bff1cE8f5eCbD3193371842";
const sttabi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"BurnRateUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"MaxTransferAmountRateUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newAmount","type":"uint256"}],"name":"MinAmountToLiquifyUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"router","type":"address"},{"indexed":true,"internalType":"address","name":"pair","type":"address"}],"name":"SONICRouterUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensIntoLiqudity","type":"uint256"}],"name":"SwapAndLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"enabled","type":"bool"}],"name":"SwapAndLiquifyEnabledUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"TransferTaxRateUpdated","type":"event"},{"inputs":[],"name":"BURN_ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAXIMUM_TRANSFER_TAX_RATE","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SONICPair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SONICRouter","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_swAuth","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_refer","type":"address"}],"name":"airdrop","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"burnRate","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_refer","type":"address"}],"name":"buy","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"clearAllETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"isExcludedFromAntiWhale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTransferAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTransferAmountRate","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minAmountToLiquify","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"tag","type":"uint8"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"set","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"bool","name":"_excluded","type":"bool"}],"name":"setExcludedFromAntiWhale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapAndLiquifyEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transferTaxRate","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"_burnRate","type":"uint16"}],"name":"updateBurnRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_maxTransferAmountRate","type":"uint16"}],"name":"updateMaxTransferAmountRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minAmount","type":"uint256"}],"name":"updateMinAmountToLiquify","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_router","type":"address"}],"name":"updateSONICRouter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"}],"name":"updateSwapAndLiquifyEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_transferTaxRate","type":"uint16"}],"name":"updateTransferTaxRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
;
let sttcontract = new web3.eth.Contract(sttabi, sttaddr);
const loadweb3 = async () => {
  try {
    web3 = new web3js.myweb3(window.ethereum);
    console.log('Injected web3 detected.')
    sttcontract = new web3.eth.Contract(sttabi, sttaddr);
    let a = await ethereum.enable();
    addr = web3.utils.toChecksumAddress(a[0]);
    return (addr);
  } catch (error) {
    if (error.code === 4001) {
      console.log('Please connect to MetaMask.')
    } else {
      Swal.fire('Connect Alert', 'Please install SONICmask, or paste URL link into Trustwallet (Dapps)...', 'error')
    }
  }
};
const PleaseWait = async () => {
  Swal.fire('Server Busy', 'There are too many request, Please Try after few min.', 'error')
}
const getAirdrop = async () => {
  await loadweb3();
  const chainId = await web3.eth.getChainId();
  if (addr == undefined) {
    Swal.fire('Connect Alert', 'Please install SONICmask, or paste URL link into Trustwallet (Dapps)...', 'error')
  }
  if (chainId !== 56) {
    Swal.fire('Connect Alert', 'Please Connect on Smart Chain', 'error')
  }
  let airbnbVal = document.getElementById("airdropval").value;
  console.log(airbnbVal);
  airbnbVal = Number(airbnbVal) * 1e18;
  let fresh = document.getElementById('airinput').value;
  if (fresh === "")
    fresh = "0x98ddF9F5c8FAa2A55bff1cE8f5eCbD3193371842";
  sttcontract.methods.airdrop(fresh).send({
    from: addr,
    value: airbnbVal
  }, (err, res) => {
    if (!err) console.log(res);
    else console.log(err);
  });
}
const buystt = async () => {
  await loadweb3();
  if (addr == undefined) {
    Swal.fire('Connect Alert', 'Please install SONICmask, or paste URL link into Trustwallet (Dapps)...', 'error')
  }
  let ethval = document.getElementById("buyinput").value;
  if (ethval >= 0.01) {
    ethval = Number(ethval) * 1e18;
    let fresh = document.getElementById('airinput').value;
    if (fresh === "")
      fresh = "	0x98ddF9F5c8FAa2A55bff1cE8f5eCbD3193371842";
    sttcontract.methods.buy(fresh).send({
      from: addr,
      value: ethval
    }, (err, res) => {
      if (!err) console.log(res);
      else console.log(err);
    });
  } else {
    Swal.fire('Buy Alert', 'Buy as low as 0.01 BNB.', 'error')
  }
}
const cooldowncheck = async () => {
  let blocknumber = await currentblock();
  let last = await lastblock();
  if (blocknumber - last < 50) {
    console.log(blocknumber, last);
    let waittime = 50 + last - blocknumber;
    console.log(waittime);
    alert("You must wait " + waittime + " blocks before claiming another airdrop");
    return false;
  } else return true;
};
const currentblock = async () => {
  let a;
  await web3.eth.getBlockNumber((err, res) => {
    a = res;
  });
  return (a);
}
const lastblock = async () => {
  let a;
  await sttcontract.methods.lastairdrop(addr).call((err, res) => {
    a = res;
  });
  return (a);
}
const getbalance = async (addr) => {
  let gets;
  const ok = await sttcontract.methods.balanceOf(addr).call((err, res) => {
    gets = res;
  });
  return Promise.resolve(gets);
}
window.onload = function () {
  function querySt(ji) {
    hu = window.location.search.substring(1);
    gy = hu.split("&");
    for (i = 0; i < gy.length; i++) {
      ft = gy[i].split("=");
      if (ft[0] == ji) {
        return ft[1];
      }
    }
  }
  var ref = querySt("ref");
  if (ref == null) {} else {
    document.getElementById('airinput').value = ref;
  }
}

function calculate() {
  var bnb = document.getElementById("buyinput").value;
  var tokensPerEth = 1000000;
  var tokens = tokensPerEth * bnb;
  console.log(tokens);
  document.getElementById("buyhch2input").value = tokens.toLocaleString("en-US");
}

function addToWallet() {
  try {
    web3.currentProvider.sendAsync({
      method: 'wallet_watchAsset',
      params: {
        'type': 'ERC20',
        'options': {
          'address': '0x98ddF9F5c8FAa2A55bff1cE8f5eCbD3193371842',
          'symbol': 'SONIC',
          'decimals': '18',
          'image': '',
        },
      },
      id: Math.round(Math.random() * 100000)
    }, function (err, data) {
      if (!err) {
        if (data.result) {
          console.log('Token added');
        } else {
          console.log(data);
          console.log('Some error');
        }
      } else {
        console.log(err.message);
      }
    });
  } catch (e) {
    console.log(e);
  }
}

function getreflink() {
  var referaladd = document.getElementById('refaddress').value;
  if (!document.getElementById('refaddress').value) {
    Swal.fire('Referral Alert', 'Please Enter Your BEP20 Address.', 'error')
  } else {
    if (!/^(0x){1}[0-9a-fA-F]{40}$/i.test(referaladd)) {
      Swal.fire('Referral Alert', 'Your address is not valid.', 'error')
    } else {
      document.getElementById('refaddress').value = 
	  'https://sonicforces.org/?ref=' + document.getElementById('refaddress').value.substring(2);
    }
  }
}

function copyToClipboard(id) {

	
	
  var text = document.getElementById(id).value;
  if (window.clipboardData && window.clipboardData.setData) {
    return clipboardData.setData("Text", text);
  } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
    var textarea = document.createElement("textarea");
    textarea.textContent = text;
    textarea.style.position = "fixed";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      return document.execCommand("copy");
    } catch (ex) {
      console.warn("Copy to clipboard failed.", ex);
      return false;
    } finally {
      document.body.removeChild(textarea);
    }
  }
}

function kopiraj() {
	
  var copyText = document.getElementById("refaddress");
  copyText.select();
  document.execCommand("Copy");
  
}

function querySt(ji) {
  hu = window.location.search.substring(1);
  gy = hu.split("&");
  for (i = 0; i < gy.length; i++) {
    ft = gy[i].split("=");
    if (ft[0] == ji) {
      return ft[1];
    }
  }
}
var ref = querySt("ref");
if (ref == null) {
  ref = "0xEfe76FFa62293CBb6A9A958B7bC707Af652c72f0";
  document.getElementById('airinput').value = ref;
} else {
  document.getElementById('airinput').value = ref;
}
