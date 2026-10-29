const sliderItems = [
    'RARE BOTANICALS',
    'PRECIOUS SCIENCE',
    'TIMELESS LUXURY',
    'FREE SHIPPING OVER $200',
];

const BannerSlider = () => {
    return (
        <div className="slider_wrapper">
            <div className="slider_track">
                {[0, 1].map((group) => (
                    <ul
                        className="slider_list"
                        key={group}
                        aria-hidden={group === 1}
                    >
                        {sliderItems.map((item) => (
                            <li key={item}>
                                {item}
                                <span className="separator">✦</span>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default BannerSlider;