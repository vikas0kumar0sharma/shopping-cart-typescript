import { Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { CartItem } from "./CartItem"
import { formatCurrency } from "../utilities/formatCurrency"
import items from "../data/items.json"

type ShoppingCartProps={
  isOpen:boolean
}

export function ShoppingCart({isOpen}:ShoppingCartProps){
  const {closeCart,cartItem}=useShoppingCart()
  return(
    <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {
            cartItem.map(item=>
              {
                return <CartItem key={item.id} {...item} />
              }
              )
          }

          <div className="ms-auto fw-bold fs-5">
            Total {" "}
            {
              formatCurrency(
                cartItem.reduce((total,Citem)=>{
                  const item=items.find(it=>it.id===Citem.id)
                  return total+(item?.price || 0)*Citem.quantity
                },0)
              )
            }
          </div>

        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}