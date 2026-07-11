"use client"

import React from "react"

const complianceStyles = `
  .colytics-compliance__link {
    color: #6b7280;
    text-decoration: underline;
    text-decoration-offset: 2px;
    font-weight: 500;
  }
  .colytics-compliance__link:hover,
  .colytics-compliance__link:focus {
    color: #4b5563;
  }
  .colytics-compliance__dpdp-link {
    color: #6b7280;
    text-decoration: underline;
    text-decoration-offset: 2px;
    font-weight: 500;
    word-break: break-all;
  }
  .colytics-compliance__dpdp-link:hover,
  .colytics-compliance__dpdp-link:focus {
    color: #4b5563;
  }
  @media (max-width: 480px) {
    .colytics-compliance {
      font-size: 13px;
    }
  }
`

type ComplianceSnippetProps = {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
}

export function ComplianceSnippet({ checked, onCheckedChange }: ComplianceSnippetProps) {
  return (
    <>
      <style>{complianceStyles}</style>
      <div
        className="colytics-compliance"
        role="region"
        aria-label="Consent and privacy notices"
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          fontSize: "14px",
          lineHeight: "1.6",
          color: "#6b7280",
          maxWidth: "560px",
          marginTop: "16px",
        }}
      >
        {/* ========== OPT-IN CHECKBOX (GDPR-compliant) ========== */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "10px",
            marginBottom: "12px",
            padding: "12px 14px",
            background: "#f9fafb",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            transition: "all 0.2s ease",
          }}
        >
          <input
            type="checkbox"
            name="marketing_consent"
            id="marketing_consent"
            required
            checked={checked}
            onChange={(event) => onCheckedChange(event.target.checked)}
            aria-required="true"
            aria-describedby="marketing_consent_desc"
            style={{
              width: "18px",
              height: "18px",
              minWidth: "18px",
              minHeight: "18px",
              marginTop: "1px",
              accentColor: "#4f46e5",
              cursor: "pointer",
            }}
          />
          <label
            htmlFor="marketing_consent"
            id="marketing_consent_desc"
            style={{
              cursor: "pointer",
              lineHeight: "1.55",
              color: "#374151",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                color: "#dc2626",
                fontWeight: "600",
              }}
            >
              *
            </span>
            {" "}I agree to receive{" "}
            <a
              href="/cookie-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="colytics-compliance__link"
            >
              promotional emails
            </a>
            {" "}and marketing communications from Colytics AI. I understand I can unsubscribe at any time.
          </label>
        </div>

        {/* ========== PRIVACY POLICY & TERMS LINKS ========== */}
        <p
          style={{
            fontSize: "13px",
            marginBottom: "10px",
            padding: "0 2px",
          }}
        >
          By signing up, you agree to our
          {" "}
          <a
            href="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="colytics-compliance__link"
          >
            Privacy Policy
          </a>
          {" "}and{" "}
          <a
            href="/terms-of-service"
            target="_blank"
            rel="noopener noreferrer"
            className="colytics-compliance__link"
          >
            Terms of Service
          </a>
          .
        </p>

      </div>
    </>
  )
}

export default ComplianceSnippet
