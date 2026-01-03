class MasteryModel:
    def __init__(self):
        self.state = {}

    def get(self, concept_id):
        return self.state.get(concept_id, 0.2)  

    def update(self, concept_id, correct, learn_rate=0.15, slip=0.1):
        p = self.get(concept_id)
        if correct:
            p = p + (1 - p) * learn_rate
        else:
            p = p * (1 - slip)
        self.state[concept_id] = max(0.01, min(0.99, p))
