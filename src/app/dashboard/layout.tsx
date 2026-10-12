import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import AppSidebar from "@/components/dashboard/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Spinner } from "@/components/ui/spinner";
import { auth } from "@/lib/auth";

type propsType = {
	children: React.ReactNode;
};

export default function DashboardLayout({ children }: propsType) {
	return (
		<Suspense
			fallback={
				<div className="relative z-50 w-full h-svh flex items-center justify-center">
					<Spinner className="size-8"></Spinner>
				</div>
			}
		>
			<DashboardShell>{children}</DashboardShell>
		</Suspense>
	);
}

async function DashboardShell({ children }: { children: React.ReactNode }) {
	const session = await auth.api.getSession({
		headers: await headers(), // you need to pass the headers object.
	});
	const user = session?.user;
	if (!user) return notFound();

	return (
		<SidebarProvider>
			<AppSidebar user={user} />
			<main>
				<SidebarTrigger className="md:hidden" />
				{children}
			</main>
		</SidebarProvider>
	);
}
