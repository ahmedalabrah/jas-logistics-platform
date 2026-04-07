import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background px-6 py-10 text-text-primary md:px-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-3 font-heading text-4xl font-extrabold tracking-tight">
          JAS Logistics OS Screens
        </h1>
        <p className="mb-10 text-text-secondary">
          Token-powered React + Tailwind implementation from your static design
          system.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="/dashboard"
            className="rounded-tokenXl border border-border-default bg-surface-2 p-6 transition hover:border-brand-purple-500"
          >
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-text-tertiary">
              Screen 01
            </p>
            <h2 className="font-heading text-2xl font-bold">Master Dashboard</h2>
            <p className="mt-2 text-sm text-text-secondary">
              Side nav, KPI cards, live map panel, critical alerts and AI
              intelligence cards.
            </p>
          </Link>

          <Link
            href="/organ"
            className="rounded-tokenXl border border-border-default bg-surface-2 p-6 transition hover:border-brand-purple-500"
          >
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-text-tertiary">
              Screen 02
            </p>
            <h2 className="font-heading text-2xl font-bold">Organ Screen</h2>
            <p className="mt-2 text-sm text-text-secondary">
              Organism component showcase with modal demo, timeline, wizard,
              compliance board and slide drawer.
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
