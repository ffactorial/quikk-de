export const createLeistungenHrefFromId = (id) =>
	`/leistungen${!!id ? `/${id}` : ""}`;
