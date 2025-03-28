import React, { useEffect } from 'react'
import '../assets/styles/gallery.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getGallery } from '../manager/actions/gallery/galleryAction';
const Gallery = () => {
    const dispatch = useDispatch();
    const { galleries = [], loading, error } = useSelector((state) => state.gallery);
    useEffect(() => {
        dispatch(getGallery())
    }, [dispatch]);
    if (loading) return <div>LOADING...</div>
    if (error) return <div>Error: {error}</div>
    return (
        <div className='gallery-container'>
            <div className="banner">
                <p>Portfolio Gallery</p>
            </div>
            <div className="gallery-grid mt-3">
                {galleries.map((item, index) => (
                    <div className="gallery-item" key={index}>
                        <div className="gallery-texts">
                            <p className='mb-4'>{item.title}</p>
                            <span>Cup Of Coffee / Filtered</span>
                        </div>
                        <img src={item.image} alt={`gallery-item-${index}`} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Gallery