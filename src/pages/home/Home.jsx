import { useState } from "react";
import { toursList } from "../../data";
import { HeroHeader } from "../../components/hero-header/HeroHeader";
import { Pagination } from "../../components/pagination/Pagination";
import { TourList } from "../../components/tours/TourList";
import { SortInput } from "../../components/sort-input/SortInput";
import { Banner } from "../../components/banner/Banner";
import { NewsLetter } from "../../components/news-letter/NewsLetter";
import { Services } from "../../components/services/Services";
export const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortItem, setSortItem] = useState("recommended");
  const TOUR_PER_PAGE = 6;
  /* Alogorithm pagination */
  const pages = Math.ceil(toursList.length / TOUR_PER_PAGE);
  const startIndex = (currentPage - 1) * TOUR_PER_PAGE;
  const endInedex = currentPage * TOUR_PER_PAGE;

  /* algorithm sort */
  const sortedTourList =
    sortItem === "low"
      ? toursList.sort((a, b) => a.priceFrom - b.priceFrom)
      : sortItem === "high"
      ? toursList.sort((a, b) => b.priceFrom - a.priceFrom)
      : toursList.sort((a, b) => b.rating - a.rating);

  const orderedtours = sortedTourList.slice(startIndex, endInedex);
  return (
    <div>
      <HeroHeader />
      <Services />
      <SortInput
        setSortItem={setSortItem}
        sortItem={sortItem}
        toursLength={toursList.length}
      />
      <TourList toursList={orderedtours} />
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Banner />
      <NewsLetter />
    </div>
  );
};
