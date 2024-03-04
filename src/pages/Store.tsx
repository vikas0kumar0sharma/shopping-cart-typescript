import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json"; 
import { StoreItem } from "../components/StoreItem";

const Store = () => {
  return (
    <>
      <Row lg={3} xs={1} md={2} className="g-3">
        {storeItems.map((item) => {
          return <Col key={item.id}>
            <StoreItem {...item} />
          </Col>;
        })}
      </Row>
    </>
  );
};

export default Store;
