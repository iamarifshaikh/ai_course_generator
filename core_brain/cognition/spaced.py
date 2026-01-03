import time
import math, time

class SpacedItem:
    def __init__(self):
        self.interval = 1
        self.ease = 2.5
        self.reps = 0
        self.next_review = time.time()

    def update(self, quality: int):
        if quality < 3:
            self.reps = 0
            self.interval = 1
        else:
            if self.reps == 0:
                self.interval = 1
            elif self.reps == 1:
                self.interval = 6
            else:
                self.interval = int(self.interval * self.ease)

            self.ease += (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
            self.ease = max(1.3, self.ease)
            self.reps += 1

        self.next_review = time.time() + self.interval * 86400

class MemoryScheduler:
    def __init__(self):
        self.items = {}

    def recall_prob(self, concept, mastery):
        if concept not in self.items:
            return mastery

        days = (time.time() - self.items[concept]["last"]) / 86400
        decay = self.items[concept]["decay"]
        return mastery * math.exp(-decay * days)

    def needs_review(self, concept):
        if concept not in self.items:
            return False
        return self.recall_prob(concept, 1.0) < 0.5

    def update(self, concept, quality):
        if concept not in self.items:
            self.items[concept] = {"last": time.time(), "decay": 0.15, "interval": 1}
        else:
            self.items[concept]["interval"] *= 1.6 if quality >= 4 else 0.6
            self.items[concept]["decay"] = max(0.05, self.items[concept]["decay"] - 0.03 if quality >= 4 else self.items[concept]["decay"] + 0.05)
            self.items[concept]["last"] = time.time()