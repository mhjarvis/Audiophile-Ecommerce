import "./ShopSection.css";
import ShopSectionItem from "./ShopSectionItem";
import headphoneImage from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakerImage from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphoneImage from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import arrow from "../../assets/shared/desktop/icon-arrow-right.svg";

export default function ShopSection() {
	return (
		<>
			<section className="shop-section__container">
				<ShopSectionItem
					image={headphoneImage}
					alt="Headphones"
					title="Headphones"
					arrow={arrow}
				/>
			</section>
			<section className="shop-section__container">
				<ShopSectionItem
					image={speakerImage}
					alt="Speakers"
					title="Headphones"
					arrow={arrow}
				/>
			</section>
			<section className="shop-section__container">
				<ShopSectionItem
					image={earphoneImage}
					alt="Earphones"
					title="Headphones"
					arrow={arrow}
				/>
			</section>
		</>
	);
}
