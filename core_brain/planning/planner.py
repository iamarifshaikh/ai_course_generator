from core_brain.planning.curriculum import (
    PREREQ_MASTERY_THRESHOLD,
    TARGET_MASTERY_THRESHOLD,
)

class LearningPlanner:
    def __init__(self, graph, learner, memory):
        self.graph = graph
        self.learner = learner
        self.memory = memory

    def _prereqs_satisfied(self, concept_id):
        prereqs = self.graph.prerequisites(concept_id)
        return all(self.learner.get_mastery(p) >= PREREQ_MASTERY_THRESHOLD for p in prereqs)

    def next_step(self, syllabus):
        for step in syllabus:
            c = step["concept"]
            mastery = self.learner.get_mastery(c)

            if mastery >= TARGET_MASTERY_THRESHOLD:
                continue

            if not self._prereqs_satisfied(c):
                continue

            if self.memory.needs_review(c):
                return {"action": "revise", "concept": c}

            return {"action": "teach", "concept": c}

        return {"action": "complete"}
