"use client";

import Link from "next/link";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

const healthCards = [
  { label: "FMS", value: "84", unit: "Vehicles" },
  { label: "WMS", value: "94%", unit: "Capacity" },
  { label: "FreMS", value: "12", unit: "Customs" },
  { label: "SCP", value: "312", unit: "Vehicles" },
  { label: "Client", value: "847", unit: "Orders" },
  { label: "Driver", value: "206", unit: "En Route" },
  { label: "Payment", value: "2.4M", unit: "SAR Total", accent: true },
];

const kpis = [
  { title: "Revenue MTD", value: "SAR 8.4M", delta: "+12.4%", icon: "payments" },
  { title: "Gross Margin", value: "22.4%", delta: "+2.1%", icon: "query_stats" },
  { title: "Active FAs", value: "34", delta: "Steady", icon: "handshake" },
  { title: "Compliance", value: "96.1%", delta: "-0.4%", icon: "verified_user" },
];

const alerts = [
  {
    icon: "block",
    title: "Route Blockage: Highway 40",
    detail: "Sandstorm event near Al-Ula delaying 14 active FMS units.",
    border: "border-red-500",
    iconColor: "text-red-400",
  },
  {
    icon: "alarm",
    title: "Customs Bottleneck: King Fahd",
    detail: "Processing delay > 4hrs for 8 inbound reefer containers.",
    border: "border-orange-500",
    iconColor: "text-orange-400",
  },
  {
    icon: "inventory_2",
    title: "WMS Threshold Breach",
    detail: "Riyadh Hub 02 reaching 98% utilization. Divert advised.",
    border: "border-blue-500",
    iconColor: "text-blue-400",
  },
  {
    icon: "sync_problem",
    title: "Driver Fatigue Sync Alert",
    detail: "6 en-route drivers approaching HOS limits in next 45m.",
    border: "border-brand-purple-500",
    iconColor: "text-brand-purple-500",
  },
];

const aiInsights = [
  {
    icon: "severe_cold",
    title: "Forward Capacity Alert",
    subtitle: "Predictive Utilization",
    detail:
      "Critical surge in cold-chain utilization identified for April 18-22. Revenue of SAR 380,000 currently at risk due to asset shortfall.",
  },
  {
    icon: "group_remove",
    title: "Client Retention Risk",
    subtitle: "Churn Prediction Model",
    detail:
      "High churn probability detected for Al-Noor Pharma (72%) and Global Foods (64%). Immediate service audit recommended.",
  },
  {
    icon: "rocket_launch",
    title: "Market Opportunity",
    subtitle: "Growth Intelligence",
    detail:
      "Heuristic models identify 340% projected growth on the Dammam to Bahrain corridor. Advise aggressive fleet deployment.",
  },
];

export function MasterDashboard() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <aside className="fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-white/10 bg-[#0f0f1a]/80 p-4 backdrop-blur-xl">
        <div className="p-2">
          <h1 className="font-heading text-2xl font-black uppercase tracking-tight text-[#d4691e]">
            JAS Logistics
          </h1>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-text-secondary">Master Command</p>
        </div>
        <nav className="mt-6 flex-1 space-y-2">
          {[
            "Command Center",
            "Alert Center",
            "Order Queue",
            "Spot Quoting",
            "Agreements",
          ].map((label, index) => (
            <a
              key={label}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition ${
                index === 0
                  ? "border-r-2 border-[#d4691e] bg-[#d4691e]/10 text-[#d4691e]"
                  : "text-text-secondary hover:bg-white/5 hover:text-text-primary"
              }`}
              href="#"
            >
              <MaterialIcon
                name={["dashboard_customize", "notifications_active", "pending_actions", "request_quote", "history_edu"][index]}
              />
              <span>{label}</span>
            </a>
          ))}
        </nav>
        <Link
          href="/organ"
          className="mb-3 rounded-xl border border-brand-purple-500/40 bg-brand-purple-700/20 px-4 py-3 text-center text-xs font-bold text-brand-purple-300 transition hover:bg-brand-purple-700/30"
        >
          Open Organ Screen
        </Link>
      </aside>

      <main className="pl-64">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-white/10 bg-[#0f0f1a]/70 px-8 backdrop-blur-lg">
          <div className="flex items-center gap-8">
            <h2 className="font-heading text-xl font-extrabold text-[#d4691e]">Command Center</h2>
            <nav className="hidden items-center gap-6 md:flex">
              <a className="border-b-2 border-[#d4691e] pb-1 text-sm font-bold text-[#d4691e]" href="#">
                Global View
              </a>
              <a className="text-sm font-bold text-text-secondary hover:text-text-primary" href="#">
                Metrics
              </a>
              <a className="text-sm font-bold text-text-secondary hover:text-text-primary" href="#">
                Logs
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-lg bg-surface-4 px-4 py-2 text-xs font-bold">Export Data</button>
            <button className="rounded-lg bg-[#d4691e] px-4 py-2 text-xs font-bold text-white">
              Execute Order
            </button>
          </div>
        </header>

        <div className="space-y-8 p-8">
          <section className="grid gap-4 xl:grid-cols-7">
            {healthCards.map((card) => (
              <article
                key={card.label}
                className="rounded-2xl border-l-2 border-[#d4691e] bg-surface-1 p-4 transition hover:bg-surface-2"
              >
                <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-text-secondary">
                  {card.label}
                </p>
                <h3 className={`font-heading text-2xl font-black ${card.accent ? "text-[#d4691e]" : ""}`}>
                  {card.value}
                </h3>
                <p className="text-[10px] text-text-secondary">{card.unit}</p>
              </article>
            ))}
          </section>

          <section className="grid gap-6 lg:grid-cols-4">
            {kpis.map((kpi, idx) => (
              <article key={kpi.title} className="rounded-3xl bg-surface-2 p-6">
                <div className="mb-4 flex items-start justify-between">
                  <MaterialIcon
                    name={kpi.icon}
                    className={
                      idx === 0
                        ? "text-[#d4691e]"
                        : idx === 1
                        ? "text-brand-purple-300"
                        : idx === 2
                        ? "text-brand-purple-500"
                        : "text-semantic-warning"
                    }
                  />
                  <span className="rounded bg-white/5 px-2 py-0.5 text-xs font-bold text-text-secondary">
                    {kpi.delta}
                  </span>
                </div>
                <p className="mb-1 text-xs font-bold uppercase tracking-widest text-text-secondary">{kpi.title}</p>
                <p className="font-heading text-3xl font-black">{kpi.value}</p>
              </article>
            ))}
          </section>

          <section className="grid grid-cols-12 gap-8">
            <article className="relative col-span-12 min-h-[420px] overflow-hidden rounded-3xl bg-surface-2 shadow-tokenLg lg:col-span-8">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLv5QJJbQ5yko31tKjvT5Vk3cyAJE8X713xFQi4oqoY9DF4WB5emSWtrDCixN7EMj0SN1NiJk7t7FVNDfj1LNKIHNF5b0tmNCY8jhahmqn_eHLwcLHrSFTJkED3ROHMiByPb5rJGYJ5OJExA0kZ5qq4-tkd3Ne4WcUMEDsc7g40lLMEhbzzsM4ql8dsC36ZWLAGLVhK-4NrEWiYL-X5rL7CyW-bahMubq6PsNLdCjX_vG_okTyolMhpBySqyAstgxXSkr6zVBYQQ"
                alt="Saudi logistics network map"
                className="h-full w-full object-cover opacity-60"
              />
              <div className="absolute left-6 top-6 rounded-xl border border-white/10 bg-[#0f0f1a]/80 p-4 backdrop-blur-md">
                <p className="text-[10px] font-bold uppercase tracking-wide text-text-secondary">
                  Live Network Tracking
                </p>
                <h5 className="mt-1 text-lg font-bold">Kingdom of Saudi Arabia</h5>
              </div>
            </article>
            <aside className="col-span-12 flex flex-col gap-3 lg:col-span-4">
              <div className="flex items-center justify-between">
                <h5 className="flex items-center gap-2 font-bold">
                  <MaterialIcon name="priority_high" className="text-[#d4691e]" />
                  Critical Alerts
                </h5>
                <button className="text-xs font-bold text-[#d4691e]">View All</button>
              </div>
              <div className="space-y-2 rounded-3xl bg-surface-1 p-2">
                {alerts.map((alert) => (
                  <article
                    key={alert.title}
                    className={`flex items-start gap-4 rounded-2xl border-l-4 bg-surface-3 p-4 ${alert.border}`}
                  >
                    <MaterialIcon name={alert.icon} className={`mt-1 ${alert.iconColor}`} />
                    <div>
                      <p className="text-sm font-bold">{alert.title}</p>
                      <p className="mt-1 text-xs text-text-secondary">{alert.detail}</p>
                    </div>
                  </article>
                ))}
              </div>
            </aside>
          </section>

          <section className="space-y-4">
            <h5 className="flex items-center gap-2 font-heading text-lg font-bold">
              <MaterialIcon name="auto_awesome" className="text-[#d4691e]" />
              AI Network Intelligence
            </h5>
            <div className="grid gap-6 lg:grid-cols-3">
              {aiInsights.map((insight, idx) => (
                <article
                  key={insight.title}
                  className="rounded-3xl border border-white/10 bg-gradient-to-br from-surface-2 to-surface-1 p-6"
                >
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                      <MaterialIcon
                        name={insight.icon}
                        className={
                          idx === 0
                            ? "text-[#d4691e]"
                            : idx === 1
                            ? "text-brand-purple-300"
                            : "text-brand-purple-500"
                        }
                      />
                    </div>
                    <div>
                      <h6 className="font-bold">{insight.title}</h6>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-text-secondary">
                        {insight.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-text-secondary">{insight.detail}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
