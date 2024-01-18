import React, { useState } from "react";
import iconStar from "../images/icon-star.svg";
import phoneIllustration from "../images/illustration-thank-you.svg";

const Hero = () => {
  const [isRateSubmitted, setIsRateSubmitted] = useState(false);
  const [userRate, setUserRate] = useState("");

  const onUserClick = () => {
    setIsRateSubmitted(true);
  };

  const setUserRateFn = (e) => {
    setUserRate(e);
  };

  return (
    <>
      {!isRateSubmitted ? (
        <div className="container">
          <div className="content">
            <div className="content__inner">
              <div className="content__star-wrapper">
                <img src={iconStar} alt="star"></img>
              </div>
              <h2 className="content__headline">How did we do?</h2>
              <p className="content__paragraph">
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </p>

              <ul className="content__rating">
                <li
                  onClick={() => {
                    setUserRateFn(1);
                  }}
                >
                  1
                </li>
                <li
                  onClick={() => {
                    setUserRateFn(2);
                  }}
                >
                  2
                </li>
                <li
                  onClick={() => {
                    setUserRateFn(3);
                  }}
                >
                  3
                </li>
                <li
                  onClick={() => {
                    setUserRateFn(4);
                  }}
                >
                  4
                </li>
                <li
                  onClick={() => {
                    setUserRateFn(5);
                  }}
                >
                  5
                </li>
              </ul>

              <button className="content__btn" onClick={onUserClick}>
                S U B M I T
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="content">
            <div className="content__inner">
              <div className="content__phone-wrapper">
                <img src={phoneIllustration} alt="phone-illustration"></img>
              </div>
              <p className="content__user-rate">
                You selected {userRate} out of 5
              </p>
              <h2 className="content__headline text-center">Thank you!</h2>
              <p className="content__paragraph text-center">
                We appreciate you taking the time to give a rating. If you ever
                need more support, don't hesitate to get in touch!
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
