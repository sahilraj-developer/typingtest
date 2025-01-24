import type { WordProps } from "../types/typing"

export function Word({ text, active, correct, incorrect }: WordProps) {
  return (
    <span
      className={`char 
        ${active ? "active" : ""} 
        ${correct ? "correct" : ""} 
        ${incorrect ? "incorrect" : ""}
      `}
      aria-label={`${text}${active ? " (current)" : ""}`}
    >
      {text}
    </span>
  )
}

