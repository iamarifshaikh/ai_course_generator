from core_brain.extractor.prereq_fallback import fallback_prereqs
from core_brain.utils.json_guard import force_json
from core_brain.llm.base import BaseLLM

PREREQ_PROMPT = """
You are an automated knowledge graph compiler.

Given a list of learning concepts, determine the TRUE educational prerequisites.

Return ONLY a JSON array.
No explanations. No markdown. No prose.

Rules:

• Create an edge A → B only if concept A is REQUIRED to understand concept B.
• Do NOT include weak, optional, or convenience relations.
• Do NOT create cycles.
• Output must form a Directed Acyclic Graph (DAG).
• Only include strong educational dependencies.

Output Schema:

[
  { "from": "concept_id", "to": "concept_id" }
]

Failure to follow this schema is an error.
"""

def build_prereqs(llm: BaseLLM, concepts: list):
    result = llm.generate(PREREQ_PROMPT, str(concepts))
    edges = force_json(result["text"])
    if not edges:
        edges = fallback_prereqs(concepts)
    return edges