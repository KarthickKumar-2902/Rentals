import "./filter.css";
// import PriceFilter from "./PriceFilter";
const Filter = () => {
  return (
    <>
      <section className="roomListing top-32 sticky">
        <section className="filterSection">
          <div className="filterHeading">
            <span>Filter</span>
          </div>
          <div className="propertyTypeFilter">
            <span>Property Types</span>
            <div className="ptInput">
              <div className="pt1">
                <input type="checkbox" name="Appartment" id="Appartment" />
                <label htmlFor="Appartment">Appartment</label>
              </div>
              <div className="pt2">
                <input type="checkbox" name="officeSpace" id="officeSpace" />
                <label htmlFor="officeSpace">Office Space</label>
              </div>
              <div className="pt2">
                <input type="checkbox" name="Appartment" id="Appartment" />
                <label htmlFor="Appartment">Appartment</label>
              </div>
            </div>
          </div>
          {/* <PriceFilter/>         */}
          <div className="priceRangeFilter">
            <span>Price Range</span>
            <input
              type="range"
              min="0"
              max="10000"
              step="100"
              id="priceRange"
            />
            <div className="priceRangeValues">
              <span>$0</span>
              <span id="priceRangeValue">$10000</span>
            </div>
          </div>
          <div className="sortByFilter">
            <span>Sort By</span>
            <select id="sortBy">
              <option value="priceAsc">Price: Low to High</option>
              <option value="priceDesc">Price: High to Low</option>
              <option value="ratingDesc">Rating: High to Low</option>
              <option value="ratingAsc">Rating: Low to High</option>
            </select>
          </div>
        </section>
      </section>
    </>
  );
};

export default Filter;
