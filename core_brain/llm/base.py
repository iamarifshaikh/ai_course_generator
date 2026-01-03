from abc import ABC, abstractmethod
from typing import Dict, Any

class BaseLLM(ABC):

    @abstractmethod
    def generate(
        self,
        system_prompt: str,
        user_prompt: str,
        *,
        temperature: float = 0.3,
        max_tokens: int = 1024,
        response_format: str = "text"
    ) -> Dict[str, Any]:
        pass
