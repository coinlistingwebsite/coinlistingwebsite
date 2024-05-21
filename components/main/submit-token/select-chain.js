import React from "react";

const SelectChain = ({ formData, setFormData }) => {
  return (
    <>
      <div className="my-3">
        <span className="submit_token_text">Chain of Contract Address 1</span>

        <select
          className="select w-full select-bordered"
          onChange={(event) =>
            setFormData({ ...formData, chain: event.target.value })
          }
        >
          <option defaultValue>
            -
          </option>
          <option value="ethereum">Ethereum</option>
          <option value="bsc">Binance Smart Chain</option>
          <option value="solana">Solana</option>
          <option value="avalanche">Avalanche C-Chain</option>
          <option value="base">Base</option>
          <option value="tba">TBA</option>
          <option value="ton">Ton</option>
          <option value="matic">Matic</option>
          <option value="polygon">Polygon</option>
          <option value="acala">Acala</option>
          <option value="achain">Achain</option>
          <option value="algorand">Algorand</option>
          <option value="arbitrum">Arbitrum One</option>
          <option value="ardor">Ardor</option>
          <option value="astar">Astar</option>
          <option value="aurora">Aurora</option>
          <option value="zksync">Zksync</option>
          <option value="avalanchedfk">Avalanche DFK</option>
          <option value="binancecoin">Binance Coin</option>
          <option value="bitcichain">Bitcichain</option>
          <option value="bitgert">Bitgert</option>
          <option value="bitrock">Bitrock</option>
          <option value="bitshares">Bitshares</option>
          <option value="boba">Boba</option>
          <option value="cardano">Cardano</option>
          <option value="celo">Celo</option>
          <option value="chiliz">Chiliz</option>
          <option value="coinex">Coinex Smart Chain</option>
          <option value="conflux">Conflux eSpace</option>
          <option value="cosmos">Cosmos</option>
          <option value="counterparty">Counterparty</option>
          <option value="cronos">Cronos</option>
          <option value="cube">Cube</option>
          <option value="defichain">DeFiChain</option>
          <option value="dogechain">DogeChain</option>
          <option value="echelon">Echelon</option>
          <option value="elastos">Elastos</option>
          <option value="energi">Energi</option>
          <option value="eos">EOS</option>
          <option value="everscale">Everscale</option>
          <option value="evmos">Evmos</option>
          <option value="factom">Factom</option>
          <option value="fantom">Fantom Opera</option>
          <option value="fuse">Fuse</option>
          <option value="fusion">Fusion Network</option>
          <option value="xdai">Gnosis</option>
          <option value="gochain">GoChain</option>
          <option value="harmony">Harmony</option>
          <option value="hsc">Hoo Smart Chain</option>
          <option value="heco">Huobi ECO Chain Mainnet</option>
          <option value="hydra">Hydra</option>
          <option value="icon">Icon Chain</option>
          <option value="iotex">IoTeX</option>
          <option value="kardiachain">KardiaChain</option>
          <option value="karura">Karura</option>
          <option value="kava">Kava</option>
          <option value="komodo">Komodo</option>
          <option value="kcc">KuCoin Community Chain</option>
          <option value="kusama">Kusama</option>
          <option value="mantle">Mantle</option>
          <option value="mdex">mdex</option>
          <option value="avax">Avax</option>
          <option value="metaverse-etp">MetaVerse-ETP</option>
          <option value="meter">Meter</option>
          <option value="metis">Metis</option>
          <option value="milkomeda">Milkomeda</option>
          <option value="mixin">Mixin Network</option>
          <option value="moonbeam">Moonbeam</option>
          <option value="moonriver">Moonriver</option>
          <option value="muuchain">Muu Chain</option>
          <option value="near">Near Protocol</option>
          <option value="nem">Nemchain</option>
          <option value="neo">Neochain</option>
          <option value="nuls">Nuls</option>
          <option value="nxt">NXT</option>
          <option value="oasisemerald">OasisChain</option>
          <option value="oec">OKExChain</option>
          <option value="omni">Omnichain</option>
          <option value="opbnb">opBNB</option>
          <option value="openledger">Openledger</option>
          <option value="optimism">Optimism</option>
          <option value="osmosis">Osmosis</option>
          <option value="polkadot">Polkadot</option>
          <option value="qtum">Qtum</option>
          <option value="xrp">Ripple</option>
          <option value="ronin">Ronin</option>
          <option value="rootstock">Rootstock</option>
          <option value="scroll">Scroll</option>
          <option value="secret">Secret</option>
          <option value="smartbch">Smart Bitcoin Cash</option>
          <option value="sora">Sora</option>
          <option value="stellar">Stellar</option>
          <option value="stratis">Stratis Chain</option>
          <option value="sx">SX</option>
          <option value="syscoin">Syscoin</option>
          <option value="telos">Telos</option>
          <option value="terra">Terra</option>
          <option value="tezos">Tezos</option>
          <option value="theta">Theta</option>
          <option value="thorchain">Thorchain</option>
          <option value="thundercore">Thundercore</option>
          <option value="tombchain">Tombchain</option>
          <option value="tomochain">Tomochain</option>
          <option value="tron">Tron</option>
          <option value="vechain">Vechain</option>
          <option value="velas">Velas</option>
          <option value="vite">Vite</option>
          <option value="wanchain">Wanchain</option>
          <option value="waves">Waves Chain</option>
          <option value="xdc">XinFin</option>
          <option value="yocoin">Yocoin</option>
          <option value="zilliqa">Zilliqa</option>
          <option value="zyx">Zyx</option>
        </select>
      </div>
    </>
  );
};

export default SelectChain;
