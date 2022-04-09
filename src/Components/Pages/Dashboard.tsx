import React from "react";
import '../../Static/Styles/Dashboard.css';
import Navigation from "../Widgets/Navigation";
import { Chart } from "react-google-charts";
import { Card, Button } from 'react-bootstrap';
import { ChevronDoubleRightIcon, ChevronDoubleLeftIcon, GiftIcon, DotsCircleHorizontalIcon, CalendarIcon } from '@heroicons/react/solid';

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
                    <h1 style={{color: "white", alignSelf: 'center'}}>
                        <CalendarIcon className="h-5 w-5 text-blue-500" height={50} style={{marginBottom: 10}} /> MuseFeed
                    </h1>
                    <p style={{color: "#C5C5C5", alignSelf: 'center'}}>Live notifications and monitor for activity within your friend groups!</p>
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
        },
        titleTextStyle: {
            color: "white",  
            fontSize: 20,  
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
        titleTextStyle: {
            color: "white",
            fontSize: 20,  
        }
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
            date: "4/09/2022",
            status: "Outbound",
            vendor: "Tracy Vu",
            name: "Matthew Nanas",
            value: "50",
            comments: "I need some doordash credits bro"
        },
        {
            date: "4/09/2022",
            status: "Inbound",
            vendor: "Matthew Nanas",
            name: "Matthew Nanas",
            value: "50",
            comments: "I need some valorant skins PLEASEEE"
        },
        {
            date: "4/09/2022",
            status: "Transaction",
            vendor: "apartments.com",
            name: "Tracy Vu",
            value: "50",
            comments: "none"
        },
        {
            date: "4/09/2022",
            status: "Transaction",
            vendor: "apartments.com",
            name: "Tracy Vu",
            value: "50",
            comments: "none"
        },
    ]

    const cardStatus = (card: any) => {
        if (card.status == "Transaction") {
            return `${card.name} authorized a transaction at ${card.vendor}`;
        } else if (card.status == "Inbound") {
            return `You requested $${card.value} from ${card.name}`;
        } else if (card.status == "Outbound") {
            return `${card.name} requested $${card.value} from you`;
        }
    }

    return (
        <>
            { 
                feedData.map((card) => {
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
                                    <Card.Title style={{color: 'white'}}>{card.date} {card.status} <ReturnIcon status={card.status} /></Card.Title>
                                    <Card.Text style={{color: 'white'}}>
                                        <ReturnSubIcon status={card.status} /> {cardStatus(card)}
                                    </Card.Text>
                                    <Card.Text style={{color: '#B0B0B0'}}>
                                        Comments: {card.comments}
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

export function ReturnIcon(props: any): JSX.Element {
    if (props.status == "Transaction") {
        return (
            <>
                <GiftIcon className="h-5 w-5 text-blue-500" height={25} style={{marginBottom: 3}} />
            </>
        );
    } else if (props.status == "Inbound") {
        return (
            <>
                <ChevronDoubleLeftIcon className="h-5 w-5 text-blue-500" height={25} style={{marginBottom: 3}} />
            </>
        );
    } else if (props.status == "Outbound") {
        return (
            <>
                <ChevronDoubleRightIcon className="h-5 w-5 text-blue-500" height={25} style={{marginBottom: 3}} />
            </>
        );
    } else {
        return <></>
    }
}

export function ReturnSubIcon(props: any): JSX.Element {
    if (props.status == "Transaction") {
        return (
            <>
                <DotsCircleHorizontalIcon className="h-5 w-5 text-blue-500" height={25} color="#4395F5" style={{marginBottom: 3}} />
            </>
        );
    } else if (props.status == "Inbound") {
        return (
            <>
                <DotsCircleHorizontalIcon className="h-5 w-5 text-blue-500" height={25} color="#A5FF9D" style={{marginBottom: 3}} />
            </>
        );
    } else if (props.status == "Outbound") {
        return (
            <>
                <DotsCircleHorizontalIcon className="h-5 w-5 text-blue-500" height={25} color="#FF9DFB" style={{marginBottom: 3}} />
            </>
        );
    } else {
        return <></>
    }
}

export default Dashboard;