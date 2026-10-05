import convertToPersianDigits from "../../utils/toPersianDigit";

function OffLabel({ offPercent }) {
  return (
    <div className="absolute offLabel">{`${convertToPersianDigits(offPercent)}% تخفیف`}</div>
  );
}

export default OffLabel;
