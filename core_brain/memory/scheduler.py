from core_brain.planning.curriculum import RECALL_THRESHOLD

def needs_revision(concept_id, mastery, memory_model):
    return memory_model.recall_prob(concept_id, mastery) < RECALL_THRESHOLD
