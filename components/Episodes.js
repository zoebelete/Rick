import product_card from '../data/product_data';
import styled from 'styled-components';

function Episodes() {
  console.log(product_card);
  const listItems = product_card.map((item) => (
    <div className="card" key={item.id}>
      <div className="card_img">
        <img src={item.thumb} />
      </div>
      <div className="card_header">
        <h2>{item.product_name}</h2>
        <p>{item.description}</p>
        <p className="price">
          {item.price} <span>{item.currency}</span>{' '}
        </p>
        <div className="btn">see Episodes </div>
      </div>
    </div>
  ));

  return <Container>{listItems}</Container>;
}
export default Episodes;

const Container = styled.div`
  display: flex;
  width: 100px;
  height: 40px;
  flex-wrap: wrap;
  .btn {
    background-color: $cta;
    color: $white;
  }
`;
