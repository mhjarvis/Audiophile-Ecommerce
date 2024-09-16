import "./Header.css";
import headphonesMobile from "../../assets/home/mobile/image-header.jpg";
import headphonesTablet from "../../assets/home/tablet/image-header.jpg";
import headphonesDesktop from "../../assets/home/desktop/image-hero.jpg";

export default function Header() {
	return (
		<section className="header__section">
			<picture className="header__image">
				<source media="(min-width: 1024px)" srcSet={headphonesDesktop} />
				<source media="(min-width: 768px)" srcSet={headphonesTablet} />
				<img src={headphonesMobile} alt="Headphones" />
			</picture>
			<div className="header__container"></div>
		</section>
	);
}
