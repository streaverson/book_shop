function AuthorCard({ name, image, bookCount }) {
  return (
    <a href="#" className="authorCard" aria-label={`مشاهده آثار ${name}`}>
      <div className="authorAvatarWrapper">
        <img src={image} alt={name} className="authorImage" loading="lazy" />
      </div>

      <div className="authorInfo">
        <h3 className="authorName">{name}</h3>

        {bookCount !== undefined && (
          <span className="authorBookCount">
            {convertBookCount(bookCount)} اثر
          </span>
        )}
      </div>
    </a>
  );
}

function convertBookCount(value) {
  return String(value).replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]);
}

export default AuthorCard;
