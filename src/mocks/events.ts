const Events = (name: string, image: string, date: Date, discount: number, airdrop = false) => ({
  name,
  image,
  date,
  discount,
  airdrop
});

export const events = [
  Events("Blockchain Life Forum 2024", "blockchain-life.webp", new Date(2024, 3, 15), 10),
  Events("ETHDenver", "eth-denver.webp", new Date(2024, 1, 23), 0, true),
  Events("Paris Blockchain Week 2024", "paris-blockchain-week.webp", new Date(2024, 3, 8), 15),
  Events("NFT Paris", "nft-paris.webp", new Date(2024, 1, 23), 0, true),
  Events("European Blokchain Convention", "european-blockchain-convention.webp", new Date(2024, 8, 25), 20),
];