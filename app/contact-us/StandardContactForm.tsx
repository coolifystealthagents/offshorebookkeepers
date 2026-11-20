"use client";

import { useEffect, useState, type FormEvent } from "react";
import { loadAcrTracker } from "../acr-client";

type Props = { endpoint?: string; encoding?: "json" | "form" };
type TrackerWindow = Window & { acrTracker?: { trackLead?: (payload: Record<string, unknown>) => void } };

const companySizes = ["1-5", "5-10", "11-50", "51-250", "251-1k", "1k+"];
const positions = ["Just 1 Position", "2-5 Positions", "6-10 Positions", "11-50 Positions", "51-100 Positions", "101-500 Positions", "501-1,000 Positions", "Over 1,000 Positions"];
const referrals = ["Google", "Email", "LinkedIn", "Reddit", "X / Twitter", "Referral", "ChatGPT / AI", "Outbound Outreach", "Other"];
const personalEmailDomains = new Set(["gmail.com", "googlemail.com", "yahoo.com", "hotmail.com", "outlook.com", "live.com", "icloud.com", "aol.com", "proton.me", "protonmail.com"]);
const countryCodes = [
  ["US", "+1"], ["CA", "+1"], ["ID", "+62"], ["PH", "+63"], ["GB", "+44"],
  ["AU", "+61"], ["NZ", "+64"], ["SG", "+65"], ["IN", "+91"], ["AE", "+971"],
  ["MX", "+52"], ["BR", "+55"], ["ZA", "+27"], ["DE", "+49"], ["FR", "+33"],
];

async function trackAcceptedLead(payload: Record<string, string>) {
  try {
    await loadAcrTracker();
    (window as TrackerWindow).acrTracker?.trackLead?.(payload);
  } catch {}
}

export default function StandardContactForm({ endpoint = "/api/submit-lead", encoding = "json" }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [referral, setReferral] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const zones: Record<string, string> = {
      "Asia/Jakarta": "+62", "Asia/Makassar": "+62", "Asia/Jayapura": "+62", "Asia/Manila": "+63",
      "Europe/London": "+44", "Australia/Sydney": "+61", "Australia/Melbourne": "+61",
      "Pacific/Auckland": "+64", "Asia/Singapore": "+65", "Asia/Kolkata": "+91", "Asia/Dubai": "+971",
    };
    if (zones[zone]) setCountryCode(zones[zone]);
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get("f0") || "").trim()) return;
    const firstName = String(data.get("f1") || "").trim();
    const lastName = String(data.get("f2") || "").trim();
    const email = String(data.get("f3") || "").trim().toLowerCase();
    if (personalEmailDomains.has(email.split("@").pop() || "")) {
      setError("Please use your business email address.");
      return;
    }
    if (!message.trim()) {
      setError("Please tell us which bookkeeping workflow needs support.");
      return;
    }
    const phone = `${countryCode} ${String(data.get("f4") || "").trim()}`.trim();
    const payload: Record<string, string> = {
      firstName, lastName, name: `${firstName} ${lastName}`.trim(), fullName: `${firstName} ${lastName}`.trim(),
      email, businessEmail: email, phone, phoneLocal: String(data.get("f4") || "").trim(), countryCode,
      companyName: String(data.get("f5") || ""), company: String(data.get("f5") || ""),
      website: String(data.get("f6") || ""), companySize: String(data.get("f7") || ""),
      positions: String(data.get("f8") || ""), positionsToFill: String(data.get("f8") || ""),
      referral: String(data.get("f9") || ""), howTheyHeard: String(data.get("f9") || ""),
      referralSpecify: String(data.get("f10") || ""), message: message.trim(),
      source: "contact-form", formId: "contactPageForm",
    };
    setSubmitting(true);
    setError("");
    try {
      const request = encoding === "form"
        ? { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8", "Accept": "application/json" }, body: new URLSearchParams(payload) }
        : { method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify(payload) };
      const response = await fetch(endpoint, request);
      const receipt = await response.json().catch(() => null) as { ok?: boolean } | null;
      if (!response.ok || receipt?.ok !== true) throw new Error("Lead endpoint rejected the request");
      await trackAcceptedLead(payload);
      window.location.assign("/thank-you");
    } catch {
      setError("We could not submit your request. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <div className="sa-form-card">
      <h2>Tell us which bookkeeping workflow needs support</h2>
      <form onSubmit={submit} id="contactPageForm">
        <input className="sa-hp" name="f0" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <div className="sa-grid">
          <label>First Name *<input name="f1" required autoComplete="given-name" /></label>
          <label>Last Name *<input name="f2" required autoComplete="family-name" /></label>
        </div>
        <label>Business Email *<input name="f3" type="text" inputMode="email" pattern="[^\s@]+@[^\s@]+\.[^\s@]+" required autoComplete="email" /><small>Not Accepting Personal Email</small></label>
        <div className="sa-field"><label htmlFor="f4">Phone Number *</label><span className="sa-phone"><select aria-label="Country code" name="f12" value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>{countryCodes.map(([flag, code], i) => <option value={code} key={`${code}-${i}`}>{flag} {code}</option>)}</select><input id="f4" name="f4" type="text" inputMode="tel" required autoComplete="tel-national" /></span></div>
        <div className="sa-grid">
          <label>Company Name *<input name="f5" required autoComplete="organization" /></label>
          <label>Website / URL<input name="f6" placeholder="example.com" autoComplete="url" /></label>
        </div>
        <div className="sa-grid">
          <label>Company Size *<select name="f7" required defaultValue=""><option value="" disabled>Select...</option>{companySizes.map((x) => <option key={x}>{x}</option>)}</select></label>
          <label>How Many Positions to Fill *<select name="f8" required defaultValue=""><option value="" disabled>Select...</option>{positions.map((x) => <option key={x}>{x}</option>)}</select></label>
        </div>
        <label>How Did You Hear About Us? *<select name="f9" required value={referral} onChange={(e) => setReferral(e.target.value)}><option value="" disabled>Select...</option>{referrals.map((x) => <option key={x}>{x}</option>)}</select></label>
        {referral === "Other" ? <label>Please Specify *<input name="f10" required /></label> : null}
        <div className="sa-field"><label id="message-label">Message *</label><div className="sa-message" contentEditable role="textbox" aria-required="true" aria-multiline="true" aria-labelledby="message-label" tabIndex={0} onInput={(event) => setMessage(event.currentTarget.textContent || "")} suppressContentEditableWarning /></div>
        {error ? <p className="sa-error" role="alert">{error}</p> : null}
        <button type="submit" disabled={submitting}>{submitting ? "Submitting..." : "Book a Free Consultation"}</button>
      </form>
    </div>
  );
}
