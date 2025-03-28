import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGallery } from '../../manager/actions/gallery/galleryAction';

const HomeGallery = () => {
    const dispatch = useDispatch();
    const { galleries = [] } = useSelector((state) => state.gallery);
    const homeGallery = galleries.filter(item=>item.isHome)

    useEffect(() => {
        dispatch(getGallery())
    }, [dispatch])
    return (
        <div className='homeGallery'>
            <div className="top">
                <h2 >Our Sweet Gallery</h2>
                <img className='my-4' src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/title-separator.png" alt="" />
                <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Ullam distinctio nulla ipsa.</p>
            </div>
            <div className="bottom">
                {homeGallery.map((item, index) => (
                    <img key={item._id} width={200} src={item.image} alt="" />
                ))}
            </div>
        </div>
    )
}

export default HomeGallery