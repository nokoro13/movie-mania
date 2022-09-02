import { useEffect } from 'react';

const PageAbout = () => {

    useEffect(() => {
		document.title = `About`;
	}, []);

    return (
        <section>
            <h2>About page</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nihil, doloremque illum aperiam dolor, est aliquid officia reprehenderit atque voluptatibus rerum pariatur earum nisi quasi modi, enim harum totam rem!</p>
        </section>
    )

}

export default PageAbout;