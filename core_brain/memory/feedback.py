from core_brain.memory.forgetting import ForgettingModel
from core_brain.learner.mastery import MasteryModel

def process_feedback(concept_id, correct, time_taken, mastery: MasteryModel, memory: ForgettingModel):
    mastery.update(concept_id, correct)
    memory.touch(concept_id, wrong=not correct)
