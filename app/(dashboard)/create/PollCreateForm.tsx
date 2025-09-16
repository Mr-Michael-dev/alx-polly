// PollCreateForm enables users to create a poll with custom options
// Intent: Allow users to easily define questions and options for community voting
"use client";

import { useState } from "react";
import { createPoll } from "@/app/lib/actions/poll-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PollCreateForm() {
  // State for poll options, error, and success feedback
  const [options, setOptions] = useState(["", ""]);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Handles change in poll option input fields
  // Intent: Enable dynamic option editing for flexible poll creation
  const handleOptionChange = (idx: number, value: string) => {
    setOptions((opts) => opts.map((opt, i) => (i === idx ? value : opt)));
  };

  // Adds a new option input field
  // Intent: Let users add more choices for voters
  const addOption = () => setOptions((opts) => [...opts, ""]);
  // Removes an option input field if more than two options exist
  // Intent: Prevent polls with too few choices
  const removeOption = (idx: number) => {
    if (options.length > 2) {
      setOptions((opts) => opts.filter((_, i) => i !== idx));
    }
  };

  return (
    <form
      action={async (formData) => {
        setError(null);
        setSuccess(false);
        // Calls createPoll server action to create a new poll
        // Intent: Persist poll data and provide feedback to user
        const res = await createPoll(formData);
        if (res?.error) {
          setError(res.error);
        } else {
          setSuccess(true);
          setTimeout(() => {
            window.location.href = "/polls";
          }, 1200);
        }
      }}
      className="space-y-6 max-w-md mx-auto"
    >
      {/* Poll question input */}
      <div>
        <Label htmlFor="question">Poll Question</Label>
        <Input name="question" id="question" required />
      </div>
      {/* Poll options input fields */}
      <div>
        <Label>Options</Label>
        {options.map((opt, idx) => (
          <div key={idx} className="flex items-center gap-2 mb-2">
            <Input
              name="options"
              value={opt}
              onChange={(e) => handleOptionChange(idx, e.target.value)}
              required
            />
            {options.length > 2 && (
              <Button type="button" variant="destructive" onClick={() => removeOption(idx)}>
                Remove
              </Button>
            )}
          </div>
        ))}
        <Button type="button" onClick={addOption} variant="secondary">
          Add Option
        </Button>
      </div>
      {/* Error and success feedback */}
      {error && <div className="text-red-500">{error}</div>}
      {success && <div className="text-green-600">Poll created! Redirecting...</div>}
      <Button type="submit">Create Poll</Button>
    </form>
  );
}