import math, time

class MemoryModel:
    def __init__(self):
        self.last_seen = {}
        self.decay = {}

    def recall_prob(self, concept_id, mastery):
        if concept_id not in self.last_seen:
            return mastery
        days = (time.time() - self.last_seen[concept_id]) / 86400
        d = self.decay.get(concept_id, 0.15)
        return mastery * math.exp(-d * days)

    def touch(self, concept_id, wrong=False):
        self.last_seen[concept_id] = time.time()
        if wrong:
            self.decay[concept_id] = min(0.5, self.decay.get(concept_id, 0.15) + 0.05)