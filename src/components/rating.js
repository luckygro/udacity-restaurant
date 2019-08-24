import React from 'react';

const Rating = ({count}) => {
	switch (count) {
		case 1: return (
			<div className="rating">
				<span className="sA" />
				<span className="sI" />
				<span className="sI" />
				<span className="sI" />
				<span className="sI" />
			</div>
		)
		case 2: return (
			<div className="rating">
				<span className="sA" />
				<span className="sA" />
				<span className="sI" />
				<span className="sI" />
				<span className="sI" />
			</div>
		)
		case 3: return (
			<div className="rating">
				<span className="sA" />
				<span className="sA" />
				<span className="sA" />
				<span className="sI" />
				<span className="sI" />
			</div>
		)
		case 4: return (
			<div className="rating">
				<span className="sA" />
				<span className="sA" />
				<span className="sA" />
				<span className="sA" />
				<span className="sI" />
			</div>
		)
		case 5: return (
			<div className="rating">
				<span className="sA" />
				<span className="sA" />
				<span className="sA" />
				<span className="sA" />
				<span className="sA" />
			</div>
		)
		default: return (
			<div className="rating">
				<span className="sI" />
				<span className="sI" />
				<span className="sI" />
				<span className="sI" />
				<span className="sI" />
			</div>
		)
	}
}

export default Rating;
