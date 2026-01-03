from dataclasses import dataclass
from typing import List

@dataclass
class Concept:
    id: str
    name: str
    difficulty: int
    tags: List[str]
    short_description: str