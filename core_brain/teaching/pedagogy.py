def build_pedagogy(profile, mastery):
    return {
        "tone": profile["tone"],
        "lesson_size": profile["lesson_size"],
        "visual_density": profile["visual_density"],
        "quiz_strictness": profile["quiz_strictness"],
        "assignments": profile["assignments"],
        "difficulty": "easy" if mastery < 0.4 else "medium" if mastery < 0.7 else "hard"
    }