export interface TypingStats {
    wpm: number
    accuracy: number
    correctChars: number
    incorrectChars: number
    totalChars: number
  }
  
  export interface WordProps {
    text: string
    active: boolean
    correct?: boolean
    incorrect?: boolean
  }
  
  