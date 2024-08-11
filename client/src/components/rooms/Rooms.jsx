import react from "react"

const Room = () => {
    return (
        <>
        <section className="roomListing">
            <section className="filterSection">
                <div className="filterHeading">
                    <span>Filter</span>
                </div>
                <div className="propertyTypeFilter">
                    <span>Property Types</span>
                    <div className="ptInput">
                        <div className="pt1">
                            <input type="checkbox" name="Appartment" id="Appartment" for="Appartment"/>
                            <label htmlFor="Appartment">Appartment</label>
                        </div>
                        <div className="pt2">
                            <input type="checkbox" name="officeSpace" id="officeSpace" for="officeSpace"/>
                            <label htmlFor="officeSpace">Office Space</label>
                        </div>
                        <div className="pt2">
                            <input type="checkbox" name="Appartment" id="Appartment" for="Appartment"/>
                            <label htmlFor="Appartment">Appartment</label>
                        </div>
                    </div>
                </div>
            </section>
        </section>
        </>
    )
}
export default Room