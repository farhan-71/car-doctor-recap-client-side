import PropTypes from "prop-types";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
const ServicesCard = ({ service }) => {
  const { img, title, price } = service;
  return (
    <>
      <div className="p-6 space-y-4 rounded-md shadow">
        <figure className="">
          <img
            src={img}
            alt={title}
            className="rounded-md object-cover h-[250px] w-full"
          />
        </figure>
        <h4 className="">{title}</h4>
        <div className="flex justify-between pb-4">
          <p className="text-xl font-semibold text-primary">Price: ${price}</p>
          <p className="text-3xl font-semibold text-primary">
            <Link to={"#"}>
              <GoArrowRight />
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
ServicesCard.propTypes = {
  service: PropTypes.object.isRequired,
};
