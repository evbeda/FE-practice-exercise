import React from "react";
import './EventImage.css'
export const EventImage = ({imageUrl}) => {
	return (
		<aside className="eds-event-card-content__image-container" aria-hidden="true">
			<a tabIndex="-1"
				// href=""
				className="eds-event-card-content__action-link"
				aria-label=""
				// target="_blank"
				rel="noopener">
				<div className="eds-event-card-content__image-wrapper eds-event-card-content__image-wrapper--sharp-corners">
					<div className="eds-event-card-content__image-content eds-event-card-content__image-content--sharp-corners">
						<div className="eds-event-card-content__image-placeholder"
						// style={{'backgroundColor': 'rgb(188, 160, 77)'}}
						>
						</div>
						<img
							className="eds-event-card-content__image eds-max-img"						
							src={imageUrl}
							alt="VINO AL ROBLE"
							loading="lazy"
							// height="512"
							// width="256"
						>
						</img>
					</div>

				</div>
			</a>
		</aside>
	);
};