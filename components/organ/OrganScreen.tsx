import Link from "next/link";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

const toasts = [
  {
    title: "Data Sync Successful",
    description: "Fleet telemetry has been updated with 99.8% accuracy.",
    icon: "check_circle",
    tone: "border-semantic-success text-semantic-success",
  },
  {
    title: "System Breach Detected",
    description: "Unauthorized access attempt in Region NW-4. Lockdown protocol engaged for 3600 seconds.",
    icon: "warning",
    tone: "border-semantic-error text-semantic-error",
  },
  {
    title: "Route Optimization",
    description: "New optimal routes available for 14 active shipments.",
    icon: "info",
    tone: "border-semantic-info text-semantic-info",
  },
];

const timeline = [
  {
    title: "Order Manifest Locked",
    meta: "OCT 12, 09:14 AM • JEDDAH PORT",
    state: "done",
  },
  {
    title: "In-Transit: Customs Gate 4",
    meta: "EST. OCT 14, 02:00 PM • DHAHRAN",
    state: "active",
  },
  {
    title: "Final Destination: Riyadh Dry Port",
    meta: "PROJECTED OCT 16",
    state: "upcoming",
  },
] as const;

export function OrganScreen() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <nav className="fixed left-0 top-0 z-50 flex h-16 w-full items-center justify-between border-b border-border-default bg-black/30 px-8 backdrop-blur-xl">
        <div className="flex items-center gap-10">
          <span className="font-heading text-xl font-bold text-brand-purple-300">JAS Logistics</span>
          <div className="hidden gap-6 text-sm text-text-secondary md:flex">
            <button className="hover:text-text-primary">Operations</button>
            <button className="hover:text-text-primary">Inventory</button>
            <button className="border-b-2 border-brand-purple-300 pb-1 text-brand-purple-300">Analytics</button>
            <button className="hover:text-text-primary">Network</button>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/" className="rounded-md border border-border-default px-3 py-2 text-xs font-semibold text-text-secondary hover:text-text-primary">
            Master Dashboard
          </Link>
          <button className="rounded-md bg-brand-purple-700 px-4 py-2 text-xs font-bold text-white hover:brightness-110">
            Quick Export
          </button>
        </div>
      </nav>

      <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-border-default bg-surface-1 pt-20">
        <div className="px-6 pb-6">
          <p className="font-heading text-sm font-extrabold uppercase tracking-tight text-white">Global Logistics</p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-text-tertiary">Velvet Intelligence v2.1</p>
        </div>
        <nav className="space-y-1 px-4 text-xs font-semibold uppercase tracking-widest">
          <button className="flex w-full items-center gap-2 border-l-4 border-brand-purple-300 bg-brand-purple-700/20 px-3 py-3 text-brand-purple-300">
            <MaterialIcon name="local_shipping" className="text-sm" />
            FMS Portal
          </button>
          <button className="flex w-full items-center gap-2 px-3 py-3 text-text-secondary hover:bg-white/5 hover:text-text-primary">
            <MaterialIcon name="inventory_2" className="text-sm" />
            WMS Portal
          </button>
          <button className="flex w-full items-center gap-2 px-3 py-3 text-text-secondary hover:bg-white/5 hover:text-text-primary">
            <MaterialIcon name="package_2" className="text-sm" />
            Shipments
          </button>
        </nav>
      </aside>

      <main className="ml-64 px-8 pb-10 pt-24">
        <div className="fixed right-8 top-20 z-[120] flex w-80 flex-col gap-3">
          {toasts.map((toast) => (
            <div key={toast.title} className={`glass-panel flex items-start gap-3 rounded-xl border-l-4 p-4 shadow-tokenLg ${toast.tone}`}>
              <MaterialIcon name={toast.icon} />
              <div>
                <p className="text-sm font-bold text-text-primary">{toast.title}</p>
                <p className="text-xs leading-relaxed text-text-secondary">{toast.description}</p>
              </div>
            </div>
          ))}
        </div>

        <header className="mb-10 pr-96">
          <h1 className="font-heading text-4xl font-extrabold">JAS Organism Library</h1>
          <p className="mt-2 max-w-3xl text-sm text-text-secondary">
            System architecture and complex behavioral organisms for Saudi Arabian logistics infrastructure.
          </p>
        </header>

        <div className="grid grid-cols-12 gap-6">
          <section className="relative col-span-12 h-[460px] overflow-hidden rounded-2xl border border-border-default bg-surface-2 p-8 lg:col-span-8">
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 p-8">
              <div className="w-full max-w-md overflow-hidden rounded-xl border border-border-default bg-surface-4 shadow-tokenLg">
                <div className="border-b border-border-default p-5">
                  <h3 className="font-heading text-xl font-bold">Configure Operations Gateway</h3>
                  <p className="text-xs text-text-secondary">Assign primary operators and security protocols for Riyadh Hub.</p>
                </div>
                <div className="space-y-4 p-5">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-purple-300">Gateway ID</label>
                    <input
                      readOnly
                      value="RYD-HUB-004-ALPHA"
                      className="mt-1 w-full border-b-2 border-brand-purple-500/50 bg-surface-1 px-3 py-2 text-sm"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="rounded bg-brand-purple-500 py-2 text-[10px] font-bold text-white">HIGH</button>
                    <button className="rounded bg-surface-1 py-2 text-[10px] font-bold text-text-secondary">STANDARD</button>
                  </div>
                </div>
                <div className="flex justify-end gap-3 bg-surface-3/60 p-4">
                  <button className="text-xs text-text-secondary">Cancel</button>
                  <button className="rounded-md bg-brand-purple-700 px-5 py-2 text-xs font-bold text-white">Save Changes</button>
                </div>
              </div>
            </div>
          </section>

          <aside className="col-span-12 rounded-2xl border border-border-default bg-surface-3 p-6 lg:col-span-4">
            <h3 className="mb-6 flex items-center gap-2 font-heading font-bold">
              <MaterialIcon name="history" className="text-brand-purple-300" />
              Shipment Journey
            </h3>
            <div className="relative space-y-7">
              <div className="absolute left-[11px] top-2 h-[86%] w-px bg-border-default" />
              {timeline.map((item) => (
                <div key={item.title} className="relative flex gap-4">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-border-default bg-surface-4">
                    {item.state === "done" && <MaterialIcon name="check" className="text-sm text-semantic-success" />}
                    {item.state === "active" && <div className="h-2 w-2 rounded-full bg-brand-purple-300" />}
                    {item.state === "upcoming" && <div className="h-1.5 w-1.5 rounded-full bg-text-tertiary" />}
                  </div>
                  <div>
                    <p className={item.state === "active" ? "text-xs font-bold text-brand-purple-300" : "text-xs font-bold"}>
                      {item.title}
                    </p>
                    <p className="text-[10px] uppercase tracking-wide text-text-secondary">{item.meta}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <section className="col-span-12 rounded-2xl border border-border-default bg-surface-2 p-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="font-heading text-lg font-bold">Vehicle Onboarding</h3>
                <p className="text-xs text-text-secondary">Formalizing fleet addition to JAS sovereign network.</p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 text-center text-[10px] font-bold uppercase tracking-widest">
              <div className="space-y-2">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-brand-purple-300 bg-brand-purple-700/20">
                  <MaterialIcon name="check_circle" className="text-brand-purple-300" />
                </div>
                <span className="text-brand-purple-300">Identify</span>
              </div>
              <div className="space-y-2">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-brand-purple-500 text-white">02</div>
                <span>Compliance</span>
              </div>
              <div className="space-y-2 text-text-secondary">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-border-default bg-surface-4">03</div>
                <span>Route Bind</span>
              </div>
              <div className="space-y-2 text-text-secondary">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-border-default bg-surface-4">04</div>
                <span>Verify</span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
