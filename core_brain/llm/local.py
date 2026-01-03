from transformers import AutoTokenizer, AutoModelForCausalLM, pipeline
from core_brain.llm.base import BaseLLM

class LocalLLM(BaseLLM):
    def __init__(self, model_name: str = "mistralai/Mistral-7B-Instruct-v0.2"):
        self.tokenizer = AutoTokenizer.from_pretrained(model_name)
        self.model = AutoModelForCausalLM.from_pretrained(
            model_name,
            device_map="auto",
            torch_dtype="auto"
        )
        self.pipe = pipeline("text-generation", model=self.model, tokenizer=self.tokenizer)

    def generate(
        self,
        system_prompt: str,
        user_prompt: str,
        *,
        temperature: float = 0.3,
        max_tokens: int = 1024,
        response_format: str = "text"
    ):
        prompt = f"<system>{system_prompt}</system>\n<user>{user_prompt}</user>\n<assistant>"
        result = self.pipe(
            prompt,
            max_new_tokens=max_tokens,
            temperature=temperature,
            do_sample=True
        )[0]["generated_text"]

        return {
            "text": result.split("<assistant>")[-1].strip(),
            "tokens_used": None,
            "model": "local"
        }