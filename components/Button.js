import React from 'react';

const Button = ({ variant, size, label, color }) => {
	return (
		<button className={`${variantDef(variant, color)} ${sizeDef(size)}`}>
			<div className={`text-${size}`}>{label}</div>
		</button>
	);
};

const variantDef = (variant, color) => {
	switch (variant) {
		case 'outline':
			return `transition duration-500 ease-in-out border border-${color} rounded-sm hover:bg-${color} hover:text-white`;
		case 'contained':
			return `bg-${color} rounded-sm`;
		default:
			return;
	}
};

const sizeDef = (size) => {
	switch (size) {
		case 'lg':
			return `px-9 py-3`;
		case 'md':
			return `px-6 py-12`;
		case 'sm':
			return `px-4 py-2`;
		default:
			return;
	}
};

export default Button;
