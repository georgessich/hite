import classes from './Accordeon.module.scss';
import { useState, useRef } from 'react';
const Accordeon = () => {
    const [active, setActive] = useState('');
    const [height, setHeight] = useState('0px');
    const content = useRef(null);

    const toggleAccordeon = () => {
        setActive(active === '' ? 'active' : '');
        setHeight(active === 'active' ? "0px" : `${content.current.scrollHeight}px`)
    }
    return (
        <div>
            <button>
                <p>{props}</p>
            </button>
        </div>
    )
}

export default Accordeon;