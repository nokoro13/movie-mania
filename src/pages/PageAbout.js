import { useEffect } from 'react';

const PageAbout = () => {

    useEffect(() => {
		document.title = `About`;
	}, []);

    return (
        <section className='page-heading'>
            <h2>About page</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eveniet voluptatem laborum. Tempore ratione fugit neque velit omnis quos est nostrum voluptate. Tenetur saepe culpa quaerat recusandae architecto ullam iste.</p>
        </section>
    )

}

export default PageAbout;