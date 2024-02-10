import React from 'react';
import './index.scss'
import classNames from 'classnames';

function index({ title, type, info, subtitle}) {
	const textClassName = classNames({
		leftTextBlock: type === 'leftTextBlock',
		rightTextBlock: type === 'rightTextBlock',
	});

	return (
		<div className={textClassName}>
			<b>{title}</b>
			<strong>{subtitle}</strong>
			<p>{info}</p>
		</div>
	);
}

export default index;
