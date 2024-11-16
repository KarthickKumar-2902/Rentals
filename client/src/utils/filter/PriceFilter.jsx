import  { useState } from 'react';
import Slider from 'rc-slider';


const PriceFilter = () => {

        const [range, setRange] = useState([40000, 100000]);

const handleSliderChange = (value) => {
    setRange(value);
};

return (
    <>
    <div className="price-range-container">
        <div className="budget-title">Budget</div>
        <Slider
            range
            min={0}
            max={200000}
            step={1000}
            defaultValue={range}
            onChange={handleSliderChange}
            className="price-slider"
        />
        <div className="price-inputs">
            <input
                type="number"
                value={range[0]}
                onChange={(e) => setRange([+e.target.value, range[1]])}
            />
            <span className="separator"> - </span>
            <input
                type="number"
                value={range[1]}
                onChange={(e) => setRange([range[0], +e.target.value])}
            />
        </div>
    </div>
    </>
)
};

export default PriceFilter;
// PriceRange.js


