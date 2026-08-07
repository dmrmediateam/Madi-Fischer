"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { FormLabels } from "@/lib/i18n";

/**
 * Posts to the Cloudflare Worker at /api/contact.
 *
 * This is a client component talking to a Worker, not a Next.js Server Action —
 * static export has no server, so Server Actions and API routes are unavailable.
 */
export function ContactForm({ labels }: { labels: FormLabels }) {
  const [status, setStatus] = React.useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const [error, setError] = React.useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError(null);

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", { method: "POST", body: data });
      const json = (await res.json()) as { ok: boolean; error?: string };

      if (!res.ok || !json.ok) {
        throw new Error(json.error ?? labels.genericError);
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : labels.genericError);
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-lg border bg-card p-6" role="status">
        <p className="font-medium">{labels.successTitle}</p>
        <p className="text-muted-foreground mt-1 text-sm">
          {labels.successBody}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      {/* Honeypot — hidden from people, filled in by bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="name">{labels.name}</Label>
        <Input id="name" name="name" required autoComplete="name" />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="email">{labels.email}</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="phone">{labels.phone}</Label>
        <Input id="phone" name="phone" type="tel" autoComplete="tel" />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="message">{labels.message}</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={labels.placeholder}
        />
      </div>

      {error ? (
        <p className="text-destructive text-sm" role="alert">
          {error}
        </p>
      ) : null}

      <Button type="submit" size="lg" disabled={status === "sending"}>
        {status === "sending" ? labels.sending : labels.submit}
      </Button>
    </form>
  );
}
