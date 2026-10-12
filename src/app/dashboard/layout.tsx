type propsType = {
	children: React.ReactNode;
};

export default function DashboardLayout({ children }: propsType) {
	return (
		<section>
			<p className="">this the the dashboard layout: </p>
			{children}
		</section>
	);
}
