import { facebook, instagram, twitter } from "../assets/icons";
import { solar3, cctv3, repair2 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About" },
    { href: "#services", label: "Service" },
    { href: "#gallery", label: "Gallery" },
    { href: "#technician", label: "Technician" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
];


export const statistics = [
    { value: '50+', label: 'Shops' },
    { value: '100k+', label: 'Customers' },
];

export const services = [
    {
        imgURL: solar3,
        name: "Solar Panel Installation",
        price: "₱ 1200.20",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet"
    },
    {
        imgURL: cctv3,
        name: "CCTV Installation",
        price: "₱ 1210.20",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet"
    },
    {
        imgURL: repair2,
        name: "Appliance Repair",
        price: "₱ 520.20",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet"
    },
];


export const footerLinks = [
    {
        title: "Services",
        links: [
            { name: "Solar Panel Installation", link: "/" },
            { name: "CCTV Installation", link: "/" },
            { name: "Appliances Repair", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@meraki.com", link: "mailto:customer@meraki.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
