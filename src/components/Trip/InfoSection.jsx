import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export const InfoSection = ({ trip }) => {
    const plugin = useRef(Autoplay({ delay: 2500, stopOnInteraction: false }));

    // Static photo URLs
    const staticPhotos = [
        "https://www.holidify.com/images/bgImages/MUNNAR.jpg",
        "https://english.mathrubhumi.com/image/contentid/policy:1.9523109:1714451101/nilgiri%20mountain%20train.jpg?$p=620cf64&f=16x10&w=852&q=0.8",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/f4/be/64/20160103-120213-largejpg.jpg?w=1200&h=1200&s=1",
        "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/14/dcc8e5f2e74663f97c32c12d2476f4b7_1000x1000.jpg",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/164027842.jpg?k=e7732452744f680036245b641a0676ecb82b57fe34c30ec98fe4e30379a793cc&o=&hp=1",
        "https://www.tusktravel.com/blog/wp-content/uploads/2021/03/Lakkidi-View-Point-Wayanad.jpg",
    ];

    return (
        <Card className="my-4 border-x-2 p-5">
            <div className="container">
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full h-full"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent>
                        {staticPhotos.map((photoUrl, index) => (
                            <CarouselItem key={index}>
                                <Card>
                                    <CardContent className="p-1 rounded-2xl">
                                        <img
                                            src={photoUrl}
                                            alt={`Static photo ${index + 1}`}
                                            className="h-48 md:h-[499px] object-cover w-full rounded-2xl"
                                        />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <div>
                <h2 className="font-extrabold text-2xl md:text-4xl mt-2 md:mt-9 lg:mt-14 text-blue-700 dark:text-customGreen">
                    🧭 {trip?.userSelection?.location?.label || "KODAIKANAL" || "MUNNAR"} 🧭
                </h2>
                <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-sm md:text-sm lg:text-base items-center md:flex-row gap-3 lg:gap-5 mt-5 md:mt-9 lg:mt-12 text-center">
                    <h2 className="p-2 px-3 bg-blue-700 dark:bg-customGreen rounded-full dark:text-slate-800 text-white font-semibold">
                        📅 {trip?.userSelection?.noOfDays || 0} Day 📅
                    </h2>
                    <h2 className="p-2 px-3 bg-blue-700 dark:bg-customGreen rounded-full dark:text-slate-800 text-white font-semibold">
                        💰 {trip?.userSelection?.budget || "N/A"} budget 💰
                    </h2>
                    <h2 className="p-2 px-3 bg-blue-700 dark:bg-customGreen rounded-full dark:text-slate-800 text-white font-semibold">
                        👥 Traveler: {trip?.userSelection?.people || 1} 👥
                    </h2>
                </div>
            </div>
        </Card>
    );
};
