import { useEffect } from 'react';

const PageFavorites = () => {

    useEffect(() => {
		document.title = `Favorites`;
	}, []);

    return (
        <section>
            <h2>Favorites Page</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quod quia recusandae sit eveniet reprehenderit aliquid fugiat nesciunt incidunt praesentium sint explicabo modi, ullam expedita a autem ratione, exercitationem consequuntur.</p>
        </section>
    )

}

export default PageFavorites;