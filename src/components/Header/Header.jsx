import React from 'react';
import Head from '../Head/Head';
import TextBox from '../TextBox/TextBox';

export default function Header(props) {
    return (
        <div>
            <Head img={props.img} />
            <TextBox />
        </div>
    )
}
