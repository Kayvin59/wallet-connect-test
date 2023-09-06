// import { Web3Button } from '@web3modal/react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

export default function Homepage() {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector()
  })
  const { disconnect } = useDisconnect()

  return (
    <div>
        <h1>Wallet Connect</h1>
        {/* <Web3Button /> */}
        {isConnected ? (
          <div>
            <p>Connected to {address}</p>
            <button onClick={() => disconnect()}>Disconnect</button>
          </div>
        ) : (
          <button onClick={() => connect()}>Connect</button>
        )}
    </div>
  )
}
