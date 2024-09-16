import "./Header.css";
import headphonesMobile from "../../assets/home/mobile/image-header.jpg";
import headphonesTablet from "../../assets/home/tablet/image-header.jpg";
import headphonesDesktop from "../../assets/home/desktop/image-hero.jpg";

export default function Header() {
	return (
		<div className="header__section">
			{/* picture element */}
			<picture className="header__image">
				<source media="(min-width: 1024px)" srcSet={headphonesDesktop} />
				<source media="(min-width: 768px)" srcSet={headphonesTablet} />
				<img src={headphonesMobile} alt="Headphones" />
			</picture>
			<div className="header__container">
				<div className="text__container">
					<h1 className="header__title">XX99 Mark II Headphones</h1>
					<p className="header__text">
						Experience natural, lifelike audio and exceptional build quality
						made for the passionate music enthusiast.
					</p>
					<button className="header__button">See Product</button>
				</div>
			</div>
		</div>
	);
}
