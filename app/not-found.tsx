import Link from "next/link";
import { FileQuestion, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex h-[80vh] w-full flex-col items-center justify-center gap-6 bg-background text-foreground">
      <div className="flex flex-col items-center gap-2 text-center">
        <div className="rounded-full bg-red-100 p-4 dark:bg-red-900/20">
          <FileQuestion className="h-12 w-12 text-red-600 dark:text-red-500" />
        </div>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          404
        </h1>
        <h2 className="text-xl font-semibold text-foreground/80">Page Not Found</h2>
        <p className="max-w-[500px] text-muted-foreground text-center">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been
          moved, deleted, or never existed.
        </p>
      </div>

      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
      >
        Return to Dashboard
      </Link>
    </div>
  );
}
