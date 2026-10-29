
const discoverlist = [
    {
        id: 1,
        name: "Rosa Damascena",
        country: 'BULGARIA',
        desc: 'Deep cellular renewal'
    },
    {
        id: 2,
        name: "Gold Peptides",
        country: 'SWITZERLAND',
        desc: 'Firmness & Elasticity'
    },
    {
        id: 3,
        name: "Black Orchid",
        country: 'MADAGASCAR',
        desc: 'Antioxide protection'
    },
    {
        id: 4,
        name: "Hyaluronic Complex",
        country: 'LABORATORY',
        desc: '72-hour hydration'
    },
]

const Discover = () => {
    return (
        <div className="discover_wrapper">
            <div className="container">
                <span>WHAT'S INSIDE</span>
                <h2>
                    Earth's Finest
                </h2>
                <div className="discover_box">
                    {discoverlist.map((product, index) =>

                        <div className="discover_list" key={`${product.id}-${index}`}>
                            <h3>{product.name}</h3>
                            <span>{product.country}</span>
                            <p>{product.desc}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Discover