def decide_next_action(mastery, recall_prob, confusion, fatigue, archetype=None):
    """
    Frontal cognitive cortex
    """

    if fatigue > 0.8:
        return "revise"

    if recall_prob < 0.5:
        return "revise"

    if mastery < 0.4:
        return "scaffold"

    if archetype in ["abstraction_gap", "transfer_failure"]:
        return "visual"

    if mastery < 0.7:
        return "quiz"

    if mastery < 0.9:
        return "visual_example"

    return "advance"
