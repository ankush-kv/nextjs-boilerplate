import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function VerifyPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Verify your email</CardTitle>
          <CardDescription>
            We&apos;ve sent a verification code to your email address. Enter it below to verify your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="code">Verification Code</Label>
              <Input id="code" placeholder="Enter 6-digit code" className="text-center text-lg tracking-widest" />
            </div>
            <Button type="submit" className="w-full">Verify Email</Button>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <p className="text-sm text-muted-foreground">
            Didn&apos;t receive the code?{" "}
            <button type="button" className="text-primary hover:underline">Resend</button>
          </p>
          <p className="text-sm text-muted-foreground">
            <Link href="/login" className="text-primary hover:underline">Back to Sign in</Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
