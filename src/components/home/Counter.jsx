import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCounters } from '../../manager/actions/homePage/counter/counterAction';

const Counter = () => {
    const dispatch = useDispatch();
    const { counters = [] } = useSelector((state) => state.counter);

    useEffect(() => {
        dispatch(getCounters());
    }, [dispatch]);

    // custom component for counter
    const CounterItem = ({ targetNumber }) => {
        const [count, setCount] = useState(0);
        const [inView, setInView] = useState(false);

        // IntersectionObserver use when counter coming in screen 
        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setInView(true);
                    }
                },
                {
                    threshold: 0.5, // if counters 50% is in screen counter started
                }
            );

            const element = document.getElementById(`counter-${targetNumber}`);
            if (element) {
                observer.observe(element);
            }

            return () => {
                if (element) {
                    observer.unobserve(element);
                }
            };
        }, [targetNumber]);

        useEffect(() => {
            if (inView && count < targetNumber) {
                const interval = setInterval(() => {
                    setCount((prevCount) => {
                        if (prevCount < targetNumber) {
                            return prevCount + 1;
                        } else {
                            clearInterval(interval); // if counter completed number stopped
                            return prevCount;
                        }
                    });
                }, 10); // counter speed

                return () => clearInterval(interval); // Interval Cleanup
            }
        }, [inView, count, targetNumber]);

        return (
            <div id={`counter-${targetNumber}`}>
                <span>{count}</span> {/*max number */}
            </div>
        );
    };

    return (
        <div className='counter container'>
            <Row>
                {counters.map((item, index) => (
                    <Col key={index} className='counter-item my-5' xs={12} sm={6} md={3}>
                        {/* Use CounterItem component  */}
                        <CounterItem targetNumber={item.number} />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Counter;
