"use strict";

// Vue.js
const app = new Vue({
    el: "#app",
    data: {
        // Mix
        mix: {
            phoneNumber: "(555) 802-1234",
            email: "info@yourcompany.com",        
            copyright: "© 2020 • Avada Consultant • Powered by WordPress",
            submitData: "By submitting my data I agree to be contacted",
            marketingExpert: "Marketing Consultant Expert",
            hubSpotChat: "This is a free HubSpot live chat. You can create your own customers with Avada & HubSpot!",
        },
        
        // Placeholder texts
        placeholders: {
            placeholderLongText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor placerat luctus. Nullam sit amet ante sed orci convallis gravida et at massa.",
            placeholderText: "Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus nec ut leo. Integer consectetur.",
            placeholderShortText: "Quisque aliquet, libero consequat elementum convallis, erat risus imperdiet pellentesque sem neque eget.",
            placeholderShortTextSecond: "Curabitur ac leo nunc vestibulum"
        },
            
        // Buttons
        buttons: {
            consultationText: "Get a Consultation",
            freeQuote: "Free Quote",
            services: "Our Services",
            callback: "Get a Callback",
            caseStudies: "Read More Case Studies",
            workWithUs: "Why Work With Us",
            resources: "Explore All Resources"
        },

        // Header data
        header: {
            navbarLogo: "images/avada-marketing-logo.png",
            navbarSections: ["Home", "Services", "Why Us", "Case Studies", "About", "Blog"],
            jumbotron: {
                title: "Unlock Your Online Growth Potential",
                par: "Online marketing to secure customer retention, leads, and sales. We focus on the bigger picture."
            }
        },

        // Section(s) - Features
        featuresSection: {
            brand: {
                image: "images/svg/first.svg",
                par: "Business Growth",
                title: "Increase Brand Awareness"
            },
            sales: {
                image: "images/svg/second.svg",
                par: "Investors in People",
                title: "In-House Sales Training"
            },
            socialProof: {
                image: "images/svg/third.svg",
                par: "Social Media Analysis",
                title: "Harness Your Social Proof"
            }
        },

        // Section - Brands data
        brandsSection: {
            title: "Some Brands We Work With",
            images: [
                {
                    image: "images/abstract.png"                    
                },
                {
                    image: "images/cglobal.png"
                },
                {
                    image: "images/next.png"
                },
                {
                    image: "images/hemisferio.png"
                },
                {
                    image: "images/spaces.png"
                },
                {
                    image: "images/digitalbox.png"
                }
            ]
        },

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

        // Section - Team data
        teamSection: {
            title: "The team at Avada Marketing Consultant is fabulous. They helped us unlock our potential online and offline. We have experienced year on year growth due to their progressive approach.",
            image: "images/large-testimonial.jpg"
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

        // Section - Make-happen data
        makeHappenSection: {
            title: "Let's Make Things Happen",
            paragraph: "The team at Avada Marketing Consultant is fabulous. They helped us unlock our potential online and offline. We have experienced year on year growth due to their progressive approach.",
            name: "George Anderson",
            smallTag: "Digitalbox CEO"
        },

        // Footer data
        footer: {
            title: "Grow Your Online Business Strategically, and Improve Customer Retention.",
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
            }
        }
    }
});