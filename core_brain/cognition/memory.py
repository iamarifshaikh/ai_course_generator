from core_brain.cognition.spaced import SpacedItem
import time

class MemoryScheduler:
    def __init__(self):
        self.items = {}

    def needs_review(self, concept_id):
        if concept_id not in self.items:
            self.items[concept_id] = SpacedItem()
        return time.time() >= self.items[concept_id].next_review

    def update(self, concept_id, quality):
        if concept_id not in self.items:
            self.items[concept_id] = SpacedItem()
        self.items[concept_id].update(quality)