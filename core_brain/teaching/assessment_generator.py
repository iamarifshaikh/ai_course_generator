from core_brain.llm.base import BaseLLM
from core_brain.teaching.assessment_prompt import compile_assessment_prompt


def generate_assessment(llm: BaseLLM, concept, difficulty):
    system, user = compile_assessment_prompt(concept, difficulty)
    return llm.generate(system, user)["text"]
