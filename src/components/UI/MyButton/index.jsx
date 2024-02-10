import React from 'react';
import classNames from 'classnames';
import './MyButton.scss';

function MyButton({ children, type, style, ...props }) {
	const btnClass = classNames({
		btn: true,
		'btn--secondary': type === 'secondary',
		'btn--primary': type === 'primary',
	});

	return (
		<button {...props} className={btnClass} style={style}>
			{children}
		</button>
	);
}

export default MyButton;
