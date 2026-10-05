import ProductCard from "./ProductCard";
import Carousel from "../Carousel/Carousel";

function BooksSection({ title, books }) {
  if (!books?.length) {
    return null;
  }

  return (
    <Carousel
      title={title}
      viewMoreText="مشاهده همه"
      viewMoreHref="#"
      showNavigation={true}
      autoPlay={true}
      interval={3500}
    >
      {books.map((book) => (
        <ProductCard key={book.id} {...book} />
      ))}
    </Carousel>
  );
}

export default BooksSection;
