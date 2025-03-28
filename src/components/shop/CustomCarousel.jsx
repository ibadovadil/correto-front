import React, { useState, useRef, useEffect } from 'react';

const CustomCarousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const thumbnailContainerRef = useRef(null);

    const handleThumbnailClick = (index) => {
        setCurrentImageIndex(index);
    };

    useEffect(() => {
        if (thumbnailContainerRef.current) {
            thumbnailContainerRef.current.scrollLeft = 0; // İlk yüklendiğinde kaydırma pozisyonunu sıfırla
        }
    }, [images]);

    return (
        <div>
            {images && images.length > 0 && (
                <div>
                    <img
                        src={images[currentImageIndex]}
                        alt={`Slide ${currentImageIndex + 1}`}
                        style={{ width: '100%', objectFit: 'contain' }}
                    />
                    <div
                        ref={thumbnailContainerRef}
                        style={{
                            display: 'flex',
                            marginTop: '10px',
                            overflowX: 'auto', // Yatay kaydırma ekle
                            WebkitOverflowScrolling: 'touch', // iOS'ta düzgün kaydırma için
                        }}
                    >
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                style={{
                                    width: '100px', // Başlangıçta 100px
                                    height: '100px', // Başlangıçta 100px
                                    margin: '5px',
                                    cursor: 'pointer',
                                    flexShrink: 0, // Resimlerin küçülmesini önle
                                }}
                                onClick={() => handleThumbnailClick(index)}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomCarousel;