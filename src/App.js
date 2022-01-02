import styled from 'styled-components';
import Table from './components/Table';
import Cabinet from './components/Cabinet';
import Welcome from './components/Cabinet/Welcome';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ethers } from "ethers";
import { useEffect, useState } from 'react';

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  max-width: 97%;
  height: 100vh;
`;

const LoaderWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

function App() {
  const [accountNumber, setAccountNumber] = useState(0);
  const [balance, setBalance] = useState(0);
  const [network, setNetwork] = useState('');
  const [provider] = useState(new ethers.providers.Web3Provider(window.ethereum));
  const [loggedIn, setloggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [timestamp, setTimestamp] = useState('');

  useEffect(() => {
    (async () => {
      const isMetaMaskConnected = async () => {
        const accounts = await provider.listAccounts();
        return accounts;
      }
      let network = (await provider.getNetwork());
      network = network.name.charAt(0).toUpperCase() + network.name.slice(1);

      let account = await isMetaMaskConnected().then((accs) => {
        return accs[0];
      })

      if(typeof account != 'undefined' && account.length) {
        let balance = await provider.getBalance("ethers.eth");
        balance = ethers.utils.formatEther(balance);

        if(account && typeof account != 'undefined') {
          account = `${account.slice(0, 5)}...${account.slice(account.length - 5, account.length)}` 
        }
        setAccountNumber(account);
        setBalance(balance);
        setNetwork(network)
        setloggedIn(true);
      }
      setTimeout(() => {
        setIsLoading(false)
      }, 1000);
    })();
    
  }, [loggedIn, provider]);

  const handleChange = (data) => {
    console.log(data);
    setTimestamp(data);
  }

  const LogIn = e => {
    window.ethereum.request({ method: 'eth_requestAccounts' }).then((data) => {
      setloggedIn(true);
    });
  }
    
  return (
    <Container>
      {(isLoading && 
        <LoaderWrap>
          <Loader
            type="BallTriangle"
            color="#fff"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        </LoaderWrap>
      )}
      {(loggedIn && !isLoading &&
        
          <div>
            <Header>
              <Cabinet data={accountNumber} img={'/images/id.svg'} text={'Account ID:'} width={'25%'}></Cabinet>
              <Cabinet data={(+balance).toFixed(4)} img={'/images/wallet.svg'} text={'Balance:'} width={'25%'}></Cabinet>
              <Cabinet data={network} img={'/images/network.svg'} text={'Network:'} width={'25%'}></Cabinet>
            </Header>
            <Cabinet data={`Last Refreshed: ${timestamp}`} img={'/images/exchange.svg'} text={'Crypto Currency'} width={''}></Cabinet>
            <Table onChange={(e) => handleChange(e)}></Table>
          </div>
        
      )}
      {(!loggedIn && !isLoading &&
        <Welcome onClick={(e) => LogIn(e)}></Welcome>
      )}

    </Container>
  );
}

export default App;
