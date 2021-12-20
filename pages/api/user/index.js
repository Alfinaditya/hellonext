import users from '../../../users.json';

export default function handler(_req, res) {
	res.status(200).json(users);
}
