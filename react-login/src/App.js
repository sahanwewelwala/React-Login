import logo from './logo.svg';
import './App.css';
import styled  from 'styled-components';
import { AccountBox } from './componens/accountBox';

const AppContainer = styled.div`
  margin-top:10%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;
 


function App() {
  return ( <AppContainer>
    <AccountBox/>
    
    </AppContainer>
  );
}

export default App;
