import HeroBanners from "../components/home/HeroBanners/HeroBanners";
import PopularCarsGrid from "../components/home/PopularCarsGrid/PopularCarsGrid";
import RecomendationCarsGrid from "../components/home/RecomendationCarsGrid/RecomendationCarsGrid";

export default function Home() {
    return (
        <>
            <HeroBanners />
            <PopularCarsGrid />
            <RecomendationCarsGrid />
        </>
    );
}
