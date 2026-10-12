import AppSidebar from "@/components/dashboard/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

type propsType = {
	children: React.ReactNode;
};

export default function DashboardLayout({ children }: propsType) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main>
				<SidebarTrigger className="md:hidden" />
				{children}
			</main>
		</SidebarProvider>
	);
}
