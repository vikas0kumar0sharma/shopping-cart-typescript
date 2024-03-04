import { Button, Stack } from "react-bootstrap";
import items from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

type CartItem = {
  id: number;
  quantity: number;
};

export function CartItem({id,quantity}:CartItem){
  const item=items.find(it=>it.id===id)
  if(item==null) return null

  const {removeFromCart}=useShoppingCart()

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img src={item.imgUrl} style={
        {width:"125px",height:"75px",objectFit:"cover"}
      } />
      <div className="me-auto">
        <div>
          {item.name}{" "}{
            quantity>1 && <span className="text-muted" style={{fontSize:"0.65rem"}}>x{quantity}</span>
          }
        </div>
        <div>
          <span className="text-muted" style={{fontSize:"0.75rem"}}>{formatCurrency(item.price)}</span>
        </div>
      </div>
      <div>{formatCurrency(item.price*quantity)}</div>
      <Button variant="outline-danger" size="sm" onClick={()=>removeFromCart(id)}>&times;</Button>
    </Stack>
  )
}