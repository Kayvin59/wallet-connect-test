import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'
import './App.css'
import Homepage from './components/Homepage'

const chains = [mainnet, polygon, arbitrum]
const projectId = "5eede06d05f06ea04b7baafed30e5851"

// viem Public Client for reading from the Ethereum network.
const { publicClient } = configureChains(
  chains, 
  [w3mProvider({projectId})]
)

// Wagmi Config to manages wallet connection state and configuration
const wagmiconfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  provider: publicClient
})

const ethereumClient = new EthereumClient(wagmiconfig)
function App() {

  return (
    <>
      <WagmiConfig config={wagmiconfig}>
        <Homepage />
      </WagmiConfig>

      {/* Core component */}
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  )
}

export default App
