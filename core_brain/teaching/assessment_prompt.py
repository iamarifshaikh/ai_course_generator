def compile_assessment_prompt(concept, difficulty):
    system = f"You are an examiner. Difficulty: {difficulty}"

    user = f"""
Create:
- 3 quiz questions
- 3 flashcards
- 1 coding task
For: {concept}
"""

    return system.strip(), user.strip()
