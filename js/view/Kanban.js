import Column from "./Column.js";

export default class Kanban {
	constructor(root) {
		this.root = root;

		Kanban.columns().forEach(column => {
			const columnView = new Column(column.id, column.title);

			this.root.appendChild(columnView.elements.root);
		});
	}

	static columns() {
		return [
			{
				id: -1,
				title: "Открыта"
			},
			{
				id: -2,
				title: "В работе"
			},
			{
				id: -3,
				title: "Тест"
			},
			{
				id: -4,
				title: "Выполнена"
			},
			{
				id: -5,
				title: "Оплачено"
			}
			
		];
	}
}
