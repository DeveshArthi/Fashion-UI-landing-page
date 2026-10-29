import { useEffect, useRef, useCallback } from 'react';

import product1 from '../assets/ref/products/1.jpg';
import product2 from '../assets/ref/products/2.jpg';
import product3 from '../assets/ref/products/3.jpg';
import product4 from '../assets/ref/products/4.jpg';
import product5 from '../assets/ref/products/5.jpg';


const Products = () => {
    const trackRef = useRef(null);
    const positionRef = useRef(0);
    const pausedRef = useRef(false);
    const loopWidthRef = useRef(0);
    const speedRef = useRef(35);
    const animationRef = useRef(null);
    const lastTimeRef = useRef(null);
    const directionRef = useRef(1);

    // Duplicate products for seamless looping
    const products = [
    {
        id: 1,
        image: product1,
        badge: 'Best Seller',
        category: 'REVITALIZING ESSENCE',
        title: 'Velvet Serum',
        description:
            'A weightless elixir that delivers intense hydration and restores radiance.',
    },
    {
        id: 2,
        image: product2,
        badge: 'New Arrival',
        category: 'HYDRATING COLLECTION',
        title: 'Silk Moisturizer',
        description:
            'Deeply nourishes the skin for a soft, luminous and youthful appearance.',
    },
    {
        id: 3,
        image: product3,
        badge: 'Popular',
        category: 'SKIN RENEWAL',
        title: 'Radiance Cream',
        description:
            'A luxurious formula designed to restore your natural glow.',
    },
    {
        id: 4,
        image: product4,
        badge: 'Exclusive',
        category: 'BOTANICAL ESSENCE',
        title: 'Pure Glow Oil',
        description:
            'A delicate blend of botanical oils that nourishes and revitalizes.',
    },
    {
        id: 5,
        image: product5,
        badge: 'Limited Edition',
        category: 'LUXURY SKINCARE',
        title: 'Golden Elixir',
        description:
            'A premium skincare treatment for radiant and refreshed skin.',
    },
];

    const updatePosition = useCallback(() => {
        const track = trackRef.current;
        const loopWidth = loopWidthRef.current;

        if (!track || !loopWidth) return;

        positionRef.current =
            ((positionRef.current % loopWidth) + loopWidth) % loopWidth;

        track.style.transform =
            `translate3d(${-positionRef.current}px, 0, 0)`;
    }, []);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const measure = () => {
            const firstGroup = track.querySelector('.slider_group');

            if (!firstGroup) return;

            loopWidthRef.current = firstGroup.getBoundingClientRect().width;
            updatePosition();
        };

        measure();

        const observer = new ResizeObserver(measure);
        observer.observe(track);

        const animate = (time) => {
            if (lastTimeRef.current === null) {
                lastTimeRef.current = time;
            }

            const delta = Math.min(
                (time - lastTimeRef.current) / 1000,
                0.05
            );

            lastTimeRef.current = time;

            if (!pausedRef.current && !document.hidden) {
                positionRef.current +=
                    speedRef.current * delta * directionRef.current;

                updatePosition();
            }

            animationRef.current =
                requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationRef.current);
            observer.disconnect();
        };
    }, [updatePosition]);

    const handleNext = () => {
        directionRef.current = 1;
    };

    const handlePrev = () => {
        directionRef.current = -1;
    };

    return (
        <section className="product_wrapper">
            <div className="container">

                <div className="product_header">
                    <div>
                        <span>THE EDIT</span>
                        <h2>Curated for you.</h2>
                    </div>

                    <div className="slider_arrows">
                        <button
                            type="button"
                            onClick={handlePrev}
                            aria-label="Scroll products left"
                        >
                            &#10094;
                        </button>

                        <button
                            type="button"
                            onClick={handleNext}
                            aria-label="Scroll products right"
                        >
                            &#10095;
                        </button>
                    </div>
                </div>

                <div
                    className="products_slider"
                    onMouseEnter={() => {
                        pausedRef.current = true;
                    }}
                    onMouseLeave={() => {
                        pausedRef.current = false;
                    }}
                    onFocusCapture={() => {
                        pausedRef.current = true;
                    }}
                    onBlurCapture={(event) => {
                        if (!event.currentTarget.contains(event.relatedTarget)) {
                            pausedRef.current = false;
                        }
                    }}
                >
                    <div
                        className="products_track"
                        ref={trackRef}
                    >
                        {[0, 1].map((group) => (
                            <div
                                className="slider_group"
                                key={group}
                                aria-hidden={group === 1}
                            >
                                {products.map((product) => (
                                    <div
                                        className="card_wrapper"
                                        key={`${group}-${product.id}`}
                                    >
                                        <div className="card_img">
                                            <img
                                                src={product.image}
                                                alt={group === 0 ? product.title : ''}
                                                loading="lazy"
                                                decoding="async"
                                                draggable="false"
                                            />

                                            <span>{product.badge}</span>
                                        </div>

                                        <div className="card_details">
                                            <span>{product.category}</span>
                                            <h3>{product.title}</h3>
                                            <p>{product.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Products;