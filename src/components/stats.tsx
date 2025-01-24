import { Card } from "react-bootstrap"
import type { TypingStats } from "../types/typing"

interface StatsDisplayProps {
  stats: TypingStats
  timeLeft: number
}

export function StatsDisplay({ stats, timeLeft }: StatsDisplayProps) {
  // Format time as MM:SS
  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`

  return (
    <div className="row g-4 mb-4">
      <div className="col-md-4">
        <Card>
          <Card.Body className="text-center">
            <div className="display-6" title="Words Per Minute">
              {stats.wpm}
            </div>
            <div className="text-muted">WPM</div>
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-4">
        <Card>
          <Card.Body className="text-center">
            <div className="display-6" title="Typing Accuracy">
              {stats.accuracy}%
            </div>
            <div className="text-muted">Accuracy</div>
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-4">
        <Card>
          <Card.Body className="text-center">
            <div className="display-6" title="Time Remaining">
              {formattedTime}
            </div>
            <div className="text-muted">Time Left</div>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

