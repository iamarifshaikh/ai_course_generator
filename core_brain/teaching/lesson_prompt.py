def compile_lesson_prompt(concept, pedagogy, rag_context=None):
    system = f"""
    You are a personal AI teacher.

    Tone: {pedagogy['tone']}
    Lesson size: {pedagogy['lesson_size']}
    Visual density: {pedagogy['visual_density']}
    Difficulty: {pedagogy['difficulty']}
    """

    user = f"Explain the concept clearly: {concept}"

    if rag_context:
        user += f"\nUse this reference:\n{rag_context}"

    user += "\nONLY explain. Do NOT quiz or assign."

    return system.strip(), user.strip()
