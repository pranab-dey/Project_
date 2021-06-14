import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './global.css';

import Slider from './components/slider';

function App() {
	const [slide, setSlide] = useState(0);
	const handleSlide = (e) => {
		setSlide(e.target.value);
		console.log(e.target.value);
	};

	return (
		<>
			{JSON.stringify(slide)}
			<Slider
				min={slide}
				max={100}
				value={slide}
				step={1}
				onChange={handleSlide}
			/>

			<input type='range' min='-10' max='10'></input>
		</>
	);
}

export default App;
