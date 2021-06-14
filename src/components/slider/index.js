import React from 'react';
import './slider.css';

export default function ({ min, max, step, value, onChange }) {
	return (
		<>
			<input
				type='range'
				min={min}
				max={max}
				step={step}
				value={value}
				onChange={onChange}
				className='slider'
			/>
		</>
	);
}
