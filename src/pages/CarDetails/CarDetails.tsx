import { Link, useParams } from "react-router-dom";
import {
    ArrowLeft,
    BriefcaseBusiness,
    CarFront,
    Snowflake,
    Users,
} from "lucide-react";

import { cars } from "../../data/cars";
import styles from "./CarDetails.module.css";

function CarDetails(){
    const { id } = useParams();
    const car = cars.find(
        (car) => car.id === Number(id)
    );
    if(!car){
        return(
            <section className={styles.notFound}>
                <div className="container">
                    <h1>Car not found</h1>
                    <p>The Vehicle you are looking for does not exist</p>
                    <Link to="/fleet" className={styles.backLink}>
                    <ArrowLeft size={18}/> Back to fleet 
                    </Link>
                </div>
            </section>
        );
    }
    return(
        <section className={styles.page}>
            <div className="container">
                <Link to="/fleet" className={styles.backLink}>
                    <ArrowLeft size={18}/>
                    Back to fleet
                </Link>
                <div className={styles.layout}>
                    <div className={styles.visual}>
                        {car.image ? (
                            <img src={car.image} alt={car.name} className={styles.image}/>
                        ) : (
                            <div className={styles.placeholder}>
                                <CarFront size={72} strokeWidth={1.3}/>
                                <span>Client photo pending </span>
                            </div>
                        )}
                    </div>
                    <div className={styles.details}>
                        <span className={styles.category}>
                            {car.category}
                        </span>
                        <h1>{car.name}</h1>
                        <p className={styles.transmission}>
                            {car.transmission}
                        </p>
                        <div className={styles.price}>
                            <span>From</span>
                            <strong>{car.pricePerDay}€ </strong>
                            <small> / day</small>
                        </div>
                        <ul className={styles.specs} aria-label={`${car.name} specifications`}>
                            <li>
                                <Users size={20} aria-hidden="true"/>
                                <span>{car.passengers} seats</span>
                            </li>
                            <li>
                                <BriefcaseBusiness size={20} aria-hidden="true"/>
                                <span>{car.luggage} bags</span>
                            </li>
                            <li>
                                <CarFront size={20} aria-hidden="true"/>
                                <span>{car.doors} doors</span>
                            </li>
                            {car.airConditioning && (
                                <li>
                                    <Snowflake size={20} aria-hidden="true"/>
                                    <span>Air Conditioning</span>
                                </li>
                            )}
                        </ul>
                        <Link to="/booking" className={styles.bookingLink}>
                            Reserve this car
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CarDetails; 