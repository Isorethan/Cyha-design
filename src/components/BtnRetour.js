import React from 'react';
import {Link} from 'react-router-dom';

export default function BtnRetour(props) {
    return (
        <Link to={props.link} className={props.class}>
            {props.description}
        </Link>
    )
}
