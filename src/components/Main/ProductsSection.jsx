import ProductCard from "./ProductCard";
import Carousel from "./Carousel";

const sampleProducts = [
  {
    bookTitle: "کشتن مرغ مینا",
    productPublisher: "گاج",
    bookPrice: 420000,
    isOff: true,
    off: 10,
  },
  {
    bookTitle: "کشتن مرغ مینا",
    productPublisher: "گاج",
    bookPrice: 420000,
    isOff: true,
    off: 10,
  },
  {
    bookTitle: "کشتن مرغ مینا",
    productPublisher: "گاج",
    bookPrice: 420000,
    isOff: true,
    off: 10,
  },
  {
    bookTitle: "کشتن مرغ مینا",
    productPublisher: "گاج",
    bookPrice: 420000,
    isOff: true,
    off: 10,
  },
  {
    bookTitle: "کشتن مرغ مینا",
    productPublisher: "گاج",
    bookPrice: 420000,
    isOff: true,
    off: 10,
  },
  {
    bookTitle: "کتاب سوم",
    productPublisher: "نشر نی",
    bookPrice: 350000,
    isOff: false,
    off: 0,
  },
  {
    bookTitle: "کتاب چهارم",
    productPublisher: "نشر چشمه",
    bookPrice: 280000,
    isOff: true,
    off: 25,
  },
];

function ProductsSection({ productsSectionTitle }) {
  return (
    <section className="productSection">
      <h3 className="productSectionTitle px-5 xl:px-[150px]">
        {productsSectionTitle}
      </h3>
      <Carousel>
        {sampleProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </Carousel>
    </section>
  );
}
export default ProductsSection;
