# JAS Logistics API Contracts (api-contracts.md)

## External Integrations

### 1. TGA Wasl API
- **Purpose:** Vehicle operational card verification and shipment permit generation.
- **Key Endpoints:**
  - `POST /v1/wasl/verify-card`: Validates TGA Op. Card data.
  - `POST /v1/wasl/generate-permit`: Requests a 48-hour shipment permission.
- **Latency Note:** Generation typically takes 15–60 seconds.

### 2. Hyperpay Gateway
- **Purpose:** Secure card payments (Mada, Visa, Mastercard, AMEX).
- **Integration:** Hosted form integration with 3DS2 challenge support.
- **Webhooks:** `payment.captured`, `payment.failed`.

### 3. SADAD API
- **Purpose:** National bill payment system integration.
- **Flow:** Bill generation returns a SADAD Bill Number; asynchronous confirmation via SARIE webhook.

### 4. ZATCA FATOORA
- **Purpose:** E-invoicing compliance for Saudi Arabia.
- **Format:** XML UBL 2.1 with embedded QR codes.
- **Sync:** Real-time submission upon invoice generation.

### 5. SARIE (Saudi Payments)
- **Purpose:** Batch payout processing and real-time bank reconciliation.
- **Format:** XML batch file export for carrier settlements.
