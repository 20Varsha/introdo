import React, { useState } from "react";
import "../assets/styles/Tabs.css";
import userIcon from "../assets/icons/user-remove.png"; // Assuming correct path
import managerIcon from "../assets/icons/manager.png";
import employeeIcon from "../assets/icons/employee.png";

const TabsComponent = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            title: "For HR Managers",
            icon: userIcon,
            content: {
                descriptionOne: "Handle employee information digitally on our user-friendly platform. With automation, accuracy is guaranteed for reliable record-keeping.",
                descriptionTwo: "Simplify onboarding, capture essential employee data and automate payroll for seamless employee experiences.",
                descriptionThree: "Facilitate company-wide communication, keeping everyone in the loop with important announcements, subsidiary changes and HR policy updates.",
                bullets: ["Seamless Workforce Management", "Smooth Employee Onboarding", "Enhance Internal Communication"],
            },
            colorClass: "blue-tab",
        },
        {
            title: "Line Managers",
            icon: managerIcon,
            content: {
                descriptionOne: "Simplify task management for a boost in team productivity. Clear assignments, monitored deadlines and smoother workflows await!",
                descriptionTwo: "Welcome new team members with ease – our automated workflows minimize admin hassle for quick integration into team dynamics.",
                descriptionThree: "Keep the team engaged and informed on project milestones, fostering a positive, motivated environment for collaborative success.",
                bullets: ["Seamless Workforce Management", "Smooth Employee Onboarding", "Enhance Internal Communication"],
            },
            colorClass: "purple-tab",
        },
        {
            title: "Employees",
            icon: employeeIcon,
            content: {
                descriptionOne: "Get clarity on tasks, access key information and perform tasks independently, fostering a culture of trust and ownership.",
                descriptionTwo: "Experience a pain-free onboarding experience with timely and accurate payroll processes – a positive start to your new role!",
                descriptionThree: "Stay connected with real-time updates, polls, and surveys through our HRMS for an engaging and informed experience.",
                bullets: ["Seamless Workforce Management", "Smooth Employee Onboarding", "Enhance Internal Communication"],
            },
            colorClass: "orange-tab",
        },
    ];

    return (
        <div className="tabs-wrapper">
            <div className="tabs-header">
                <h1>Triple The Benefits!</h1>
                <div className="tabs-navigation">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className={`tab-button ${tab.colorClass} ${activeTab === index ? "active" : ""}`}
                            onClick={() => setActiveTab(index)}
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
                        {tabs[activeTab].content?.bullets?.map((bullet, index) => (
                            <li key={index}>{bullet}</li>
                        ))}
                    </ul>
                </div>
                <div className="tabs-main-content">
                    <div className="tabs-card">
                        <p>{tabs[activeTab].content.descriptionOne}</p>
                        <hr />
                        <p>{tabs[activeTab].content.descriptionTwo}</p>
                        <hr />
                        <p>{tabs[activeTab].content.descriptionThree}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabsComponent;
