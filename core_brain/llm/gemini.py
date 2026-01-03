from google import genai
from core_brain.llm.base import BaseLLM

class GeminiLLM(BaseLLM):
    def __init__(self, api_key: str, model: str = "gemini-2.5-flash"):
        self.client = genai.Client(api_key=api_key)
        self.model = model

    def generate(self, system_prompt, user_prompt, *,
        temperature: float = 0.3,
        max_tokens: int = 1024,
        response_format: str = "text"):
        response = self.client.models.generate_content(
            model=self.model,
            contents=f"{system_prompt}\n{user_prompt}"
        )

        return {
            "text": response.text,
            "tokens_used": None,
            "model": self.model
        }