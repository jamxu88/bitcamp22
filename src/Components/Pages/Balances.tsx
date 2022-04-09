import React from 'react';
import Navigation from "../Widgets/Navigation";
import '../../Static/Styles/Balance.css';
import MuseCard from '../../Static/Images/MuseCard.png';
import { Card, Button } from 'react-bootstrap';
import { CreditCardIcon } from '@heroicons/react/solid';

function Balances() {
    return (
        <>
            <Navigation />
            <div style={{backgroundColor: "black"}}>
                <div className="CardContainer">
                    <h1 style={{color: "white", marginLeft: "10px"}}>My Balance</h1>
                    <div className="BalanceCard">
                        <p>$59.19</p>
                    </div>
                    <Button variant="light" className="DepositBalance">
                        Deposit To Balance <CreditCardIcon className="h-5 w-5 text-blue-500" height={20} style={{marginBottom: 2}} /> 
                    </Button>
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
            date: "4/09/2022",
            value: "50",
        },
        {
            date: "4/09/2022",
            value: "50",
        },
        {
            date: "4/09/2022",
            value: "50",
        },
        {
            date: "4/09/2022",
            value: "50",
        },
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
                            <hr
                                style={{
                                    color: "white",
                                    backgroundColor: "white",
                                    height: 2
                                }}
                            />
                            <Card className="FeedCard">
                                <Card.Body>
                                    <Card.Title style={{color: 'white'}}>{card.date}</Card.Title>
                                    <Card.Text style={{color: 'white'}}>
                                        Deposit of ${card.value}
                                    </Card.Text>
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