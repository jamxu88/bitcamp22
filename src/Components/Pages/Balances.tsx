import React from 'react';
import Navigation from "../Widgets/Navigation";
import '../../Static/Styles/Balance.css';
import MuseCard from '../../Static/Images/MuseCard.png';
import { Card, Button } from 'react-bootstrap';

function Balances() {
    return (
        <>
            <Navigation />
            <div style={{backgroundColor: "black"}}>
                <div className="CardContainer">
                    <h1 style={{color: "white", marginLeft: "10px"}}>Matthew's Muse</h1>
                    <h1 style={{color: "white", marginLeft: "10px", position: "absolute"}}>Total: $400</h1>
                    <h1 style={{color: "white", marginLeft: "40%", marginTop: "30%", position: "absolute"}}>US Dollar: $350</h1>
                    <h1 style={{color: "white", marginLeft: "40%", marginTop: "35%", position: "absolute"}}>Solana: 0.5 ($50)</h1>
                    <img src={MuseCard} alt="MuseCard" height={'50%'} width={'80%'} />
                </div>
                <div className="Recents">
                    <h1 style={{color: "white", alignSelf: 'center'}}>Recent Transactions</h1>
                    <RecentTransactions />
                </div>
            </div>
        </>
    )
}

export function RecentTransactions() {
    const transactionData = [
        {
            productName: "COACH WOMENS City Tote In Signature Canvas",
            buyer: "Lent to Tracy Vu",
            productLink: "https://www.amazon.com/Coach-Womens-Signature-Canvas-Heart/dp/B09RR1GHQ3/ref=lp_23764300011_1_1",
        },
        {
            productName: "Apple iPhone 13 Mini (256GB, Pink) [Locked] + Carrier Subscription",
            buyer: "Lent to Andy Guo",
            productLink: "https://www.amazon.com/Apple-iPhone-Locked-Carrier-Subscription/dp/B09G9N7V46/",
        },
        {
            productName: "Amazon Basics USB Type-C to USB Type-C 2.0 Charger Cable - 6-Foot, White",
            buyer: "Lent to Matthew Nanas",
            productLink: "https://www.amazon.com/AmazonBasics-USB-Type-C-Charger-Cable/dp/B01GGKZ2SC/",
        },
        {
            productName: "Amazon Basics USB Type-C to USB Type-C 2.0 Charger Cable - 6-Foot, White",
            buyer: "Lent to Matthew Nanas",
            productLink: "https://www.amazon.com/AmazonBasics-USB-Type-C-Charger-Cable/dp/B01GGKZ2SC/",
        }
    ]

    const viewProduct = (productLink: string) => {
        window.open(productLink, "_blank")
    }

    return (
        <>
            { 
                transactionData.map((card) => {
                    return (
                        <div className="FeedCardContainer">
                            <Card className="FeedCard">
                                <Card.Body>
                                    <Card.Title style={{color: 'white'}}>{card.productName}</Card.Title>
                                    <Card.Text style={{color: 'white'}}>
                                        {card.buyer}
                                    </Card.Text>
                                    <Button variant="primary" style={{color: 'white'}} onClick={() => viewProduct(card.productLink)}>View on {card.productLink.split(".")[1]}</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })
            }
        </>
    )
}


export default Balances;