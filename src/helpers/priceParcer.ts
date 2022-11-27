export const MillionPriceParcer = (price: number) => {
  const stringPrice = price.toString()
  return stringPrice[0] + " " + stringPrice.substring(1, 4) + " " + stringPrice.substring(4, 7) + " $"
}