from core_brain.planning.planner import LearningPlanner
from core_brain.cognition.archetype_engine import ArchetypeEngine
from core_brain.pedagogy.policy import decide_next_action
from core_brain.teaching.lesson_generator import generate_lesson
from core_brain.teaching.assessment_generator import generate_assessment
from core_brain.identity.fingerprint import CognitiveFingerprint
from core_brain.identity.personality_model import TeachingPersonality
from core_brain.identity.optimizer import TeachingOptimizer


class LearningLoop:
    def __init__(self, brain, learner, memory, profile):
        self.brain = brain
        self.learner = learner
        self.memory = memory
        self.profile = profile

        self.planner = LearningPlanner(brain.graph, learner, memory)
        self.archetypes = ArchetypeEngine()

        self.fingerprint = CognitiveFingerprint()
        self.personality = TeachingPersonality()
        self.optimizer = TeachingOptimizer()

        self.last_archetype = None

    def next_step(self, syllabus, confusion=0.0, fatigue=0.2):
        step = self.planner.next_step(syllabus)
        if step["action"] == "complete":
            return {"phase": "complete"}

        concept = step["concept"]
        mastery = self.learner.get_mastery(concept)
        recall = self.memory.recall_prob(concept, mastery)

        action = decide_next_action(mastery, recall, confusion, fatigue, self.last_archetype)

        pedagogy = {
            "tone": self.profile["tone"],
            "lesson_size": self.profile["lesson_size"],
            "visual_density": self.profile["visual_density"],
            "difficulty": action,
        }

        pedagogy = self.optimizer.optimize(pedagogy, self.personality)

        if action in ["scaffold", "explain", "visual", "step_through", "revise"]:
            text = generate_lesson(self.brain.teacher_llm, concept, pedagogy)
            return {"phase": "teach", "content": text, "concept": concept}

        if action == "assess":
            assess = generate_assessment(self.brain.teacher_llm, concept, pedagogy["difficulty"])
            return {"phase": "assess", "content": assess, "concept": concept}

        if action == "advance":
            return {"phase": "advance", "concept": concept}

    def submit_feedback(self, concept, correct, time_taken, user_text, difficulty):
        mastery, ability = self.learner.update(concept, correct, difficulty)
        self.memory.update(concept, quality=5 if correct else 2)

        archetype = self.archetypes.classify(user_text)
        self.last_archetype = archetype

        self.fingerprint.update(correct, time_taken, archetype)
        self.personality.tune(self.fingerprint)

        return mastery, ability
