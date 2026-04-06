# JAS Logistics Platform Overview (PLATFORM.md)

## Executive Summary
The JAS Logistics Platform is a high-fidelity, data-dense enterprise LogTech SaaS solution designed specifically for the Saudi Arabian market. It encompasses 219 screens across 7 distinct portals, integrating 5 payment methods, full TGA regulatory compliance, and 34 embedded AI features.

## Technology Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS v3 + shadcn/ui (Customized)
- **State Management:** Zustand (for global, portal, and AI states)
- **Data Fetching:** TanStack Query v5
- **Charts:** Recharts
- **Maps:** Leaflet + React-Leaflet (CartoDB Dark Matter tiles)
- **Animations:** Framer Motion

## Portal Ecosystem
1. **FMS (Fleet Management System):** Internal JAS fleet and driver oversight.
2. **WMS (Warehouse Management):** Inventory, storage plans, and GRN lifecycle.
3. **FreMS (Freight Management):** Multimodal global freight and customs brokerage.
4. **SCP (Sub-Carrier Portal):** External carrier partner operations and earnings.
5. **Client Portal:** Order management, supply chain analytics, and billing.
6. **Driver App:** Mobile-first Arabic interface for en-route operations.
7. **Command & Finance Hub:** Strategic leadership dashboard and revenue engine.

## Authentication & Authorization
- Centralized login with JWT-based session management (httpOnly cookies).
- Role-Based Access Control (RBAC) across 7 portals.
- Automated TGA/Wasl and Absher verification integrations.
