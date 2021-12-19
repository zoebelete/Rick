import styled from 'styled-components';

function Sidebar() {
  return (
    <Container>
      <Header>
        <img src="./rick.png" width={128} height={77} />

        <Search>
          <img src="./search.png" width={20} height={10} />

          <Input>
            <input type="input" placeholder="search charachters" />
          </Input>
        </Search>
      </Header>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  flex: 1;
`;

const Input = styled.div``;

const Search = styled.div`
  display: flex;
  flex:1;
  margin:100px;
  border:1px solid;
  border-radius:5px;
 

  
  }
`;

const Header = styled.div`
  display: flex;
  flex: 1;
  margin: 20px;
  padding: center;
  height: 40px;
  align-items: center;
  justify-content: space-between;
`;
