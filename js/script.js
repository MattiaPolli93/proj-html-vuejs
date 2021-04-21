"use strict";

// Vue.js
const app = new Vue({
    el: "#app",
    data: {
        // Mix
        phoneNumber: "(555) 802-1234",
        email: "info@yourcompany.com",

        // Placeholder texts
        placeholderLongText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor placerat luctus. Nullam sit amet ante sed orci convallis gravida et at massa.",
        placeholderText: "Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus nec ut leo. Integer consectetur.",
        placeholderShortText: "Quisque aliquet, libero consequat elementum convallis, erat risus imperdiet pellentesque sem neque eget.",
        placeholderShortTextSecond: "Curabitur ac leo nunc vestibulum",

        // Buttons
        consultationText: "Get a Consultation",

        // Header data
        navbarSections: ["Home", "Services", "Why Us", "Case Studies", "About", "Blog"],

        // Section - Organisation data
        organisationSection: {
            title: "Trusted by Leading Organisations",
            boxes: [
                {
                    boxPar: "How Spaces attracted five million visitors by improving the content",
                    number: "200%",
                    par: "Higher revenue from digital"
                },
                {
                    boxPar: "Creativity helped Hemisferio to increase their brand reach vertically",
                    number: "10x",
                    par: "Sales increase with the same ad spend"
                },
                {
                    boxPar: "How DigitalBox used AI-powered data insight to boost sales",
                    number: "3-year",
                    par: "Partnership with Avada Consultant"
                }
            ]
        },

        // Section - Optimization data
        optimizationSection: {
            mainTitles: ["We Boost Our Clients’ Bottom Line by Optimizing Their Growth Potential.", "Awards"],
            titles: ["We Build Relationships", "Proprietary Processes"],
            qualities: ["Accountability", "Transparency", "Investment"],
            awards: [
                {
                    image: "images/award-a.png",
                    text: "Winner Seo Master MAGT Smart Start Award 2017"
                },
                {
                    image: "images/award-b.png",
                    text: "Top Social Media Agencies Next Partner 2018"
                },
                {
                    image: "images/award-c.png",
                    text: "10 Fastest Growing Abstract Solution Providers 2019"
                },
                {
                    image: "images/award-d.png",
                    text: "National Excellence Agencie Award Winner 2020"
                }
            ]
        },

        // Section - Resources data
        resourcesSection: {
            title: "Marketing Resources: Insider Advice on How to Increase Online Sales",
            boxes: [
                {
                    title: "Marketing Tips And Tricks For Your Website"
                },
                {
                    title: "How to Write Stunning Blog Post Titles"
                },
                {
                    title: "Techniques to Reduce Facebook Ads Spend"
                }
            ]
        },

        // Section - Resources data
        makeHappenSection: {
            title: "Let's Make Things Happen",
            paragraph: "The team at Avada Marketing Consultant is fabulous. They helped us unlock our potential online and offline. We have experienced year on year growth due to their progressive approach.",
            name: "George Anderson",
            smallTag: "Digitalbox CEO"
        },

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
        copyright: "© 2020 • Avada Consultant • Powered by WordPress"
    }
});