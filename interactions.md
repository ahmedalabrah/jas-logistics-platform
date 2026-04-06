# JAS Interaction Pattern Guide (interactions.md)

## Core Interface Patterns

### 1. Real-time Cross-Portal Events
The platform utilizes a "nervous system" architecture where actions in one portal (e.g., Driver completing POD) instantly propagate to others (Client Dashboard, Finance Ledger).
- **Implementation:** Zustand + WebSocket/SSE subscription model.

### 2. TGA Compliance Gate Sequence
The 8-gate compliance engine in FMS-04 uses a sequential async check.
- **Pattern:** Synchronous local checks (Gates 1-7) followed by an asynchronous TGA Wasl API request (Gate 8) with a live timer.

### 3. Wallet Financial Logic
Wallet UI uses the `#8B5CF6` violet accent to signal secure financial mode.
- **Pattern:** Balance updates trigger a 200ms scale/color pulse animation. Low balance states trigger amber persistent alerts.

### 4. Arabic RTL Layouts
Mandatory for Driver App and Client/SC interfaces.
- **Pattern:** Uses CSS logical properties. Sidebar flips to right; form labels and text-align flip; numeric SAR amounts remain LTR.

### 5. AI Insight Streaming
Claude-powered insights (e.g., in the Assistant or Dispute Center) use a typewriter streaming effect.
- **Pattern:** Character-by-character rendering with a typing indicator dot sequence.
