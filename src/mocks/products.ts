const Product = (name: string, price: number, image: string, category: string, subCategory: string, exclusive = false, exclusiveDiscount = 0) => ({
  name,
  price,
  image,
  category,
  subCategory,
  exclusive,
  exclusiveDiscount
});

export const products = [
  Product("Hat X White", 15, "layerx-black-hat-white.png", "merchandising", "hat"),
  Product("T-shirt Layerx Black", 25, "layerx-black-tshirt.png", "merchandising", "t-shirt"),
  Product("Hat White X Blue", 15, "layerx-blue-hat-white.png", "merchandising", "hat"),
  Product("Mug X Galaxy", 40, "layerx-galaxy-cup.png", "merchandising", "mug", true),
  Product("Hat Galaxy Red", 15, "layerx-galaxy-hat-red.png", "merchandising", "hat"),
  Product("T-shirt Galaxy White", 25, "layerx-galaxy-white-tshirt.png", "merchandising", "t-shirt", false, 5),
  Product("Hat LayerX White", 15, "layerx-hat-white.png", "merchandising", "hat"),
  Product("Mug X Black", 30, "layerx-icon-cup-black.png", "merchandising", "mug", false, 15),
  Product("Mug X White", 30, "layerx-icon-cup-white.png", "merchandising", "mug"),
  Product("T-shirt Vitalik Jesus Black", 50, "vitalik-jesus-black-tshirt.png", "merchandising", "t-shirt", true),
  Product("T-shirt Vitalik Jesus White", 50, "vitalik-jesus-tshirt.png", "merchandising", "t-shirt", true),
  Product("Sticker X White", 5, "layerx-icon-sticker.png", "merchandising", "sticker"),
  Product("Sticker Galaxy White", 5, "layerx-galaxy-sticker.png", "merchandising", "sticker"),
  Product("Bag Galaxy White", 15, "layerx-galaxy-bag.png", "merchandising", "bag"),
  Product("Bag LayerX Blue", 15, "layerx-bag-blue.png", "merchandising", "bag"),
  Product("Jacket LayerX Blue", 40, "layerx-jacket-blue.png", "merchandising", "jacket", true),
  Product("Jacket X White", 40, "layerx-icon-jacket-white.png", "merchandising", "jacket", false, 10),
  Product("Jacket LayerX White", 40, "layerx-blue-jacket-white.png", "merchandising", "jacket"),
];