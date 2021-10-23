import axios from 'axios'

const HistoryAPI = {
	create: history => axios.post('/api/history', history, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`
		}
	}),

	getRankingforSpecificWeek: (num) => axios.get(`api/leaderboard/${num}`
	),

	getWeekNum: () => axios.get('api/history/max', {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`
		}
	}),

	getHistory: (num) => axios.get(`api/history/${num}`, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`
		}
	}),

	getTransaction: (weekNum) => axios.get(`api/history/transaction/${weekNum}`, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`
		}
	}),

	pushTransaction: () => axios.put(`api/history/transaction/`, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`
		},
		body: JSON.stringify({
			crypto_name: "TESTING",
			side: "buy",
			price: 200,
			amount: 1
		})
	}),

	update: (id, updates) => axios.put(`/api/history/${id}`, updates, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`
		}
	}),
	delete: id => axios.delete(`/api/history/${id}`, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`
		}
	})
}

export default HistoryAPI
