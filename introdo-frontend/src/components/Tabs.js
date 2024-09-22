import React, { useState, useEffect } from "react";
import "../assets/styles/Tabs.css";
import userIcon from "../assets/icons/user-remove.png";
import managerIcon from "../assets/icons/manager.png";
import employeeIcon from "../assets/icons/employee.png";
import chat from "../assets/icons/chat.png";
import onboard from "../assets/icons/onboard.png";
import communication from "../assets/icons/communication.png";

const TabsComponent = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = [
        {
            title: "For HR Managers",
            icon: userIcon,
            bullets: [
                { icon: chat, text: "Seamless Workforce Management" },
                { icon: onboard, text: "Smooth Employee Onboarding" },
                { icon: communication, text: "Enhance Internal Communication" },
            ],
            content: {
                descriptionOne: "Handle employee information digitally on our user-friendly platform. With automation, accuracy is guaranteed for reliable record-keeping.",
                descriptionTwo: "Simplify onboarding, capture essential employee data and automate payroll for seamless employee experiences.",
                descriptionThree: "Facilitate company-wide communication, keeping everyone in the loop with important announcements, subsidiary changes, and HR policy updates.",
            },
            colorClass: "blue-tab",
        },
        {
            title: "For Line Managers",
            icon: managerIcon,
            bullets: [
                { icon: chat, text: "Seamless Workforce Management" },
                { icon: onboard, text: "Smooth Employee Onboarding" },
                { icon: communication, text: "Enhance Internal Communication" },
            ],
            content: {
                descriptionOne: "Simplify task management for a boost in team productivity. Clear assignments, monitored deadlines, and smoother workflows await!",
                descriptionTwo: "Welcome new team members with ease – our automated workflows minimize admin hassle for quick integration into team dynamics.",
                descriptionThree: "Keep the team engaged and informed on project milestones, fostering a positive, motivated environment for collaborative success.",
            },
            colorClass: "purple-tab",
        },
        {
            title: "For Employees",
            icon: employeeIcon,
            bullets: [
                { icon: chat, text: "Seamless Workforce Management" },
                { icon: onboard, text: "Smooth Employee Onboarding" },
                { icon: communication, text: "Enhance Internal Communication" },
            ],
            content: {
                descriptionOne: "Get clarity on tasks, access key information, and perform tasks independently, fostering a culture of trust and ownership.",
                descriptionTwo: "Experience a pain-free onboarding experience with timely and accurate payroll processes – a positive start to your new role!",
                descriptionThree: "Stay connected with real-time updates, polls, and surveys through our HRMS for an engaging and informed experience.",
            },
            colorClass: "orange-tab",
        },
    ];

    //Tabs change
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % tabs.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [tabs.length]);

    const handleTabClick = (index) => {
        setActiveTab(index);
        clearInterval();
        setTimeout(() => {
            const interval = setInterval(() => {
                setActiveTab((prev) => (prev + 1) % tabs.length);
            }, 5000);
        }, 0);
    };

    return (
        <div className="tabs-wrapper">
            <div className="tabs-header">
                <button className="single-button mt-4 mb-5">
                    EMPOWER EVERY ROLE
                </button>
                <h1>Triple The Benefits!</h1>
                <div className="tabs-navigation mt-5">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className={`tab-button ${tab.colorClass} ${activeTab === index ? "active" : ""}`}
                            onClick={() => handleTabClick(index)}
                        >
                            <div className="tab-content">
                                <div className={`icon-wrapper ${activeTab === index ? tab.colorClass : ""}`}>
                                    <img
                                        src={tab.icon}
                                        alt={`${tab.title} icon`}
                                        className={`tab-icon ${activeTab === index ? "active-icon" : ""}`}
                                    />
                                </div>
                                <span>{tab.title}</span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
            <div className={`tabs-content ${tabs[activeTab].colorClass}`}>
                <div className="tabs-sidebar">
                    <ul>
                        {tabs[activeTab].bullets?.map((bullet, index) => (
                            <li key={index} className="bullet-item">
                                <div className="bullet-content">
                                    <img src={bullet.icon} alt="Bullet icon" className="bullet-icon" />
                                    <span>{bullet.text}</span>
                                </div>
                                {index < tabs[activeTab].bullets.length - 1 && <hr className="mt-4 mb-4" />}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="tabs-main-content">
                    <div className="tabs-card">
                        <p>{tabs[activeTab].content.descriptionOne}</p>
                        <hr className="mt-4 mb-4" />
                        <p>{tabs[activeTab].content.descriptionTwo}</p>
                        <hr className="mt-4 mb-4" />
                        <p>{tabs[activeTab].content.descriptionThree}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabsComponent;
