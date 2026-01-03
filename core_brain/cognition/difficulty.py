DIFFICULTY_MAP = {
    "easy":  -1.0,
    "normal": 0.0,
    "hard":   1.0
}

def numeric(difficulty_label):
    return DIFFICULTY_MAP.get(difficulty_label, 0.0)
