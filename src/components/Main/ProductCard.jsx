import testImage from "../.././assets/testImage.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import convertToPersianDigits from "../../utils/toPersianDigit";

// )____________components________________(
import OffLabel from "./OffLabel";

// _________________________________
function ProductCard({
  bookTitle,
  bookScore,
  productPublisher,
  bookPrice,
  isOff,
  off,
}) {
  return (
    <div className="productCard relative">
      {isOff && <OffLabel offPercent={off} />}

      <div className="productImage">
        <img src={testImage} alt="productImage" />
      </div>
      <div className="productBody px-2">
        <div dir="rtl" className="pt-3 px-1 flex justify-between">
          <div className="mb-5">
            <strong>{bookTitle}</strong>
            <div className="productPublisher">
              <p>
                <span className="me-1">ناشر:</span>
                {productPublisher}
              </p>
            </div>
          </div>
          <span className="bookScore">
            <span>
              <FontAwesomeIcon
                icon={faStar}
                style={{ fontSize: ".75rem", color: "#c8a62a" }}
              />
            </span>
            <span>
              {bookScore
                ? convertToPersianDigits(bookScore)
                : convertToPersianDigits(0.0)}
            </span>
            از
            <span>{convertToPersianDigits(5)}</span>
          </span>
        </div>

        <div
          className="productFooter flex justify-between items-center"
          dir="rtl"
        >
          {/* --------------- product pricing section ------------- */}
          <div>
            <div className="offPrice">
              {isOff && <del>{convertToPersianDigits(bookPrice)}</del>}
            </div>
            <div className="bookPrice font-bold mt-1">
              {convertToPersianDigits(bookPrice)}
              <span className="toman"> تومان</span>
            </div>
          </div>
          {/* ------------  product button section  ------------- */}
          <div className="flex gap-2 ">
            <button className="productLikeBtn">
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <button className="productShopBtn">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
// dont forget to add the off elemnt to the upper of the card
