// const priceFormatter = (price: number) => {
//   return `Rp${price
//     .toString()
//     .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
// };

// export default priceFormatter;

const priceFormatter = (price: number) => {
  const newFormat = Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumSignificantDigits: 3,
  }).format(price);

  return newFormat;
};

export default priceFormatter;