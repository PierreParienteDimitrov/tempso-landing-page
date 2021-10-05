import React from 'react';
import Button from '../Button';

const Homescreen = () => {
	return (
		<div className='w-full min-h-screen bg-background'>
			<div className=' min-h-screen flex flex-wrap space-y-10'>
				{/* Text */}
				<div className='mt-28 md:mt-64 px-10 w-full lg:w-6/12 flex flex-col items-start space-y-10 text-white'>
					<div className='flex flex-col items-start space-y-6'>
						<h1>(Re)discover classical music!</h1>
						<h5 className='font-light'>
							Download tempso and stream thousand of hours of classical music for
							free*.
						</h5>
					</div>
					<div className='flex flex-wrap space-y-4 md:space-y-0 md:space-x-8'>
						<Button
							variant='outline'
							color='lateRomantic'
							size='lg'
							label='download for iOS'
						/>
						<Button
							variant='outline'
							color='lateRomantic'
							size='lg'
							label='download for Android'
						/>
					</div>
				</div>
				{/* Image */}
				<div className='w-full lg:w-6/12 lg:h-screen bg-medieval'></div>
			</div>
		</div>
	);
};

export default Homescreen;
