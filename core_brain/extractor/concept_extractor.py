import re
from core_brain.llm.base import BaseLLM
from core_brain.rag.retriever import retrieve
from core_brain.utils.json_guard import force_json

SYSTEM_PROMPT = """
You are an automated curriculum compiler.

Your task is to extract a COMPLETE learning concept universe from the provided content.

You must respond with ONLY a valid JSON array.  
No explanations. No markdown. No prose. No comments.

Each concept must be a TEACHABLE UNIT — something that can be learned independently.

Rules:

• Extract both explicit and implicit concepts.
• Include foundational, intermediate, and advanced concepts.
• Always return at least 5 concepts.
• Concepts must be atomic (no concept may depend on itself).
• Difficulty scale:
    1 = intuitive / surface-level
    3 = abstract multi-step reasoning
    5 = deep internal systems / theoretical models

Output Schema:

[
  {
    "id": "snake_case_short_code",
    "name": "Clear Human Name",
    "difficulty": 1-5,
    "tags": ["domain","subdomain"],
    "short_description": "One concise definition"
  }
]

Failure to follow this schema is an error.
"""

def heuristic_extract(text):
    words = re.findall(r"[A-Za-z][A-Za-z ]{3,30}", text)
    unique = list(dict.fromkeys(words))[:5]
    return [
        {
            "id": w.lower().replace(" ","_"),
            "name": w.strip(),
            "difficulty": 1,
            "tags": ["auto"],
            "short_description": "Auto extracted concept"
        }
        for w in unique
    ]

def extract_concepts(llm: BaseLLM, topic: str):
    docs = retrieve(topic)
    combined = "\n".join(r[2]["text"] for r in docs if r and len(r)>=3) if docs else topic

    result = llm.generate(SYSTEM_PROMPT, combined)

    try:
        return force_json(result["text"])
    except:
        return heuristic_extract(combined)