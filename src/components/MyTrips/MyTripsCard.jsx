import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../ui/card";

function MyTripsCard({ trip }) {
    const [photoUrl, setPhotoUrl] = useState("");

    const staticPhotos = [
        "https://www.holidify.com/images/bgImages/MUNNAR.jpg",
        "https://english.mathrubhumi.com/image/contentid/policy:1.9523109:1714451101/nilgiri%20mountain%20train.jpg?$p=620cf64&f=16x10&w=852&q=0.8",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/f4/be/64/20160103-120213-largejpg.jpg?w=1200&h=1200&s=1",
        "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/14/dcc8e5f2e74663f97c32c12d2476f4b7_1000x1000.jpg",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/164027842.jpg?k=e7732452744f680036245b641a0676ecb82b57fe34c30ec98fe4e30379a793cc&o=&hp=1",
        "https://www.tusktravel.com/blog/wp-content/uploads/2021/03/Lakkidi-View-Point-Wayanad.jpg",
    ];

    // Function to get a random photo URL from the staticPhotos array
    const getRandomPhotoUrl = () => {
        const randomIndex = Math.floor(Math.random() * staticPhotos.length);
        return staticPhotos[randomIndex];
    };

    useEffect(() => {
        if (trip) {
            // Assign a random photo URL if trip exists
            setPhotoUrl(getRandomPhotoUrl());
        }
    }, [trip]);

    return (
        <Card className="my-4 border-x-4 p-2">
            <Link to={"/view-trip/" + trip?.id}>
                <div className="font-serif xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl hover:scale-105 transition-all rounded-2xl px-1 cursor-pointer">
                    <img
                        className="h-56 w-full rounded-2xl p-2"
                        src={photoUrl ? photoUrl : "/trip.jpg"}
                        alt="Trip Destination"
                    />
                    <div className="my-6 mx-2 ">
                        <h2 className="font-semibold text-sm md:text-lg mt-2 text-left">
                            📍 {trip?.userSelection?.location?.label}
                        </h2>
                        <h2 className="font-semibold text-sm md:text-lg mt-2 text-left">
                            📅 No of Days: {trip?.userSelection?.noOfDays}
                        </h2>
                        <h2 className="font-semibold text-sm md:text-lg mt-2 text-left">
                            💰 Budget: {trip?.userSelection?.budget}
                        </h2>
                        <h2 className="font-semibold text-sm md:text-lg mt-2 text-left">
                            👥 Traveler: {trip?.userSelection?.people}
                        </h2>
                    </div>
                </div>
            </Link>
        </Card>
    );
}

export default MyTripsCard;
