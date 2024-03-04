const CURRENCY_FROMAT=new Intl.NumberFormat(undefined,{
  currency:"USD",
  style:"currency"
})

export function formatCurrency(num:number){
  return CURRENCY_FROMAT.format(num)
}