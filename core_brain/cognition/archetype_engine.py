from core_brain.cognition.archetypes import ARCHETYPES

class ArchetypeEngine:
    def classify(self, user_text):
        t = user_text.lower()
        for k, patterns in ARCHETYPES.items():
            if any(p in t for p in patterns):
                return k
        return None
