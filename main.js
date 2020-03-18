var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    image: "./assets/vmSocks-green-onWhite.jpg",
    inStock: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantID: 2234,
        variantColor: "green"
      },
      {
        variantID: 2235,
        variantColor: "blue"
      }
    ]
  }
});
