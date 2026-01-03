import json
import re

def force_json(text: str):
    """
    Extract first valid JSON array or object from LLM output.
    """
    match = re.search(r"(\[.*?\]|\{.*?\})", text, re.DOTALL)
    if not match:
        raise ValueError("LLM did not return any JSON")

    raw = match.group(1)

    try:
        return json.loads(raw)
    except Exception:
        raise ValueError("Invalid JSON returned:\n" + raw)