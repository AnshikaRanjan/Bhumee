import './portfolio.css';

const Portfolio = () =>{
    return(
        <div className="portfolio">
        <div className="container">
            <div className="images">
            <img
          src='https://www.wordstream.com/wp-content/uploads/2022/10/real-estate-website-examples-feature.jpg'
          alt='img'>
        </img>
            </div>
            <div className="images1">
            <img
          src='https://www.wordstream.com/wp-content/uploads/2022/10/real-estate-website-examples-feature.jpg'
          alt='img'>
        </img>
            </div>
            <div className='text-box'>
            <p>
            The main aim of our product is to build a user-friendly DApp for buying and selling real estate. Our platform leverages the power of blockchain technology for Peer-to-Peer, easy, transparent, and secure communication between users and introduces a groundbreaking 
            concept –<b> Fractional Ownership</b>. 
            By breaking down property ownership into manageable tokens, we empower users to invest in high-value real estate with unprecedented ease and flexibility. 
            Our DApp aims for flexible and simple trading, attracting a broader audience.
            </p>
            </div>
        </div>
        </div>
    );
}

export default Portfolio;