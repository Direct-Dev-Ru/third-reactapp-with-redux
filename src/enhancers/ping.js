export const ping = (store) => (next) => (action) => {
	console.log(`Тип события: ${action.type}, дополнительные данные события: ${action.payload.year} `);
	return next(action);
};
