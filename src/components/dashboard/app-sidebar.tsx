"use client";

import {
	Bookmark,
	Briefcase,
	Building2,
	CreditCard,
	FileText,
	Home,
	LayoutDashboard,
	LogOut,
	type LucideIcon,
	PlusCircle,
	Search,
	Settings,
	Tag,
	Users,
	Wallet,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/components/ui/sidebar";

type Role = "seeker" | "recruiter" | "admin";
type NavItem = { title: string; href: string; icon: LucideIcon };

// 1. Links per role: the only thing that changes between roles
const roleLinks: Record<Role, NavItem[]> = {
	seeker: [
		{ title: "Overview", href: "/dashboard/seeker", icon: LayoutDashboard },
		{
			title: "Browse & Apply",
			href: "/dashboard/seeker/jobs",
			icon: Briefcase,
		},
		{ title: "Saved Jobs", href: "/dashboard/seeker/saved", icon: Bookmark },
		{
			title: "My Applications",
			href: "/dashboard/seeker/applications",
			icon: FileText,
		},
		{ title: "Billing", href: "/dashboard/seeker/billing", icon: CreditCard },
		{ title: "Settings", href: "/dashboard/seeker/settings", icon: Settings },
	],
	recruiter: [
		{ title: "Overview", href: "/dashboard/recruiter", icon: LayoutDashboard },
		{
			title: "My Company",
			href: "/dashboard/recruiter/company",
			icon: Building2,
		},
		{
			title: "Manage Jobs",
			href: "/dashboard/recruiter/jobs",
			icon: Briefcase,
		},
		{
			title: "Post a Job",
			href: "/dashboard/recruiter/jobs/new",
			icon: PlusCircle,
		},
		{
			title: "Billing",
			href: "/dashboard/recruiter/billing",
			icon: CreditCard,
		},
		{
			title: "Settings",
			href: "/dashboard/recruiter/settings",
			icon: Settings,
		},
	],
	admin: [
		{ title: "Overview", href: "/dashboard/admin", icon: LayoutDashboard },
		{ title: "Manage Users", href: "/dashboard/admin/users", icon: Users },
		{
			title: "Manage Companies",
			href: "/dashboard/admin/companies",
			icon: Building2,
		},
		{ title: "Manage Jobs", href: "/dashboard/admin/jobs", icon: Briefcase },
		{ title: "Payments", href: "/dashboard/admin/payments", icon: Wallet },
		{ title: "Settings", href: "/dashboard/admin/settings", icon: Settings },
	],
};

// 2. Public links: same for everyone
const publicLinks: NavItem[] = [
	{ title: "Home", href: "/", icon: Home },
	{ title: "Browse Jobs", href: "/jobs", icon: Search },
	{ title: "Companies", href: "/companies", icon: Building2 },
	{ title: "Pricing", href: "/pricing", icon: Tag },
];

type AppSidebarProps = {
	user: { name: string; email: string; image?: string; role: Role };
	onLogout: () => void; // end the session, then redirect to "/"
};

const userDemo = {
	name: "Ratul",
	email: "ratul@example.com",
	role: "seeker" as const, // try "recruiter" or "admin"
};

export default function AppSidebar({
	user = userDemo,
	onLogout,
}: AppSidebarProps) {
	const pathname = usePathname();
	const { setOpenMobile } = useSidebar();

	// 3. One renderer for both groups
	const renderLinks = (items: NavItem[]) => (
		<SidebarMenu>
			{items.map((item) => (
				<SidebarMenuItem key={item.href}>
					<SidebarMenuButton
						isActive={pathname === item.href}
						render={
							<Link href={item.href} onClick={() => setOpenMobile(false)} />
						}
					>
						<item.icon />
						<span>{item.title}</span>
					</SidebarMenuButton>
				</SidebarMenuItem>
			))}
		</SidebarMenu>
	);

	return (
		<Sidebar>
			<SidebarHeader className="gap-3 p-4">
				<Link href="/" className="text-xl font-bold">
					HireLoop
				</Link>
				<div className="flex items-center gap-3">
					<Avatar>
						<AvatarImage src={user.image} alt={user.name} />
						<AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
					</Avatar>
					<div className="min-w-0 text-sm">
						<p className="truncate font-medium">{user.name}</p>
						<p className="truncate text-xs text-muted-foreground">
							{user.email}
						</p>
						<p className="text-xs capitalize text-primary">{user.role}</p>
					</div>
				</div>
			</SidebarHeader>

			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Dashboard</SidebarGroupLabel>
					{renderLinks(roleLinks[user.role])}
				</SidebarGroup>
				<SidebarGroup>
					<SidebarGroupLabel>Explore</SidebarGroupLabel>
					{renderLinks(publicLinks)}
				</SidebarGroup>
			</SidebarContent>

			<SidebarFooter className="p-4">
				<Button
					variant="outline"
					className="w-full justify-start"
					onClick={onLogout}
				>
					<LogOut /> Logout
				</Button>
			</SidebarFooter>
		</Sidebar>
	);
}
