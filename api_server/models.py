from pydantic import BaseModel
from typing import Optional, List

class StartSessionRequest(BaseModel):
    topic: str

class StartSessionResponse(BaseModel):
    session_id: str
    syllabus: List[str]

class NextStepRequest(BaseModel):
    session_id: str
    confusion: float = 0.0
    fatigue: float = 0.2

class StepResponse(BaseModel):
    phase: str
    concept: Optional[str] = None
    content: Optional[str] = None

class FeedbackRequest(BaseModel):
    session_id: str
    concept: str
    correct: bool
    time_taken: int
    user_text: str
    difficulty: str