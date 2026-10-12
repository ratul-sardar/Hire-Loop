"use client";

import { CircleUserRound, LogOut, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authClient } from "@/lib/auth-client";

const links = [
	{ href: "/#jobs", label: "Browse Jobs" },
	{ href: "/#company", label: "Company" },
	{ href: "/pricing", label: "Pricing" },
];

const actionClassName =
	"inline-flex min-h-13 items-center justify-center rounded-xl px-6 text-body-lg font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

function SiteNavbar() {
	const router = useRouter();
	const { data: session, isPending } = authClient.useSession();

	const handleSignOut = async () => {
		try {
			await authClient.signOut({
				fetchOptions: {
					onSuccess: () => {
						toast.success("Signed out successfully");
						router.push("/");
						router.refresh();
					},
					onError: (ctx) => {
						toast.error(ctx.error.message || "Failed to sign out");
					},
				},
			});
		} catch {
			toast.error("Failed to sign out");
		}
	};

	return (
		<header className="fixed inset-x-0 top-5 z-50 mx-auto w-11/12 max-w-360 rounded-2xl bg-nav px-4 py-3 text-text-inverse sm:px-6.5">
			<div className="flex items-center justify-between gap-4">
				<Link href="/" aria-label="HireLoop home" className="shrink-0">
					<Image
						src="/images/hireloop-logo-7e5f40.png"
						alt="HireLoop"
						width={154}
						height={44}
						priority
					/>
				</Link>

				<nav
					aria-label="Main navigation"
					className="hidden items-center gap-6 lg:flex"
				>
					<div className="flex items-center gap-10 text-base leading-[1.8] tracking-[-0.0125em]">
						{links.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="transition-colors hover:text-text-inverse/70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
							>
								{link.label}
							</Link>
						))}
					</div>
					<div
						aria-hidden="true"
						className="h-6 border-l border-text-inverse/40"
					/>

					{isPending ? (
						<div className="h-10 w-28 animate-pulse rounded-full bg-white/10" />
					) : session?.user ? (
						<DropdownMenu>
							<DropdownMenuTrigger
								className="cursor-pointer rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring"
								aria-label="User profile and menu"
							>
								<Badge
									variant="outline"
									className="flex h-11 items-center gap-2.5 rounded-full border-white/20 bg-white/10 px-3.5 py-1 text-sm font-medium text-text-inverse transition-colors hover:bg-white/15"
								>
									{session.user.image ? (
										<Image
											src={session.user.image}
											alt={session.user.name || "User profile"}
											width={24}
											height={24}
											unoptimized
											className="size-6 rounded-full object-cover"
										/>
									) : (
										<CircleUserRound
											className="size-5 shrink-0 text-text-inverse"
											aria-hidden="true"
										/>
									)}
									<span className="max-w-32 truncate text-xs font-semibold sm:text-sm">
										{session.user.name || session.user.email}
									</span>
								</Badge>
							</DropdownMenuTrigger>
							<DropdownMenuContent
								align="end"
								className="w-56 border border-white/15 bg-neutral-900 text-text-inverse shadow-xl"
							>
								<DropdownMenuGroup>
									<DropdownMenuLabel className="font-normal">
										<div className="flex flex-col gap-1">
											<p className="text-sm font-semibold leading-none text-text-inverse">
												{session.user.name || "User"}
											</p>
											<p className="truncate text-xs leading-none text-muted-foreground">
												{session.user.email}
											</p>
										</div>
									</DropdownMenuLabel>
									<DropdownMenuItem
										className="my-1 cursor-pointer"
										render={<Link href={"/dashboard"}>Go to dashboard</Link>}
									/>
								</DropdownMenuGroup>
								<DropdownMenuSeparator className="bg-white/15" />
								<DropdownMenuGroup>
									<DropdownMenuItem
										className="cursor-pointer text-destructive focus:bg-destructive/10 focus:text-destructive"
										onClick={handleSignOut}
									>
										<LogOut className="mr-2 size-4" />
										<span>Sign out</span>
									</DropdownMenuItem>
								</DropdownMenuGroup>
							</DropdownMenuContent>
						</DropdownMenu>
					) : (
						<div className="flex items-center gap-4">
							<Link
								href="/login"
								className={`${actionClassName} text-brand hover:bg-text-inverse/10`}
							>
								Sign In
							</Link>
							<Link
								href="/sign-up"
								className={`${actionClassName} border border-text-inverse/10 bg-brand text-primary-foreground shadow-[inset_0_3px_10px_rgba(255,255,255,0.2)] hover:bg-brand/90`}
							>
								Get Started
							</Link>
						</div>
					)}
				</nav>

				<details className="group relative lg:hidden">
					<summary
						aria-label="Toggle navigation menu"
						className="flex size-11 cursor-pointer list-none items-center justify-center rounded-xl border border-text-inverse/15 text-text-inverse focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring [&::-webkit-details-marker]:hidden"
					>
						<Menu aria-hidden="true" className="size-5" />
					</summary>
					<nav
						aria-label="Mobile navigation"
						className="absolute right-0 top-[calc(100%+0.75rem)] flex w-[min(20rem,calc(100vw-2rem))] flex-col gap-4 rounded-2xl border border-text-inverse/10 bg-nav p-4 shadow-xl"
					>
						<div className="flex flex-col gap-1">
							{links.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className="rounded-lg px-3 py-2.5 text-base hover:bg-text-inverse/10 focus-visible:outline-2 focus-visible:outline-ring"
								>
									{link.label}
								</Link>
							))}
						</div>

						<div className="flex flex-col gap-2 border-t border-text-inverse/15 pt-4">
							{isPending ? (
								<div className="h-10 w-full animate-pulse rounded-xl bg-white/10" />
							) : session?.user ? (
								<div className="flex flex-col gap-3">
									<div className="flex items-center justify-between">
										<Badge
											variant="outline"
											className="flex h-11 items-center gap-2.5 rounded-full border-white/20 bg-white/10 px-3.5 py-1 text-sm font-medium text-text-inverse"
										>
											{session.user.image ? (
												<Image
													src={session.user.image}
													alt={session.user.name || "User profile"}
													width={24}
													height={24}
													unoptimized
													className="size-6 rounded-full object-cover"
												/>
											) : (
												<CircleUserRound
													className="size-5 shrink-0 text-text-inverse"
													aria-hidden="true"
												/>
											)}
											<span className="max-w-40 truncate text-xs font-semibold sm:text-sm">
												{session.user.name || session.user.email}
											</span>
										</Badge>
									</div>
									<button
										type="button"
										onClick={handleSignOut}
										className={`${actionClassName} w-full border border-destructive/30 bg-destructive/10 text-destructive hover:bg-destructive/20`}
									>
										<LogOut className="mr-2 size-4" />
										Sign Out
									</button>
								</div>
							) : (
								<>
									<Link
										href="/login"
										className={`${actionClassName} text-brand hover:bg-text-inverse/10`}
									>
										Sign In
									</Link>
									<Link
										href="/sign-up"
										className={`${actionClassName} border border-text-inverse/10 bg-brand text-primary-foreground shadow-[inset_0_3px_10px_rgba(255,255,255,0.2)] hover:bg-brand/90`}
									>
										Get Started
									</Link>
								</>
							)}
						</div>
					</nav>
				</details>
			</div>
		</header>
	);
}

export { SiteNavbar };
