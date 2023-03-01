import "../styles/globals.css";
//INTRNAL IMPORT
import { NavBar, Footer } from "../components/componentsindex";
import { NFTMarketplaceProvider } from "../Context/NFTMarketplaceContext";
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import Cors from 'cors';

// Initialize the CORS middleware


import { Web3Modal } from "@web3modal/react";

import { configureChains, createClient, WagmiConfig , useAccount} from "wagmi";

import { bsc, bscTestnet} from "wagmi/chains";

const chains = [bsc, bscTestnet];

// Wagmi client
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: "586477ebda74dbcdef7066bfaa8e6d03" }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({
    projectId: "586477ebda74dbcdef7066bfaa8e6d03",
    version: "1", // or "2"
    appName: "web3Modal",
    chains,
  }),
  provider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);



const MyApp = ({ Component, pageProps }) => {

  return(
    <div>
       <WagmiConfig client={wagmiClient}>
       <NFTMarketplaceProvider>
        <NavBar />
        <Component  {...pageProps} />
        <Footer />
        <Web3Modal
            projectId="586477ebda74dbcdef7066bfaa8e6d03"
            ethereumClient={ethereumClient}
          />
          
          </NFTMarketplaceProvider>
         
       </WagmiConfig>
    
    
    </div>
  );
}


export default MyApp;
