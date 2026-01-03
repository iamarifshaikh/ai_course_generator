from core_brain.llm.base import BaseLLM
from core_brain.teaching.prompt_compiler import compile_prompt
from core_brain.rag.retriever import retrieve


def generate_lesson(
    llm: BaseLLM,
    *,
    concept: str,
    pedagogy: dict,
    use_rag: bool = True,
    temperature: float = 0.3,
    max_tokens: int = 1024,
):
    """
    Hybrid grounded teaching generator.
    """

    rag_context = None
    if use_rag:
        docs = retrieve(concept)
        rag_context = "\n".join(d[2]["text"] for d in docs if d and len(d)>=3) if docs else None

    system_prompt, user_prompt = compile_prompt(concept, pedagogy, rag_context)

    result = llm.generate(
        system_prompt,
        user_prompt,
        temperature=temperature,
        max_tokens=max_tokens
    )

    return result["text"]