import React from 'react';

import './index.css';

export default function MemeList (props) {
	const memes = props.items.map((item) => {
		return (
			<li key={item.id} className="collection-item avatar">
				<div className="meme-list__meme">
					<div className="meme__inner-column">
						<a href={item.url} target="_blank">
							<img
								className="circle-border"
								width="150"
								height="150"
								src={item.url}
							/>
						</a>
					</div>
					<div className="meme__inner-column">
						<strong className="title">Text:</strong>
						<p>{item.text}</p>
					</div>
				</div>
			</li>
		);
	});

	return (
		<ul className="collection">
			{memes}
		</ul>
	);
};
