import { applicationCycle } from '../models/applicationCycle';

const seedApplicationCycle = async () => {


	const application = [
		{
			name: 'cohort 1',
			startDate: '10 dec 2020',
			endDate: '21 oct 2098',
		},
		{
			name: 'cohort 2',
			startDate: '01 jan 2023',
			endDate: '30 jun 3042',
			
		},
	];
	await applicationCycle.deleteMany({});
	await applicationCycle.insertMany(application);
	return null;
};
export default seedApplicationCycle;
