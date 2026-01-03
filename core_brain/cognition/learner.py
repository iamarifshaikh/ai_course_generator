from core_brain.cognition.bkt import BKT
from core_brain.cognition.irt import probability_correct

class CognitiveLearner:
    def __init__(self):
        self.concepts = {}
        self.theta = 0.0

    def get_mastery(self, concept_id):
        if concept_id not in self.concepts:
            self.concepts[concept_id] = BKT()
        return self.concepts[concept_id].knowledge

    def update(self, concept_id, correct: bool, difficulty: float):
        if concept_id not in self.concepts:
            self.concepts[concept_id] = BKT()

        bkt = self.concepts[concept_id]
        new_mastery = bkt.update(correct)

        pred = probability_correct(self.theta, difficulty)
        error = (1 if correct else 0) - pred
        self.theta += 0.05 * error

        return new_mastery, self.theta
