import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100 //cents
    const publishableKey = 'pk_test_uW63UK0Acs7TkYBLO7zgVFs800ohRRvQGG' //from the tripe acct

    //https://github.com/azmenak/react-stripe-checkout for all properties

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
    };

    return (
        <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken} //success call back
        stripeKey={publishableKey}
     
        />
    )
}

export default StripeCheckoutButton;
