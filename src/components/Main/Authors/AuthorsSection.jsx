import AuthorCard from "./AuthorCard";
import Carousel from "../Carousel";

import { authors } from "../../../data/authors";

function AuthorsSection({ title }) {
  return (
    <Carousel
      title={title}
      viewMoreText="همه نویسندگان"
      viewMoreHref="#"
      showNavigation={false}
      autoPlay={false}
      className="authorsCarousel"
    >
      {authors.map((author) => (
        <AuthorCard key={author.id} {...author} />
      ))}
    </Carousel>
  );
}

export default AuthorsSection;
