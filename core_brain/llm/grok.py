import requests
from core_brain.llm.base import BaseLLM

class GrokLLM(BaseLLM):
    def __init__(self, api_key: str, model: str = "grok-beta"):
        self.api_key = api_key
        self.model = model
        self.endpoint = "https://api.x.ai/v1/chat/completions"

    def generate(
        self,
        system_prompt: str,
        user_prompt: str,
        *,
        temperature: float = 0.3,
        max_tokens: int = 1024,
        response_format: str = "text"
    ):
        payload = {
            "model": self.model,
            "messages": [
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_prompt}
            ],
            "temperature": temperature,
            "max_tokens": max_tokens
        }

        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json"
        }

        r = requests.post(self.endpoint, json=payload, headers=headers, timeout=30)
        r.raise_for_status()
        data = r.json()

        return {
            "text": data["choices"][0]["message"]["content"],
            "tokens_used": data.get("usage", {}).get("total_tokens"),
            "model": self.model
        }