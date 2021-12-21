import React,{useState} from "react";
import Pagination from "../Pagination/Pagination";
import ProductItem from "./ProductItem";

import './Products.css';

const DUMMY_PRODUCTS = [
    {
        id: "12321341",
        title: "Mi Smart Band 5 – India’s No. 1 Fitness Band, 1.1-inch AMOLED Color Display, Magnetic Charging, 2 Weeks Battery Life, Personal Activity Intelligence (PAI), Women’s Health Tracking",
        price: 20.96,
        image: "https://m.media-amazon.com/images/I/71X8NdnCsvL._SL1500_.jpg"
    },
    {
        id: "49531218094",
        title: "The Power of Your Subconscious Mind",
        price: 12.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/41+CqNWoutS._SX460_BO1,204,203,200_.jpg"
    },
    {

        id: "49012123850",
        title: "Allen Solly Men's Jacket",
        price: 40.99,
        image: "https://m.media-amazon.com/images/I/61Er0HEUkfL._UL1500_.jpg"

    },
    {
        id: "49538120942",
        title: "ASUS VivoBook 15 (2020), 39.6 cm HD, Dual Core Intel Celeron N4020, Thin and Light Laptop (4GB RAM/256GB SSD/Integrated Graphics/Windows 10 Home/Transparent Silver/1.8 Kg), X515MA-BR002T",
        price: 239.0,
        image: "https://m.media-amazon.com/images/I/71S8U9VzLTL._SL1500_.jpg"
    },
    {

        id: "49038112502",
        title: "Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage)",
        price: 129.99,
        image: "https://m.media-amazon.com/images/I/81vDZyJQ-4L._SL1500_.jpg"

    },
    {

        id: "4903823125022",
        title: "Yonex GR 303 Aluminum Blend Badminton Racquet with Full Cover",
        price: 19.99,
        image: "https://m.media-amazon.com/images/I/617Hi4pc0pL._SL1500_.jpg"

    },
    {
        id: "12321232341",
        title: "Mi Smart Band 5 – India’s No. 1 Fitness Band, 1.1-inch AMOLED Color Display, Magnetic Charging, 2 Weeks Battery Life, Personal Activity Intelligence (PAI), Women’s Health Tracking",
        price: 20.96,
        image: "https://m.media-amazon.com/images/I/71X8NdnCsvL._SL1500_.jpg"
    },
    {
        id: "4953833094",
        title: "The Power of Your Subconscious Mind",
        price: 12.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/41+CqNWoutS._SX460_BO1,204,203,200_.jpg"
    },
    {
        id:"32324324324",
        title: "Dell MS116 1000DPI USB Wired Optical Mouse",
        price: 10.99,
        image:"https://m.media-amazon.com/images/I/51lOpzsvv2L._SL1297_.jpg"
    },
    {
        id:"3232432asa4324",
        title: "F Gear Luxur Brown 25 Liter Laptop Backpack (2404)",
        price: 15.99,
        image:"https://m.media-amazon.com/images/I/81RtwUjQiFL._SL1500_.jpg"
    },
    {
        id:"32324asd324324",
        title: "Navneet Youva | Soft Bound | Long Book | 21 cm X 29.7 cm | Single Line | 228 Pages | Pack of 6",
        price: 8.99,
        image:"https://m.media-amazon.com/images/I/81or8yhJ3wL._SL1500_.jpg"
    },
    {
        id:"32324ds3324324",
        title: "Casio MJ-12GST GST Calculator (Black)",
        price: 18.99,
        image:"https://m.media-amazon.com/images/I/719xvUnsDvL._SL1500_.jpg"
    },
  

]

const Products = () => {

    const [currentPage, setCurrentPage] = useState(1);
    let itemsPerPage=3;

   
    const indexOfLastItem=currentPage*itemsPerPage;
    const indexOfFirstItem=indexOfLastItem-itemsPerPage;
    const currentItems=DUMMY_PRODUCTS.slice(indexOfFirstItem,indexOfLastItem);

    const setPage=(pageNumber)=>{
        setCurrentPage(pageNumber)
    }


    return (
        <div>
        <h2 className="products-heading">Explore Products </h2>
        <div className="products">
            {currentItems.map(product => (
                <ProductItem
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    rating={product.rating}
                />
            ))}
        </div>
        <Pagination setPage={setPage} currentPage={currentPage} totalPages={Math.ceil(DUMMY_PRODUCTS.length/itemsPerPage)}/>
        </div>
    )
}

export default Products;