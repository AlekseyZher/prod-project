type Mods = Record<string, boolean | string>;

export function classNames(
	cls: string,
	mods: Mods = {},
	additional: string[] = [],
): string {
	return [
		cls,
		...additional.filter(Boolean),
		...Object.entries(mods)
			.filter(([className, value]) => Boolean(value))
			.map(([className]) => className),
	].join(' ');
}
// export function classNames(
//   cls: string,
//   mods?: Mods,
//   additional?: string[]
// ): string {
//   // Обеспечим, что cls всегда строка
//   if (typeof cls !== "string") {
//     console.error("Первый параметр должен быть строкой");
//     return "";
//   }

//   return [
//     cls, // Основной класс
//     ...(additional || []).filter(Boolean), // Защита от undefined
//     ...(mods ? Object.entries(mods) : []) // Проверяем, передан ли модификатор
//       .filter(([className, value]) => Boolean(value)) // Оставляем только истинные значения
//       .map(([className]) => className), // Берем только имена классов
//   ].join(" "); // Объединяем все классы в строку
// }
