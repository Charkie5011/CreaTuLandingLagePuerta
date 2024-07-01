export const productos = [
  {
    id: 0,
    name: "Blista Super Secret Pre-serie",
    brand: "Dinka",
    price: 2000000,
    category: "compacts",
    stock: 3,
    dealer: "supersec",
    img: "https://i.imgur.com/BQ7MpnF.jpeg",
  },
  {
    id: 1,
    name: "Blista Super Secret",
    brand: "Dinka",
    price: 1000000,
    category: "compacts",
    stock: 20,
    dealer: "supersec",
    img: "https://i.imgur.com/DQp80Yc.jpeg",
  },
  {
    id: 2,
    name: "Comet S2 Super Secret",
    brand: "Pfister",
    price: 150000,
    category: "sports",
    stock: 100,
    dealer: "supersec",
    img: "https://i.imgur.com/1VJpKmL.jpeg",
  },
  {
    id: 3,
    name: "Elegy RH5 Super Secret",
    brand: "Annis",
    price: 1045000,
    category: "coupes",
    stock: 100,
    dealer: "supersec",
    img: "https://i.imgur.com/R8liEPa.jpeg",
  },
  {
    id: 4,
    name: "Elegy RH5 Super Secret V6",
    brand: "Annis",
    price: 200500,
    category: "coupes",
    stock: 20,
    dealer: "supersec",
    img: "https://i.imgur.com/qPEWA7f.jpeg",
  },
  {
    id: 5,
    name: "Growler Super Secret",
    brand: "Pfister",
    price: 1070000,
    category: "sports",
    stock: 30,
    dealer: "supersec",
    img: "https://i.imgur.com/ZbaeYZI.jpeg",
  },
  {
    id: 6,
    name: "RT3000 Super Secret",
    brand: "Dinka",
    price: 1020000,
    category: "coupes",
    stock: 150,
    dealer: "supersec",
    img: "https://i.imgur.com/5Q6B7Ci.jpeg",
  },
  {
    id: 7,
    name: "Savestra HPB",
    brand: "Annis",
    price: 1027000,
    category: "sportsclassics",
    stock: 5,
    dealer: "supersec",
    img: "https://i.imgur.com/hpaqOVs.jpeg",
  },
  {
    id: 8,
    name: "Euros Retro JDM Super Secret",
    brand: "Annis",
    price: 1040000,
    category: "coupes",
    stock: 160,
    dealer: "supersec",
    img: "https://i.imgur.com/Y7mENSe.jpeg",
  },
  {
    id: 9,
    name: "Remus",
    brand: "Annis",
    price: 1016000,
    category: "coupes",
    stock: 200,
    dealer: "supersec",
    img: "https://i.imgur.com/sBdehtw.jpeg",
  },
  {
    id: 10,
    name: "ZR 350",
    brand: "Annis",
    price: 1041000,
    category: "sports",
    stock: 60,
    dealer: "supersec",
    img: "https://i.imgur.com/HMfEp4S.jpeg",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    const productosFiltrados = productos.filter(
      (prod) => prod.category === category
    );

    setTimeout(() => {
      resolve(productosFiltrados);
    }, 2000);
  });
};
