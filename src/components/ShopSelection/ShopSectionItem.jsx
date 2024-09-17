/* eslint-disable react/prop-types */
import "./ShopSectionItem.css";

export default function ShopSectionItem({ image, alt, title, arrow }) {
	return (
		<div className="item">
			<div className="item__container">
				<img src={image} alt={alt} className="item__image" />
				<h2 className="item__title">{title}</h2>
				<a href="#" className="item__link-container">
					<p className="item__link">SHOP</p>
					<img src={arrow} alt="Orange arrow" className="item__arrow" />
				</a>
			</div>
		</div>
	);
}
