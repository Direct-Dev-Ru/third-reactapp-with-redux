import React from "react";
import PropTypes from "prop-types";

export function Page(props) {
	const { year, photos, getPhotos, isFetching } = props;

	const onBtnClick = (evt) => {
		if (evt.target.tagName !== 'BUTTON') return;
		const year = +evt.target.innerText;
		getPhotos(year);
	};

	const renderTemplate = () => {
		const { photos, isFetching, error } = props;

		if (error) {
			return <p className="error">Во время загрузки фото произошла ошибка</p>;
		}

		if (isFetching) {
			return <p>Photos loading...</p>;
		} else {
			return photos.map((entry, index) => (
				<div key={`${index}-${entry.id}`} className="photo">
					<p>
						<img src={entry.sizes[2].url} alt="" />
					</p>
					<p>{entry.likes.count} ❤</p>
				</div>
			));
		}
	};

	return (
		<div className="ib page">
			<div onClick={onBtnClick}>
				<button className="btn">2020</button>
				<button className="btn">2019</button>
				<button className="btn">2018</button>
				<button className="btn">2017</button>
				<button className="btn">2016</button>
			</div>
			<br />
			<br />
			<hr />
			<h3>{year} год</h3>
			<br />
			<br />
			<hr />

			{isFetching ? <p>Loading...</p> : <p>У тебя {photos.length} фото.</p>}
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "space-evenly",
					marginTop: "1.5rem",
				}}
			>
				{renderTemplate()}
			</div>
		</div>
	);
}

Page.propTypes = {
	year: PropTypes.number.isRequired,
	photos: PropTypes.array.isRequired,
	getPhotos: PropTypes.func.isRequired,
	error: PropTypes.string,
	isFetching: PropTypes.bool.isRequired,
};

// export default User
