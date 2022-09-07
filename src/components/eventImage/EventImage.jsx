import React from "react";
import './EventImage.css'
export const EventImage = ({imageUrl, showModal, AreThereTickets}) => {
	return (
		<aside className="eds-event-card-content__image-container" aria-hidden="true">
			<a 
				className={`eds-event-card-content__action-link ${AreThereTickets() ? "cursorPointer" : ""}`}
				aria-label=""
				rel="noopener"
			>
				<div 
					className={"eds-event-card-content__image-wrapper eds-event-card-content__image-wrapper--sharp-corners"}
					onClick={showModal}
				>
					<div className="eds-event-card-content__image-content eds-event-card-content__image-content--sharp-corners">
						<div className="eds-event-card-content__image-placeholder">
						</div>
						<img
							className="eds-event-card-content__image eds-max-img"						
							src={imageUrl}
							alt="VINO AL ROBLE"
							loading="lazy"
						>
						</img>
					</div>

				</div>
			</a>
		</aside>
	);
};