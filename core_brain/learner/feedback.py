from core_brain.learner.mastery import MasteryModel
from core_brain.learner.memory import MemoryModel

def process_feedback(concept_id, correct, time_taken, mastery: MasteryModel, memory: MemoryModel):
    mastery.update(concept_id, correct)
    memory.touch(concept_id, wrong=not correct)

    reward = 2 if correct and time_taken < 20 else 1 if correct else -1
    return reward