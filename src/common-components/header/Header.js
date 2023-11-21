import styled from 'styled-components';
import { Colors } from '../../shared/DesignTokens';
import Nav from '../nav/Nav';

const Head = styled.header`
    height: 12vh;
    background-color: ${Colors.RED_800};
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin: 0, 10px;
    
`;

const HeaderText = styled.div`
  text-align: center;
  font-size:2.5em;
  display:flex;
  margin-left:15px;

  color:${Colors.NEUTRAL_WHITE};
  font-weight:bold;
 
`;

function Header() {
    return (
        <Head>
          <HeaderText>Global <br></br>Solution</HeaderText>
          <Nav/>
        </Head>
    );
}

export default Header;
