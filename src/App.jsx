import React, { useEffect, useState } from 'react';
import Data from './Data.json'

function App() {

	return(

		<>
			{/* Profile */}
			<div className='bg-zinc-800 pb-20 md:pb-0'> 

				<div className='center flex flex-col-reverse md:flex-row justify-between mx-auto'>

					<div className=' text-white text-center flex flex-col justify-center items-center'>

						<h3 className=' text-xl'>Hello Everyone</h3>
						<h3 className=' text-3xl my-5 font-bold'>I am Felix Kai - Web Developer</h3>
						<h3 className=' t6ext-lg'>I'm a web developer proficient in 'HTML', CSS, JavaScript, and React. I create polished interfaces using Bootstrap and Tailwind CSS, and I manage code collaboratively with Git and GitHub.</h3>

						<div className='flex mt-10'>
							<a href="https://www.facebook.com/Felix25679" target='_blank'><i className='fa-brands fa-facebook fa-2xl'></i></a>
							<a href="https://www.youtube.com/@CodingWithFelix788" target='_blank'><i className='fa-brands fa-youtube fa-2xl mx-5'></i></a>
							<a href="https://github.com/felixkai34" target='_blank'><i className='fa-brands fa-github fa-2xl'></i></a>
						</div> 
					</div>

					<img className=' w-32 my-10 md:w-56 md:my-20 mx-auto' src={"profile.png"}/>

				</div>
			</div>


				<div className='center h-96 mx-auto px-3'>

					{/* About Me */}
					<div className='mt-10 mb-14'>
						<div className='flex items-center mb-5'>
							<i className="fa-brands fa-html5 fa-2xl mr-2"></i>
							<span className=' text-3xl text-black font-semibold'>Web Developer</span>
						</div>
						<p className=' font-thin text-xl break-words'>As a web developer, I specialize in creating visually appealing and user-friendly websites. With a strong foundation in web technologies and a commitment to staying current with industry trends, I excel at turning creative concepts into functional digital experiences. My coding expertise ensures clean, maintainable, and high-performance websites. I thrive on collaborating with teams to bring ideas to life, and I'm dedicated to delivering websites that are not only aesthetically pleasing but also secure and accessible.</p>
					</div>

					{/* Project */}
					<div>
						<div className='flex items-center mb-5'>
							<i className="fa-solid fa-bars-progress fa-2xl mr-2"></i>
							<span className=' text-3xl text-black font-semibold'>Project</span>
						</div>

						<div className=' grid grid-cols-1 md:grid-cols-2 gap-3'>
							{Data.map( data => { 
								return(
								<div key={data.id} className=' border rounded-md shadow-md'>
									<img className=' aspect-video' src={data.src} />
									<div className=' p-5'>
										<div className='text-2xl font-semibold mt-2'>{data.title}</div>
										<div className=' text-xs text-gray-500'>(responsive)</div>
										<div className='text-lg font-sans mt-2'>{data.subtitle}</div>
										<ul className=' flex flex-wrap'>
											{data.usedLan.map(lan => <li className='mt-4 text-xs font-semibold px-3 py-2 mr-2 border border-zinc-800 rounded-lg'>{lan}</li>)}
										</ul>
										<div className='flex justify-between'>
											<a href={data.demoLink} target='_blank'><button className=' bg-zinc-800 text-white py-2 px-5 rounded-lg mt-5'>Live Demo</button></a>
											<a href={data.codeLink} target='_blank'><button className=' border border-zinc-800 py-2 px-5 rounded-lg mt-5'> <i className='fa-brands fa-github'></i> Code</button></a>
										</div>
									</div>
								</div>
							)} )} 
						</div>
					</div>

					{/* Footer */}

					<div className='mt-10 pb-20'>
						<div>
							<i className='fa-solid fa-location-dot fa-2xl mr-3'></i>
							<span className=' text-2xl font-semibold'>Live in Myanmar</span>
						</div>
						<div className=' my-5'>
							<i className='fas fa-envelope fa-2xl mr-3'></i>
							<a className='text-2xl font-semibold underline decoration-zinc-800 decoration-dotted underline-offset-8' href="mailto:felixkai245@gmail.com"> Contact via email </a>
						</div>
					</div>

				</div>
		</>

	)
	
}

export default App;  