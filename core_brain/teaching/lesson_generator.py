from core_brain.llm.base import BaseLLM
from core_brain.teaching.lesson_prompt import compile_lesson_prompt
from core_brain.rag.retriever import retrieve


def generate_lesson(llm: BaseLLM, concept, pedagogy, use_rag=True):
    rag_context = None
    if use_rag:
        docs = retrieve(concept)
        if docs:
            rag_context = "\n".join(d[2]["text"] for d in docs if d and len(d) >= 3)

    system, user = compile_lesson_prompt(concept, pedagogy, rag_context)
    return llm.generate(system, user)["text"]
