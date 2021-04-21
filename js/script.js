"use strict";

// Vue.js
const app = new Vue({
    el: "#app",
    data: {
        // Navbar data
        navbarSections: ["Home", "Services", "Why Us", "Case Studies", "About", "Blog"],
        phoneNumber: "(555) 802-1234",

        // Section(s) - Features data
        featuresText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor placerat luctus. Nullam sit amet ante sed orci convallis gravida et at massa.",
        consultationText: "Get a Consultation",

        // Section - Organisation data

        // Footer data
        footerTitle: "Grow Your Online Business Strategically, and Improve Customer Retention.",
        services: {
            title: "Services",
            links: ["Marketing Plan", "Sales Development", "Digital Marketing", "Pricing", "Why Us", "Case Studies"]
        },
        resources: {
            title: "Resources",
            links: ["Learning Center", "Video Tutorials", "Customers", "Blog"]
        },
        company: {
            title: "Company",
            links: ["Who We Are", "Contact Us", "Careers"]
        },
        copyright: "© 2020 • Avada Consultant • Powered by WordPress",
        email: "info@yourcompany.com"
    }
});