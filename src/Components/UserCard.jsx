import React from "react";
import "./UserCard.css";
import PropTypes from "prop-types";

const UserCard = ({
  imageURL,
  avatarShape = "round",
  name,
  description = "Testing Description",
  backgroundColor = "red",
  title,
}) => {
  return (
    <>
      <div data-testid="usercard" className={`"usercard" ${backgroundColor}  `}>
        <div>
          <div style={{ display: "flex" }}>
            <img
              className={`${avatarShape}`}
              style={{ width: "150px", height: "150px" }}
              src={imageURL}
              alt=""
            />
          </div>
          <div>
            <div>{name}</div>
            <div>{title}</div>
            <div>{description}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageURL: PropTypes.string,
  title: PropTypes.string,
  avatarShape: PropTypes.oneOf(["round", "square"]),
  description: PropTypes.string,
  backgroundColor: PropTypes.string,
};

UserCard.defaultProps = {
  avatarShape: "round",
  description: "Testing Description",
  backgroundColor: "red",
};
