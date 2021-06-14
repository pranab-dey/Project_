import React from 'react';
import './slider.css';

export default function ({ min, max, step, value, handleChange }) {
	return (
		<>
			<input
				type='range'
				min={min}
				max={max}
				step={step}
				defaultValue={value}
				onChange={handleChange}
				className='slider'
			/>
			<label>{value}</label>
		</>
	);
}
