import { redirect } from "next/navigation";

export default function GetStartedRedirectPage() {
  redirect("/sign-up");
}
