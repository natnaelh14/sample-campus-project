export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const currencyFormatter = new Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "USD",
});
