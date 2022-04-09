import React from "react";
import '../../Static/Styles/Dashboard.css';
import Navigation from "../Widgets/Navigation";
import { Chart } from "react-google-charts";
import { Card, Button } from 'react-bootstrap';

function Dashboard() {
    return (
        <>
            <Navigation />
            <div style={{backgroundColor: "black"}}>
                <div className="ChartsContainer">
                    <PersonalSpendingsChart />
                    <MerchantsChart />
                </div>
                <div className="Feed">
                    <h1 style={{color: "white", alignSelf: 'center'}}>Feed</h1>
                    <Feed />
                </div>
            </div>
        </>
    )
}

export function PersonalSpendingsChart() {
    const personalData = [
        ["Day", "Total Spent"],
        ["Monday", 1000],
        ["Tuesday", 1170],
        ["Wednesday", 660],
        ["Thursday", 1030],
        ["Friday", 1030],
        ["Saturday", 1030],
        ["Sunday", 1030],
    ];

    const personalOptions = {
        title: "Personal Spending",
        curveType: "function",
        legend: { position: "bottom" },
        backgroundColor: 'black',
        hAxis: {
            textStyle: {color: '#FFF'}
        },
        vAxis: {
            textStyle: {color: '#FFF'}
        }
    };
    
    return (
        <>
            <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={personalData}
                options={personalOptions}
            />
        </>
    )
}

export function MerchantsChart() {
    const merchantsData = [
        ["Day", "Total Spent"],
        ["Monday", 1000],
        ["Tuesday", 1170],
        ["Wednesday", 660],
        ["Thursday", 1030],
        ["Friday", 1030],
        ["Saturday", 1030],
        ["Sunday", 1030],
    ];

    const merchantsOptions = {
        title: "Merchants & Stores",
        curveType: "function",
        legend: { position: "bottom", },
        backgroundColor: 'black',
        hAxis: {
            textStyle: {color: '#FFF'}
        },
        vAxis: {
            textStyle: {color: '#FFF'}
        },
    };
    
    return (
        <>
            <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={merchantsData}
                options={merchantsOptions}
            />
        </>
    )
}

export function Feed() {
    const feedData = [
        {
            productName: "COACH WOMENS City Tote In Signature Canvas",
            buyer: "Tracy Vu",
            productLink: "https://www.amazon.com/Coach-Womens-Signature-Canvas-Heart/dp/B09RR1GHQ3/ref=lp_23764300011_1_1",
        },
        {
            productName: "Apple iPhone 13 Mini (256GB, Pink) [Locked] + Carrier Subscription",
            buyer: "Andy Guo",
            productLink: "https://www.amazon.com/Apple-iPhone-Locked-Carrier-Subscription/dp/B09G9N7V46/",
        },
        {
            productName: "Amazon Basics USB Type-C to USB Type-C 2.0 Charger Cable - 6-Foot, White",
            buyer: "Matthew Nanas",
            productLink: "https://www.amazon.com/AmazonBasics-USB-Type-C-Charger-Cable/dp/B01GGKZ2SC/",
        }
    ]

    const viewProduct = (productLink: string) => {
        window.open(productLink, "_blank")
    }

    return (
        <>
            { 
                feedData.map((card) => {
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

export default Dashboard;