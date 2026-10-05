import testImage from "../../../assets/testImage.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import convertToPersianDigits from "../../../utils/toPersianDigit";
import OffLabel from "./OffLabel";

function ProductCard({
  bookTitle,
  bookScore = 0,
  productPublisher,
  bookPrice,
  isOff = false,
  off = 0,
}) {
  const finalPrice = Number(bookPrice) || 0;

  const originalPrice =
    isOff && off > 0 ? Math.round(finalPrice / (1 - off / 100)) : finalPrice;

  return (
    <article className="productCard">
      <div className="productImageWrapper">
        {isOff && off > 0 && <OffLabel offPercent={off} />}

        <img
          src={testImage}
          alt={bookTitle}
          className="productImage"
          loading="lazy"
        />
      </div>

      <div className="productBody">
        <div className="productMeta">
          <div className="productInfo">
            <h3 className="productTitle" title={bookTitle}>
              {bookTitle}
            </h3>

            <p className="productPublisher">
              <span>ناشر:</span>
              {productPublisher}
            </p>
          </div>

          <div className="bookScore" aria-label={`امتیاز ${bookScore} از 5`}>
            <FontAwesomeIcon icon={faStar} aria-hidden="true" />
            <span>{convertToPersianDigits(bookScore)}</span>
            <small>/ {convertToPersianDigits(5)}</small>
          </div>
        </div>

        <div className="productFooter">
          <div className="productPricing">
            {isOff && off > 0 && (
              <del className="offPrice">
                {convertToPersianDigits(originalPrice)}
              </del>
            )}

            <div className="bookPrice">
              <strong>{convertToPersianDigits(finalPrice)}</strong>

              <span className="toman">تومان</span>
            </div>
          </div>

          <div className="productActions">
            <button
              type="button"
              className="productLikeBtn"
              aria-label={`افزودن ${bookTitle} به علاقه‌مندی‌ها`}
            >
              <FontAwesomeIcon icon={faHeart} aria-hidden="true" />
            </button>

            <button
              type="button"
              className="productShopBtn"
              aria-label={`افزودن ${bookTitle} به سبد خرید`}
            >
              <FontAwesomeIcon icon={faPlus} aria-hidden="true" />

              <span className="addToCartText">افزودن به سبد خرید</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
