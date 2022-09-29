import classes from './Payment.module.scss';
import Accordeon from '../../components/accordeon/Accordeon';
const Payment = (props) => {

    const questions = [{
        title: "Why don't I see my saved card at checkout?" ,
        text: "For security reasons, when we save your card we only allow it to be used for orders that are being delivered to an address for which you've previously used the card. So if you've moved house or placing an order for delivery to a friend or relative, you need to re-enter your card details (and check the 'Save My Card Securely For Future Purchases' checkbox). Next time you order for delivery to that address the card will appear as a payment option."
    },
    {
        title: "Can I delete a saved card from my account?",
        text: "Yes, go to My Account > My Payment Methods and you'll see all cards saved to your account with the option to 'delete' any you no longer want stored."
    },
    {
        title: "Are my card details secure?" ,
        text: "Yes, we never store your full card details, only a token (that we use for future purchases) and enough information to display on the website so that you know which card it is, i.e. the last 4 digits of the card number. Also, we only allow the card to be used when the same delivery address has been used for the card before, which reduces the risk of someone accessing your HITE.IO account and ordering with your saved card."
    },
    {
        title: "How do I add another card to my account?",
        text: "You can do this at the checkout when you pay for your next order. Use the credit card payment option, and tick 'Save My Card Securely For Future Purchases' when filling out your new card details."
    },
    {
        title: "Which card types can be saved?",
        text: "You can save any Visa, MasterCard or American Express card."
    },
    {
        title: "Can I pay by cheque or purchase order?" ,
        text: "We're unable to accept cheque's or purchase orders as a form of payment."
    },
    {
        title: "How can I pay for my order?",
        text: "We accept all major credit and debit cards including Visa Credit, Visa Debit and Mastercard. We also accept American Express and PayPal."
    },
    ]

    return (
        <div>
            <div className={classes["payment__hero"]}>
                <span  className={classes["payment__hero-title"]}>Payment</span>
            </div>
            <div className={classes['payment__accordeon']}>{questions.map(({title, text}) => (
                <Accordeon title={title} text={text}/>
            ))}</div>
            
        </div>
    )
}

export default Payment;