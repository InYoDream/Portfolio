
export default function DateF() {
	const renderDate = () => {
		const date = new Date();
		return date.toDateString();
	};
	return (
		<div>
			<h1>{renderDate()}</h1>
		</div>
	);
}
