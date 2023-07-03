import React from 'react';
import './Subscription.css';

const Subscription = () => {
  // internal styles
  const subscriptionStyles = {
    renewStyles: {
      color: '#000',
      backgroundColor: 'yellow',
      border: 'dashed 5px blue',
      borderRadius: '10px',
      padding: '20px',
    },
    btnStyles: {
      border: 'solid 2px red',
      backgroundColor: 'red',
      color: '#fff',
      padding: '10px 20px',
    },
  };

  return (
    // External CSS - recommended
    <div className="subscrption text-center">
      <h3 className="subscription-info">
        You are an Active Subscriber of Netflix
      </h3>
      {/*Inline CSS - Never ever use */}
      <p
        style={{
          color: 'red',
          backgroundColor: 'yellow',
          border: 'solid 3px red',
          padding: '20px',
          borderRadius: '6px',
        }}
      >
        Your subscription ends in 2 weeks
      </p>
      {/*internal css - not recommended often */}
      <p style={subscriptionStyles.renewStyles}>
        Renew now and get 50% discount. Apply Coupon: OFF50
      </p>
      <button type="button" style={subscriptionStyles.btnStyles}>
        Renew Now
      </button>
    </div>
  );
};
export default Subscription;
