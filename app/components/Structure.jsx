// import React from 'react'
import './structure.module.css'
export default function Structure(author, content, img) {
	return (
		<div className='container'>
            <div className='gradient'>

            </div>
			<h1>QUOTES</h1>
			<div>
				<div>
					<div>
						<p>''</p>
						<div>
							<h1>Quote : </h1>
							<p>{content}</p>
						</div>
					</div>
					<p>{author}</p>
					<Reload />
				</div>
				<div>
                    <img src={img} alt="image" />
                </div>
			</div>
		</div>
	);
}
