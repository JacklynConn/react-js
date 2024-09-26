import Card from "./Card";

const Product = () => {
  const shoes = [
    {
      img: "https://images.pexels.com/photos/19166246/pexels-photo-19166246/free-photo-of-studio-shoot-of-shoes-against-black-background.jpeg",
      brand: "Adidas",
      detail: "Uploaded on November 18th, 2023",
      price: 100,
    },
    {
      img: "https://images.pexels.com/photos/4161710/pexels-photo-4161710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      brand: "Nike",
      detail: "Uploaded on November 18th, 2023",
      price: 50,
    },
    {
      img: "https://images.pexels.com/photos/4161710/pexels-photo-4161710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      brand: "Puma",
      detail: "Uploaded on November 18th, 2023",
      price: 150,
    },
  ];
  return (
    <div>
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Product;
