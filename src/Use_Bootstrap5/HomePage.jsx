import React from 'react'

const HomePage = () =>{
	return (
		<>
		<div className="container-fluit">
			<div className="row w-100 p-0 
			m-0 align-items-center justify-content-evenly"style={{height:600}}> 
				<div className="col-5 align-items-center justify-content-center "  >
					<p>Hello,</p>
					<h3 className="display-5 fw-semibold text-info">I'm BK Lodhi..</h3>
					<p className="h5 ">I'm  a Full Stack Web Developer.</p>
					<p className="text-muted">Similarly, you can use flexbox utilities and Bootstrap Icons to create alerts with icons. Depending on your icons and content, you may want to add more utilities or custom styles.
					</p>
					<button className="btn text-muted btn-outline-light border-info">Learn More</button>
				</div>
				<div className="col-4 d-flex flex-column justify-content-center">
					<img src="./Image/man1.jpg" alt="" className="w-100" height={500} />
				</div>
			</div>
		</div>
		</>
		)
}

export default HomePage;