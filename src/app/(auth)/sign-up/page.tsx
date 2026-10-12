"use client";

import { ChevronDown, CircleUserRound, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { SiteNavbar } from "@/components/ui/site-navbar";
import { authClient } from "@/lib/auth-client";

function GoogleIcon(props: React.ComponentProps<"svg">) {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
			<path
				d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
				fill="#4285F4"
			/>
			<path
				d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
				fill="#34A853"
			/>
			<path
				d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
				fill="#FBBC05"
			/>
			<path
				d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
				fill="#EA4335"
			/>
		</svg>
	);
}

export default function SignUpPage() {
	const router = useRouter();
	const { data: session, isPending: isSessionPending } =
		authClient.useSession();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [role, setRole] = useState<"seeker" | "recruiter" | "">("");
	const [image, setImage] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (!isSessionPending && session?.user) {
			router.replace("/");
		}
	}, [session, isSessionPending, router]);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (isLoading) return;

		if (!name.trim()) {
			toast.error("Please enter your name.");
			return;
		}
		if (!email.trim()) {
			toast.error("Please enter a valid email address.");
			return;
		}
		if (password.length < 8) {
			toast.error("Password must be at least 8 characters long.");
			return;
		}
		if (!role) {
			toast.error("Please select your role.");
			return;
		}

		setIsLoading(true);

		try {
			const { error } = await authClient.signUp.email({
				name: name.trim(),
				email: email.trim(),
				password,
				image: image.trim() || "",
				role: role.toLowerCase().trim() as "seeker" | "recruiter",
			});

			if (error) {
				toast.error(
					error.message || "Failed to create account. Please try again.",
				);
				console.log(error);
				setIsLoading(false);
				return;
			}

			toast.success("Account created successfully! Welcome to HireLoop.");
			router.push("/");
			router.refresh();
		} catch {
			toast.error("An unexpected error occurred while creating your account.");
			setIsLoading(false);
		}
	};

	const handleGoogleSignIn = () => {
		toast.info("Google authentication will be available soon.");
	};

	return (
		<>
			<SiteNavbar />
			<main className="relative flex min-h-screen items-center justify-center bg-black px-4 py-28">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-brand/10 via-transparent to-transparent pointer-events-none" />

				<Card className="relative w-full max-w-md border border-white/10 bg-neutral-900/95 text-text-inverse shadow-2xl backdrop-blur-md">
					<CardHeader className="gap-2 text-center">
						<CardTitle className="font-heading text-2xl font-bold tracking-tight">
							Create an account
						</CardTitle>
						<CardDescription className="text-neutral-400">
							Join HireLoop today to find your next opportunity
						</CardDescription>
					</CardHeader>

					<CardContent className="flex flex-col gap-6">
						<form onSubmit={handleSubmit} className="flex flex-col gap-4">
							<div className="flex flex-col gap-2">
								<Label
									htmlFor="name"
									className="text-sm font-medium text-neutral-200"
								>
									Full Name
								</Label>
								<Input
									id="name"
									type="text"
									placeholder="Jane Doe"
									value={name}
									onChange={(e) => setName(e.target.value)}
									required
									autoComplete="name"
									className="h-10 border-white/15 bg-neutral-950 text-text-inverse placeholder:text-neutral-500 focus-visible:border-brand focus-visible:ring-brand/30"
								/>
							</div>

							<div className="flex flex-col gap-2">
								<Label
									htmlFor="email"
									className="text-sm font-medium text-neutral-200"
								>
									Email
								</Label>
								<Input
									id="email"
									type="email"
									placeholder="name@example.com"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
									autoComplete="email"
									className="h-10 border-white/15 bg-neutral-950 text-text-inverse placeholder:text-neutral-500 focus-visible:border-brand focus-visible:ring-brand/30"
								/>
							</div>

							<div className="flex flex-col gap-2">
								<Label
									htmlFor="password"
									className="text-sm font-medium text-neutral-200"
								>
									Password
								</Label>
								<Input
									id="password"
									type="password"
									placeholder="At least 8 characters"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
									autoComplete="new-password"
									className="h-10 border-white/15 bg-neutral-950 text-text-inverse placeholder:text-neutral-500 focus-visible:border-brand focus-visible:ring-brand/30"
								/>
							</div>

							<div className="flex flex-col gap-2">
								<Label
									htmlFor="role"
									className="text-sm font-medium text-neutral-200"
								>
									Role
								</Label>
								<div className="relative">
									<select
										id="role"
										name="role"
										value={role}
										onChange={(e) =>
											setRole(
												e.target.value.toLowerCase() as "seeker" | "recruiter",
											)
										}
										required
										className={`h-10 w-full appearance-none rounded-lg border border-white/15 bg-neutral-950 px-3 pr-8 text-sm transition-colors focus-visible:border-brand focus-visible:ring-brand/30 focus-visible:outline-none ${
											role ? "text-text-inverse" : "text-neutral-500"
										}`}
									>
										<option
											value=""
											disabled
											className="bg-neutral-950 text-neutral-500"
										>
											Select your role
										</option>
										<option
											value="seeker"
											className="bg-neutral-950 text-text-inverse"
										>
											Seeker
										</option>
										<option
											value="recruter"
											className="bg-neutral-950 text-text-inverse"
										>
											Recruiter
										</option>
									</select>
									<ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-neutral-400" />
								</div>
							</div>

							<div className="flex flex-col gap-2">
								<div className="flex items-center justify-between">
									<Label
										htmlFor="image"
										className="text-sm font-medium text-neutral-200"
									>
										Profile Image URL (Optional)
									</Label>
									{image.trim() ? (
										<Avatar className="size-6 border border-white/20">
											<AvatarImage src={image.trim()} alt="Avatar preview" />
											<AvatarFallback>
												<CircleUserRound className="size-4" />
											</AvatarFallback>
										</Avatar>
									) : null}
								</div>
								<Input
									id="image"
									type="url"
									placeholder="https://example.com/avatar.jpg"
									value={image}
									onChange={(e) => setImage(e.target.value)}
									autoComplete="photo"
									className="h-10 border-white/15 bg-neutral-950 text-text-inverse placeholder:text-neutral-500 focus-visible:border-brand focus-visible:ring-brand/30"
								/>
							</div>

							<Button
								type="submit"
								disabled={isLoading}
								className="mt-2 h-11 w-full rounded-xl bg-brand font-semibold text-primary-foreground shadow-[inset_0_3px_10px_rgba(255,255,255,0.2)] hover:bg-brand/90"
							>
								{isLoading ? (
									<>
										<Loader2 className="size-4 animate-spin" />
										Creating account...
									</>
								) : (
									"Create Account"
								)}
							</Button>
						</form>

						<div className="relative flex items-center justify-center">
							<Separator className="bg-white/10" />
							<span className="absolute bg-neutral-900 px-3 text-xs uppercase tracking-wider text-neutral-400">
								or continue with
							</span>
						</div>

						<Button
							type="button"
							variant="outline"
							onClick={handleGoogleSignIn}
							className="h-11 w-full rounded-xl border border-white/15 bg-white/5 font-semibold text-text-inverse transition-colors hover:bg-white/10 hover:text-text-inverse"
						>
							<GoogleIcon className="size-4" />
							Sign in with Google
						</Button>
					</CardContent>

					<CardFooter className="flex items-center justify-center border-t border-white/10 bg-neutral-950/50 py-4 text-center text-sm text-neutral-400">
						<span>Already have an account?</span>
						<Link
							href="/login"
							className="ml-1.5 font-semibold text-brand transition-colors hover:underline hover:text-brand-soft"
						>
							Sign in
						</Link>
					</CardFooter>
				</Card>
			</main>
		</>
	);
}
