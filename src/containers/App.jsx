// https://xsltdev.ru/react/redux/asinhronnie-actions/

import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { User } from "../components/User";
import { Page } from "../components/Page";
// import action function (1)
import { getPhotos } from "../actions/PageActions";
import { handleLogin } from "../actions/UserActions";

function App(props) {
	// it will get props from store ( mapStateToProps and mapDispatchToProps) (2)
	const { user, page, getPhotosAction, handleLoginAction } = props;

	return (
		<div className="App">
			<Page
				photos={page.photos}
				year={page.year}
				isFetching={page.isFetching}
				getPhotos={getPhotosAction}
			/>

			<User
				name={user.name}
				isFetching={user.isFetching}
				error={user.error}
				handleLogin={handleLoginAction}
			/>
		</div>
	);
}

//maps data from store to props
const mapStateToProps = (store) => {
	// console.log(store);
	return { user: store.user, page: store.page };
};

//maps actions
const mapDispatchToProps = (dispatch) => {
	// по сути сделали в пропсах того компонента куда подконнектим эту функцию
	// поле setYearAction в которую передали функцию обратного вызова с параметром год

	// return {
	// 	setYearAction: (year) => dispatch(setYear(year)),
	// };

	return {
		getPhotosAction: (year) => dispatch(getPhotos(year)),
		handleLoginAction: () => dispatch(handleLogin()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
