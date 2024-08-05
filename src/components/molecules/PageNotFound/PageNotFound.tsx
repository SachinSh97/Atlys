import React from 'react';
import { Link } from 'react-router-dom';
import { PUBLIC_URL } from '@config/index';
import { Wrapper } from '@components/molecules/PageNotFound/styles';
import pageNotFound from '@assets/images/page-not-found.svg';

const PageNotFound: React.FC = () => {
	return (
		<Wrapper className="flex flex-column flex-center flex-justify-center">
			<img src={pageNotFound} alt="page-not-found" />
			<span className="page-not-found">Page Not found</span>
			<span className="flex flex-column">
				<span className="description-text">
					The Page you are looking for doesn't exist or an other error occurred.
				</span>
				<span className="description-text">
					Go back, or head over to <Link to={PUBLIC_URL}>home</Link> to choose a new direction.
				</span>
			</span>
		</Wrapper>
	);
};

export default PageNotFound;
