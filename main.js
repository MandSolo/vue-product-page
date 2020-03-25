var app = new Vue({
  el: "#app",
  data: {
    brand: "Vue Mastery",
    product: "Socks",
    selectedVariant: 0,
    inStock: false,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantID: 2234,
        variantColor: "green",
        variantImage: "assets/vmSocks-green-onWhite.jpg"
      },
      {
        variantID: 2235,
        variantColor: "blue",
        variantImage: "assets/vmSocks-blue-onWhite.jpg"
      }
    ],
    cart: 0
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateProduct(index) {
      this.selectedVariant = index;
    }
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    }
  }
});
